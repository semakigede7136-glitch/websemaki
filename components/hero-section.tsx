"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchSliderData, transformSliderData, getDirectGoogleDriveUrlBackground } from "@/lib/google-sheets/google-sheets-multi";
import Link from "next/link";

interface SliderData {
  id: string;
  image_url: string;
  title: string;
  subtitle: string;
  is_active: string;
  sort_order: string;
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderData, setSliderData] = useState<SliderData[]>([]);

  useEffect(() => {
    const load = async () => {
      const rows = await fetchSliderData();
      const transformed = transformSliderData(rows);
      if (transformed.length) {
        setSliderData(
          transformed.map((s) => ({
            id: s.id,
            image_url: s.image_url,
            title: s.title,
            subtitle: s.subtitle,
            is_active: "1",
            sort_order: "0",
          }))
        );
        return;
      }
    };
    load();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [sliderData.length]);

  if (sliderData.length === 0) return null;

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${getDirectGoogleDriveUrlBackground(sliderData[currentSlide]?.image_url)})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">{sliderData[currentSlide]?.title}</h1>
          <p className="text-lg md:text-xl mb-8 text-shadow max-w-2xl mx-auto">{sliderData[currentSlide]?.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/profil">
              <Button size="lg" className="bg-green-600 hover:bg-[#d9851f] text-white px-8 py-3">
                Info Lebih Lanjut
              </Button>
            </Link>
            <Link href="/kegiatan">
              <Button variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-gray-900 px-8 py-3">
                Lihat Kegiatan
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm">
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {sliderData.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide ? "bg-white" : "bg-white/50"}`} />
        ))}
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
          <path
            fill="#f8fafc"
            fillOpacity="1"
            d="M0,64L48,74.7C96,85,192,107,288,96C384,85,480,43,576,48C672,53,768,107,864,112C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}

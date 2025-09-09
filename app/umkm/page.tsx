"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchUMKMData, transformUMKMData, UMKMData, getDirectGoogleDriveUrl } from "@/lib/google-sheets/google-sheets-multi";

const categories = ["Semua", "Kerajinan", "Makanan", "Kesehatan", "Fashion", "Digital"];

import { Button } from "@/components/ui/button";
import { Search, Filter, ShoppingBag, Star, MapPin, Phone, Instagram, ExternalLink } from "lucide-react";


export default function UMKMPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [umkmData, setUmkmData] = useState<UMKMData[]>([]);

  const filteredUMKM = umkmData.filter((umkm) => {
    const matchesSearch = umkm.name.toLowerCase().includes(searchTerm.toLowerCase()) || umkm.category.toLowerCase().includes(searchTerm.toLowerCase()) || umkm.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Semua" || umkm.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const rawData = await fetchUMKMData();
        const transformed = transformUMKMData(rawData);
        setUmkmData(transformed);
      } catch (err) {
        console.error("Gagal memuat data UMKM:", err);
      }
    };
    loadData();
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Kerajinan":
        return "bg-blue-100 text-blue-800";
      case "Makanan":
        return "bg-orange-100 text-orange-800";
      case "Kesehatan":
        return "bg-green-100 text-green-800";
      case "Fashion":
        return "bg-pink-100 text-pink-800";
      case "Digital":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">UMKM Dusun</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Dukung dan beli produk dari UMKM lokal Dusun Semaki Gede yang berkualitas dan memiliki nilai budaya tinggi</p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari produk UMKM..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${selectedCategory === category ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Ditemukan <span className="font-semibold text-green-600">{filteredUMKM.length}</span> UMKM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All UMKM Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredUMKM.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUMKM.map((umkm) => (
                <Card key={umkm.id} className="overflow-hidden card-hover">
                  <div className="h-48 bg-gray-200 relative">
                    <iframe src={getDirectGoogleDriveUrl(umkm.image_url)} className="w-full h-full object-cover rounded-lg" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(umkm.category)}`}>{umkm.category}</span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-green-700">{umkm.name}</CardTitle>
                    <p className="text-lg font-semibold text-gray-600">{umkm.category}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{umkm.description}</p>
                    <p className="text-gray-600">{umkm.location}</p>
                    <div className="text-lg font-bold text-green-600">{umkm.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <ShoppingBag className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Tidak ada UMKM ditemukan</h3>
              <p className="text-gray-500">Coba ubah filter atau kata kunci pencarian Anda</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

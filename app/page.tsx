import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import VideoSection from "@/components/video-section";
import ActivitySection from "@/components/activity-section";
import CultureSection from "@/components/culture-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      {/* <CultureSection /> */}
      <VideoSection />
      <ActivitySection />
    </div>
  );
}

import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const recentActivities = [
  {
    id: "1",
    title: "Workshop Batik Tradisional",
    description: "Pelatihan membuat batik dengan teknik canting tradisional untuk pemula dan lanjutan.",
    image: "/api/placeholder/400/300",
    date: "15 September 2024",
    time: "09:00 - 12:00 WIB",
    location: "Balai Dusun Semaki Gede",
    level: "Tingkat RW",
    status: "Berlangsung",
    category: "Budaya",
  },
  {
    id: "2",
    title: "Gotong Royong Bersih Desa",
    description: "Kegiatan gotong royong membersihkan lingkungan desa dan saluran air.",
    image: "/api/placeholder/400/300",
    date: "10 September 2024",
    time: "07:00 - 10:00 WIB",
    location: "Seluruh RT Semaki Gede",
    level: "Tingkat Dusun",
    status: "Selesai",
    category: "Lingkungan",
  },
  {
    id: "3",
    title: "Pelatihan UMKM Digital",
    description: "Workshop penggunaan media sosial dan marketplace untuk pengembangan UMKM.",
    image: "/api/placeholder/400/300",
    date: "8 September 2024",
    time: "14:00 - 17:00 WIB",
    location: "Aula Balai Dusun",
    level: "Tingkat Dusun",
    status: "Selesai",
    category: "Ekonomi",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Berlangsung":
      return "bg-green-100 text-green-800";
    case "Selesai":
      return "bg-gray-100 text-gray-800";
    case "Akan Datang":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getLevelColor = (level: string) => {
  switch (level) {
    case "Tingkat RT":
      return "bg-blue-100 text-blue-800";
    case "Tingkat RW":
      return "bg-yellow-100 text-yellow-800";
    case "Tingkat Dusun":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function ActivitySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Kegiatan Terbaru</h2>
          <hr className="w-24 h-1 bg-green-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Mengikuti dan mendokumentasikan berbagai kegiatan yang berlangsung di Kampung Semaki Gede, dari pengembangan budaya hingga kegiatan sosial kemasyarakatan.</p>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/kegiatan">
            <button className="bg-white border-2 border-green-600 text-green-600 py-3 px-8 rounded-lg hover:bg-green-50 transition-colors font-semibold">Lihat Semua Kegiatan</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

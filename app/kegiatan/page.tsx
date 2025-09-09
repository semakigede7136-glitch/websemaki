"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { fetchActivityData, ActivityData, getDirectGoogleDriveUrl } from "@/lib/google-sheets/google-sheets-multi";

const categories = ["Semua", "Budaya", "Lingkungan", "Ekonomi", "Kesehatan", "Pendidikan"];
const levels = ["Semua", "Tingkat RT", "Tingkat RW", "Tingkat Dusun"];
const statuses = ["Semua", "Berlangsung", "Selesai", "Akan Datang"];

export default function KegiatanPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedLevel, setSelectedLevel] = useState("Semua");
  const [selectedStatus, setSelectedStatus] = useState("Semua");
  const [activities, setActivities] = useState<ActivityData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActivityData().then((data) => {
      setActivities(data);
      setLoading(false);
    });
  }, []);

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) || activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Semua" || activity.category === selectedCategory;
    const matchesLevel = selectedLevel === "Semua" || activity.level === selectedLevel;
    const matchesStatus = selectedStatus === "Semua" || activity.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesLevel && matchesStatus;
  });

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

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading data kegiatan...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Kegiatan & Informasi Desa</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Informasi lengkap tentang berbagai kegiatan yang berlangsung di Dusun Semaki Gede</p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari kegiatan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                  {categories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tingkatan</label>
                <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                  {levels.map((level) => (
                    <option key={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                  {statuses.map((status) => (
                    <option key={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Ditemukan <span className="font-semibold text-green-600">{filteredActivities.length}</span> kegiatan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredActivities.map((activity) => (
                <Card key={activity.id} className="overflow-hidden card-hover">
                  <div className="h-48 bg-gray-200 relative">
                    <iframe src={getDirectGoogleDriveUrl(activity.image_url)} className="w-full h-full object-cover rounded-lg" />
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(activity.level)}`}>{activity.level}</span>
                      {/* <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>{activity.status}</span> */}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-green-700 line-clamp-2">{activity.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 line-clamp-3">{activity.description}</p>

                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" /> <span>{activity.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" /> <span>{activity.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" /> <span>{activity.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" /> <span>{activity.participants}</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link href={`/kegiatan/${activity.id}`}>
                        <Button className="w-full bg-green-600 hover:bg-green-700">Lihat Detail</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Tidak ada kegiatan ditemukan</h3>
              <p className="text-gray-500">Coba ubah filter atau kata kunci pencarian Anda</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

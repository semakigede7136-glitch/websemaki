"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, Building, GraduationCap, Heart, MapPin, Users, Clock, Phone, Mail, Globe } from "lucide-react";

const facilitiesData = [
  {
    id: "1",
    name: "Balai Desa",
    category: "Pemerintahan",
    description: "Pusat pemerintahan dan pelayanan administrasi warga. Dilengkapi dengan aula serbaguna untuk berbagai kegiatan masyarakat.",
    location: "Jl. Raya Desa No. 1",
    contact: "(0274) 123-4567",
    email: "balai@semakigede.id",
    website: "https://semakigede.id",
    operating_hours: "Senin-Jumat: 08:00-16:00, Sabtu: 08:00-12:00",
    image: "/api/placeholder/400/300",
    services: ["Pelayanan Administrasi", "Aula Serbaguna", "Ruang Rapat", "Perpustakaan Desa"],
    coordinates: "-7.797538418890179, 110.37912258733776",
  },
  {
    id: "2",
    name: "Sekolah Dasar Negeri",
    category: "Pendidikan",
    description: "Menyediakan pendidikan dasar berkualitas bagi anak-anak dusun. Memiliki 6 ruang kelas, perpustakaan, dan lapangan olahraga.",
    location: "Jl. Pendidikan No. 10",
    contact: "(0274) 123-4568",
    email: "sdn@semakigede.id",
    website: "",
    operating_hours: "Senin-Jumat: 07:00-13:00",
    image: "/api/placeholder/400/300",
    services: ["Pendidikan SD", "Perpustakaan", "Lapangan Olahraga", "Kantin Sehat"],
    coordinates: "-7.797538418890179, 110.37912258733776",
  },
  {
    id: "3",
    name: "Puskesmas Pembantu",
    category: "Kesehatan",
    description: "Memberikan layanan kesehatan primer, termasuk pemeriksaan umum, KIA, dan apotek kecil untuk warga.",
    location: "Jl. Sehat No. 3",
    contact: "(0274) 123-4569",
    email: "puskesmas@semakigede.id",
    website: "",
    operating_hours: "Senin-Jumat: 08:00-16:00, Sabtu: 08:00-12:00",
    image: "/api/placeholder/400/300",
    services: ["Pemeriksaan Umum", "KIA", "Apotek", "Imunisasi", "Posyandu"],
    coordinates: "-7.797538418890179, 110.37912258733776",
  },
  {
    id: "4",
    name: "Masjid Jami'",
    category: "Keagamaan",
    description: "Tempat ibadah utama bagi warga muslim, sekaligus pusat kegiatan keagamaan dan sosial.",
    location: "Jl. Masjid No. 5",
    contact: "(0274) 123-4570",
    email: "",
    website: "",
    operating_hours: "24 Jam",
    image: "/api/placeholder/400/300",
    services: ["Tempat Ibadah", "Kajian Agama", "Kegiatan Sosial", "TPA"],
    coordinates: "-7.797538418890179, 110.37912258733776",
  },
  {
    id: "5",
    name: "Pasar Desa",
    category: "Ekonomi",
    description: "Pusat kegiatan ekonomi tempat warga menjual hasil bumi dan kebutuhan sehari-hari. Beroperasi setiap pagi.",
    location: "Jl. Pasar No. 7",
    contact: "(0274) 123-4571",
    email: "",
    website: "",
    operating_hours: "Setiap Pagi: 06:00-12:00",
    image: "/api/placeholder/400/300",
    services: ["Pasar Tradisional", "Warung Makan", "Tempat Parkir", "Toilet Umum"],
    coordinates: "-7.797538418890179, 110.37912258733776",
  },
  {
    id: "6",
    name: "Halte Transportasi Umum",
    category: "Transportasi",
    description: "Memudahkan akses warga menuju pusat kota dengan layanan angkutan desa yang terjadwal.",
    location: "Jl. Raya Utama",
    contact: "(0274) 123-4572",
    email: "",
    website: "",
    operating_hours: "24 Jam",
    image: "/api/placeholder/400/300",
    services: ["Halte Bus", "Informasi Rute", "Tempat Tunggu", "Papan Informasi"],
    coordinates: "-7.797538418890179, 110.37912258733776",
  },
];

const categories = ["Semua", "Pemerintahan", "Pendidikan", "Kesehatan", "Keagamaan", "Ekonomi", "Transportasi"];

export default function FasilitasPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedFacility, setSelectedFacility] = useState<any>(null);

  const filteredFacilities = facilitiesData.filter((facility) => {
    const matchesSearch = facility.name.toLowerCase().includes(searchTerm.toLowerCase()) || facility.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Semua" || facility.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Pemerintahan":
        return "bg-green-100 text-green-800";
      case "Pendidikan":
        return "bg-blue-100 text-blue-800";
      case "Kesehatan":
        return "bg-red-100 text-red-800";
      case "Keagamaan":
        return "bg-purple-100 text-purple-800";
      case "Ekonomi":
        return "bg-yellow-100 text-yellow-800";
      case "Transportasi":
        return "bg-indigo-100 text-indigo-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Pemerintahan":
        return Building;
      case "Pendidikan":
        return GraduationCap;
      case "Kesehatan":
        return Heart;
      case "Keagamaan":
        return Users;
      case "Ekonomi":
        return Building;
      case "Transportasi":
        return MapPin;
      default:
        return Building;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Fasilitas Desa</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Berbagai fasilitas yang tersedia di Dusun Semaki Gede untuk melayani kebutuhan masyarakat</p>
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
                  placeholder="Cari fasilitas..."
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
                Ditemukan <span className="font-semibold text-green-600">{filteredFacilities.length}</span> fasilitas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredFacilities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFacilities.map((facility) => {
                const IconComponent = getCategoryIcon(facility.category);
                return (
                  <Card key={facility.id} className="overflow-hidden card-hover">
                    <div className="h-48 bg-gray-200 relative">
                      <img src={facility.image} alt={facility.name} className="w-full h-full object-cover" />
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(facility.category)}`}>{facility.category}</span>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl text-green-700 flex items-center gap-2">
                        <IconComponent className="w-5 h-5" />
                        {facility.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-gray-600 line-clamp-3">{facility.description}</p>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" />
                          <span>{facility.location}</span>
                        </div>

                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{facility.operating_hours}</span>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => setSelectedFacility(facility)}>
                          Lihat Detail
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Building className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Tidak ada fasilitas ditemukan</h3>
              <p className="text-gray-500">Coba ubah filter atau kata kunci pencarian Anda</p>
            </div>
          )}
        </div>
      </section>

      {/* Facility Detail Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedFacility.name}</h2>
                <Button variant="ghost" onClick={() => setSelectedFacility(null)} className="text-gray-500 hover:text-gray-700">
                  ✕
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <img src={selectedFacility.image} alt={selectedFacility.name} className="w-full h-full object-cover" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Deskripsi</h3>
                    <p className="text-gray-600">{selectedFacility.description}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Layanan</h3>
                    <ul className="space-y-1">
                      {selectedFacility.services.map((service: string, index: number) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                          <span className="text-gray-600">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Informasi Kontak</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-green-600" />
                        <span className="text-gray-600">{selectedFacility.location}</span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-green-600" />
                        <span className="text-gray-600">{selectedFacility.contact}</span>
                      </div>

                      {selectedFacility.email && (
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-green-600" />
                          <span className="text-gray-600">{selectedFacility.email}</span>
                        </div>
                      )}

                      {selectedFacility.website && (
                        <div className="flex items-center space-x-3">
                          <Globe className="w-5 h-5 text-green-600" />
                          <a href={selectedFacility.website} className="text-blue-600 hover:underline">
                            {selectedFacility.website}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Jam Operasional</h3>
                    <p className="text-gray-600">{selectedFacility.operating_hours}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Kategori</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedFacility.category)}`}>{selectedFacility.category}</span>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <MapPin className="w-4 h-4 mr-2" />
                      Lihat di Peta
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

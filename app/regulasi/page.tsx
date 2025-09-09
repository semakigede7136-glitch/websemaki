"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, FileText, Calendar, Eye, Download } from "lucide-react";
import { fetchRegulationData, transformRegulationData, RegulationData } from "@/lib/google-sheets/google-sheets-multi";

const categories = ["Semua", "Lingkungan", "Keamanan", "Pembangunan", "Peternakan", "Kesehatan", "Pendidikan"];

export default function RegulasiPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedRegulation, setSelectedRegulation] = useState<RegulationData | null>(null);
  const [regulations, setRegulations] = useState<RegulationData[]>([]);

  useEffect(() => {
    async function loadData() {
      const raw = await fetchRegulationData();
      const mapped = transformRegulationData(raw);
      setRegulations(mapped);
    }
    loadData();
  }, []);

  const filteredRegulations = regulations.filter((regulation) => {
    const matchesSearch = regulation.title.toLowerCase().includes(searchTerm.toLowerCase()) || regulation.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Semua" || regulation.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Lingkungan":
        return "bg-green-100 text-green-800";
      case "Keamanan":
        return "bg-blue-100 text-blue-800";
      case "Pembangunan":
        return "bg-yellow-100 text-yellow-800";
      case "Peternakan":
        return "bg-orange-100 text-orange-800";
      case "Kesehatan":
        return "bg-red-100 text-red-800";
      case "Pendidikan":
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Peraturan Dusun</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Peraturan dan ketentuan yang mengatur tata tertib dan ketertiban masyarakat Dusun Semaki Gede</p>
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
                  placeholder="Cari peraturan..."
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
                Ditemukan <span className="font-semibold text-green-600">{filteredRegulations.length}</span> peraturan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredRegulations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRegulations.map((regulation) => (
                <Card key={regulation.id} className="overflow-hidden card-hover">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(regulation.category)}`}>{regulation.category}</span>
                    </div>
                    <CardTitle className="text-xl text-green-700 line-clamp-2">{regulation.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 line-clamp-3">{regulation.description}</p>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={() => setSelectedRegulation(regulation)}>
                        <FileText className="w-4 h-4 mr-2" />
                        Baca Detail
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <FileText className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Tidak ada peraturan ditemukan</h3>
              <p className="text-gray-500">Coba ubah filter atau kata kunci pencarian Anda</p>
            </div>
          )}
        </div>
      </section>

      {/* Regulation Detail Modal */}
      {selectedRegulation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedRegulation.title}</h2>
                <Button variant="ghost" onClick={() => setSelectedRegulation(null)} className="text-gray-500 hover:text-gray-700">
                  ✕
                </Button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedRegulation.category)}`}>{selectedRegulation.category}</span>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p>{selectedRegulation.description}</p>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button variant="outline" onClick={() => setSelectedRegulation(null)}>
                    Tutup
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

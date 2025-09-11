"use client";

import { useEffect, useState } from "react";
import {
  fetchOrganizationData,
  transformOrganizationData,
  OrganizationData,
  fetchFacilityData,
  transformFacilityData,
  FacilityData,
  fetchAchievementData,
  transformAchievementData,
  AchievementData,
} from "@/lib/google-sheets/google-sheets-multi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Home, TreePine, Award, Heart } from "lucide-react";

const categories = ["Semua", "Kantor", "Tempat Ibadah", "Sanggar Budaya", "Sekolah", "Balai", "Kesehatan", "Tempat Makan", "Akses Masuk"];

export default function ProfilPage() {
  const [organization, setOrganization] = useState<any[]>([]);
  const [facilities, setFacilities] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [achievements, setAchievements] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const [org, fac, ach] = await Promise.all([fetchOrganizationData(), fetchFacilityData(), fetchAchievementData()]);
        setOrganization(org);
        setFacilities(fac);
        setAchievements(ach);
      } catch (error) {
        console.error("Gagal memuat data profil:", error);
      }
    }
    loadData();
  }, []);

  // bikin variabel hasil filter
  const filteredFacilities = selectedCategory === "Semua" ? facilities : facilities.filter((f) => f.category.toLowerCase() === selectedCategory.toLowerCase());

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "kantor":
        return "bg-green-100 text-green-800";
      case "Tempat Ibadah":
        return "bg-blue-100 text-blue-800";
      case "Sanggar Budaya":
        return "bg-yellow-100 text-yellow-800";
      case "Balai":
        return "bg-orange-100 text-orange-800";
      case "Kesehatan":
        return "bg-red-100 text-red-800";
      case "Tempat Makan":
        return "bg-purple-100 text-purple-800";
      case "Akses Masuk":
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Profil Dusun Semaki Gede</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Melestarikan warisan budaya batik tradisional dan mengembangkan potensi masyarakat menuju dusun yang mandiri dan sejahtera</p>
        </div>
      </section>

      {/* Informasi Wilayah */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Informasi Wilayah</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Dusun Semaki Gede terletak di Kecamatan Umbulharjo, Kota Yogyakarta dengan karakteristik geografis dan demografis yang unik.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2,847</h3>
              <p className="text-gray-600">Jumlah Penduduk</p>
            </Card>

            <Card className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Home className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">712</h3>
              <p className="text-gray-600">Jumlah KK</p>
            </Card>

            <Card className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">4</h3>
              <p className="text-gray-600">Jumlah RW</p>
            </Card>

            <Card className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15</h3>
              <p className="text-gray-600">Jumlah RT</p>
            </Card>
          </div>

          {/* Peta Lokasi */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-700">Peta Lokasi Semaki Gede</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7905.854289131868!2d110.37912258733776!3d-7.797538418890179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a577e7ef8173d%3A0x39e3e080939322d7!2sSemaki%2C%20Umbulharjo%2C%20Yogyakarta%20City%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1756926280807!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Potensi Dusun */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Potensi Dusun</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Berbagai potensi yang dimiliki Dusun Semaki Gede dalam pengembangan masyarakat dan kesejahteraan warga.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* UMKM & Pelatihan */}
            <Card className="p-6 text-center card-hover">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">UMKM</h3>
              <p className="text-gray-600 mb-4">Pengembangan usaha mikro, kecil, dan menengah.</p>
            </Card>

            {/* Kebersihan Lingkungan */}
            <Card className="p-6 text-center card-hover">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <TreePine className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kebersihan Lingkungan</h3>
              <p className="text-gray-600 mb-4">Program pengelolaan sampah dan kebersihan lingkungan yang melibatkan seluruh warga dalam menjaga keindahan dusun.</p>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>• Program MasJos (Masyarakat Jogja Olah Sampah)</li>
                <li>• Bank Sampah Dusun</li>
                <li>• Gotong Royong Rutin</li>
                <li>• Penghijauan Lingkungan</li>
              </ul>
            </Card>

            {/* Kampung Tangguh Bencana */}
            <Card className="p-6 text-center card-hover">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kampung Tangguh Bencana</h3>
              <p className="text-gray-600 mb-4">Program penguatan ketahanan masyarakat dalam menghadapi berbagai bencana dan situasi darurat.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Masjos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Program MasJos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Masyarakat Jogja Olah Sampah - Program pengelolaan sampah.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Deskripsi Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Program Masjos adalah inisiatif pengelolaan sampah yang mengedukasi warga tentang pentingnya memilah dan mengelola sampah dengan benar. Program ini tidak hanya fokus pada kebersihan lingkungan, tetapi juga menciptakan
                  nilai ekonomi dari sampah yang dikelola.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Tujuan Program:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Mengurangi volume sampah di TPA</li>
                      <li>• Meningkatkan kesadaran warga</li>
                      <li>• Menciptakan nilai ekonomi</li>
                      <li>• Mewujudkan dusun bersih dan sehat</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Manfaat:</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Lingkungan lebih bersih</li>
                      <li>• Pendapatan tambahan warga</li>
                      <li>• Pengurangan biaya pengangkutan</li>
                      <li>• Peningkatan kualitas hidup</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Langkah-langkah Implementasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Pilah Sampah Sesuai Jenis</h4>
                      <p className="text-gray-600">Pilahlah sampah menjadi 4 jenis: organik, anorganik, B3 (Bahan Berbahaya dan Beracun), dan residu.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Sampah Anorganik Dibawa ke Bank Sampah</h4>
                      <p className="text-gray-600">Sampah anorganik yang masih memiliki nilai jual dibawa ke Bank Sampah, contoh: plastik, kertas, kaca, logam, dll.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Olah Sampah Organik</h4>
                      <p className="text-gray-600">Sampah organik kering dan basah dapat diolah dengan berbagai metode:</p>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Biopori </li>
                        <li>• Losida </li>
                        <li>• Ember Tumpuk </li>
                        <li>• Komposter </li>
                        <li>• Maggot</li>
                        <li>• Eco Enzyme </li>
                      </ul>
                      <p className="text-gray-600">atau dapat disalurkan ke pemanfaat lain seperti peternak ayam, kambing, bebek, babi, dll</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Habiskan Makanan</h4>
                      <p className="text-gray-600">Masak sesuai kebutuhan, ambil makanan secukupnya, dan jangan menysiakan makanan. jika ada makanan berlebih, salurkan kepada yang membutuhkan.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Gunakan Wadah Berulang</h4>
                      <p className="text-gray-600">Mengurangi penggunaan wadah sekali pakai, mengurangi konsumsi makanan dan minuman kemasan, serta menggunakan wadah yang bisa dipakai berulang kali</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Struktur Organisasi</h2>
          {organization.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {organization.map((member) => (
                <Card key={member.id} className="flex flex-col items-center text-center shadow-md rounded-lg overflow-hidden bg-white">
                  {/* Gambar */}
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    {member.image_url ? <iframe src={member.image_url.replace("/view?usp=sharing", "/preview")} className="w-full h-full" allow="autoplay" /> : <span className="text-gray-500">Tidak ada gambar</span>}
                  </div>

                  {/* Informasi */}
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-green-700 mt-4">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{member.position}</p>
                    <p className="text-gray-600">{member.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Struktur organisasi belum tersedia</p>
          )}
        </div>
      </section>

      {/* Prestasi (Ringkasan) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Prestasi Dusun</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Beberapa prestasi terakhir yang diraih.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((a, i) => (
              <Card key={i} className="overflow-hidden card-hover">
                <div className="h-48 bg-gray-200">
                  {a.image_url ? <iframe src={a.image_url.replace("/view?usp=sharing", "/preview")} className="w-full h-full" allow="autoplay" /> : <span className="text-gray-500">Tidak ada gambar</span>}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">{a.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Tahun: {a.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fasilitas (Ringkasan) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Fasilitas Umum</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ringkasan fasilitas yang tersedia.</p>
          </div>

          {/* Search and Filters */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
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
              </div>
            </div>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredFacilities.map((f, i) => (
              <Card key={i} className="overflow-hidden card-hover">
                <div className="h-48 bg-gray-200">
                  {f.image_url ? <iframe src={f.image_url.replace("/view?usp=sharing", "/preview")} className="w-full h-full" allow="autoplay" /> : <span className="text-gray-500">Tidak ada gambar</span>}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">{f.name}</CardTitle>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(f.category)}`}>{f.category}</span>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{f.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

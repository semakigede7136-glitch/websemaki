import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, MapPin, Users } from "lucide-react";

const achievementsData = [
  {
    id: "1",
    title: "Desa Sadar Wisata",
    year: "2023",
    category: "Pariwisata",
    description: "Penghargaan dari Dinas Pariwisata Provinsi atas keberhasilan mengembangkan potensi wisata lokal.",
    details: "Program pengembangan wisata berbasis masyarakat yang melibatkan seluruh warga dalam melestarikan budaya dan alam. Desa berhasil menciptakan paket wisata edukasi pertanian dan budaya tradisional.",
    image: "/api/placeholder/400/300",
    location: "Provinsi DIY",
    organizer: "Dinas Pariwisata Provinsi DIY",
  },
  {
    id: "2",
    title: "Juara 1 Lomba Kebersihan Tingkat Kabupaten",
    year: "2023",
    category: "Lingkungan",
    description: "Komitmen tinggi warga dalam menjaga kebersihan lingkungan membuahkan hasil terbaik.",
    details: "Implementasi program 3R (Reduce, Reuse, Recycle) dan bank sampah yang dikelola secara mandiri oleh warga. Tingkat kebersihan lingkungan mencapai 95% dengan partisipasi aktif seluruh RT/RW.",
    image: "/api/placeholder/400/300",
    location: "Kabupaten Sleman",
    organizer: "Dinas Lingkungan Hidup Kabupaten Sleman",
  },
  {
    id: "3",
    title: "Desa Digital Terbaik",
    year: "2023",
    category: "Teknologi",
    description: "Apresiasi atas pemanfaatan teknologi untuk pelayanan publik dan transparansi informasi desa.",
    details: "Peluncuran sistem informasi desa berbasis web, aplikasi mobile untuk layanan administrasi, dan digitalisasi data kependudukan. Tingkat literasi digital warga meningkat 80%.",
    image: "/api/placeholder/400/300",
    location: "Kota Yogyakarta",
    organizer: "Dinas Komunikasi dan Informatika Kota Yogyakarta",
  },
  {
    id: "4",
    title: "Desa Mandiri Energi",
    year: "2022",
    category: "Energi",
    description: "Implementasi energi terbarukan di tingkat desa dengan panel surya dan biogas.",
    details: "Instalasi panel surya di 50 rumah warga dan pembangunan 10 unit biogas dari limbah ternak. Penghematan biaya listrik mencapai 60% dan pengurangan emisi karbon sebesar 40%.",
    image: "/api/placeholder/400/300",
    location: "Provinsi DIY",
    organizer: "Dinas Energi dan Sumber Daya Mineral Provinsi DIY",
  },
  {
    id: "5",
    title: "Juara 2 Lomba Desa Inovatif",
    year: "2022",
    category: "Inovasi",
    description: "Pengakuan atas inovasi dalam pengembangan UMKM dan ekonomi kreatif desa.",
    details: "Pengembangan sentra kerajinan anyaman pandan dan batik tulis yang menjadi produk unggulan desa. Omzet UMKM meningkat 150% dengan jangkauan pasar hingga luar daerah.",
    image: "/api/placeholder/400/300",
    location: "Kabupaten Bantul",
    organizer: "Dinas Pemberdayaan Masyarakat dan Desa Kabupaten Bantul",
  },
  {
    id: "6",
    title: "Desa Sehat Nasional",
    year: "2021",
    category: "Kesehatan",
    description: "Penghargaan tingkat nasional untuk program kesehatan masyarakat yang komprehensif.",
    details: "Program Posyandu aktif di setiap RT, kampanye hidup sehat, dan cakupan imunisasi 100%. Angka stunting turun menjadi 0% dan tingkat kesehatan masyarakat meningkat signifikan.",
    image: "/api/placeholder/400/300",
    location: "Nasional",
    organizer: "Kementerian Kesehatan RI",
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Pariwisata":
      return "bg-blue-100 text-blue-800";
    case "Lingkungan":
      return "bg-green-100 text-green-800";
    case "Teknologi":
      return "bg-purple-100 text-purple-800";
    case "Energi":
      return "bg-yellow-100 text-yellow-800";
    case "Inovasi":
      return "bg-pink-100 text-pink-800";
    case "Kesehatan":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function PrestasiPage() {
  // Group achievements by year
  const achievementsByYear = achievementsData.reduce((acc, achievement) => {
    const year = achievement.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(achievement);
    return acc;
  }, {} as Record<string, typeof achievementsData>);

  // Sort years in descending order
  const sortedYears = Object.keys(achievementsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Prestasi Dusun</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Berbagai penghargaan dan prestasi yang telah diraih Dusun Semaki Gede dalam berbagai bidang pembangunan</p>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Timeline Prestasi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Perjalanan prestasi Dusun Semaki Gede dari tahun ke tahun yang menunjukkan komitmen dalam pembangunan berkelanjutan</p>
          </div>

          {/* Timeline */}
          <div className="max-w-6xl mx-auto">
            {sortedYears.map((year, yearIndex) => (
              <div key={year} className="relative">
                {/* Year Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-600 text-white text-3xl font-bold mb-4">{year}</div>
                  <div className="w-32 h-1 bg-green-600 mx-auto"></div>
                </div>

                {/* Achievements for this year */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {achievementsByYear[year].map((achievement, achievementIndex) => (
                    <Card key={achievement.id} className="overflow-hidden card-hover">
                      <div className="h-48 bg-gray-200 relative">
                        <img src={achievement.image} alt={achievement.title} className="w-full h-full object-cover" />
                        <div className="absolute top-3 left-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(achievement.category)}`}>{achievement.category}</span>
                        </div>
                      </div>

                      <CardHeader>
                        <CardTitle className="text-xl text-green-700 line-clamp-2">{achievement.title}</CardTitle>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <p className="text-gray-600 line-clamp-3">{achievement.description}</p>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <MapPin className="w-4 h-4" />
                            <span>{achievement.location}</span>
                          </div>

                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Award className="w-4 h-4" />
                            <span>{achievement.organizer}</span>
                          </div>
                        </div>

                        <div className="pt-4">
                          <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">Lihat Detail</button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Connector Line */}
                {yearIndex < sortedYears.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8">
                    <div className="w-1 h-16 bg-green-600"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700 text-center">Statistik Prestasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">{achievementsData.length}</div>
                    <p className="text-gray-600">Total Prestasi</p>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{new Set(achievementsData.map((a) => a.category)).size}</div>
                    <p className="text-gray-600">Kategori</p>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">{new Set(achievementsData.map((a) => a.year)).size}</div>
                    <p className="text-gray-600">Tahun Aktif</p>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-yellow-600 mb-2">{achievementsData.filter((a) => a.year === "2023").length}</div>
                    <p className="text-gray-600">Prestasi 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}


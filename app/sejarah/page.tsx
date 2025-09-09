import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, BookOpen } from "lucide-react";

const historyData = [
  {
    id: "1",
    year: "1850",
    title: "Pendirian Dusun",
    description: "Dusun Semaki Gede didirikan oleh sekelompok perantau dari Jawa Tengah, mencari lahan subur untuk pertanian. Nama 'Semaki' dipilih dengan harapan menjadi tempat yang makmur dan sejahtera.",
    details:
      "Para pendiri dusun ini adalah keluarga besar yang berasal dari daerah Semarang dan sekitarnya. Mereka mencari lahan yang subur untuk bercocok tanam dan membangun kehidupan baru. Nama 'Semaki' konon berasal dari kata 'Sema' yang berarti benih dan 'Ki' yang berarti pohon besar, melambangkan harapan akan tumbuhnya kehidupan yang subur dan berkembang.",
    image: "/api/placeholder/800/400",
    location: "Semaki Gede, Umbulharjo",
    significance: "Awal mula berdirinya komunitas dan budaya Dusun Semaki Gede",
  },
  {
    id: "2",
    year: "1900-1940",
    title: "Era Kolonial",
    description: "Di bawah pemerintahan Belanda, desa menjadi pusat perkebunan tebu dan kopi. Infrastruktur dasar seperti jalan setapak dan irigasi mulai dibangun oleh warga secara gotong royong.",
    details:
      "Pada masa kolonial Belanda, Dusun Semaki Gede menjadi salah satu pusat perkebunan yang penting. Warga desa bekerja sebagai buruh tani di perkebunan tebu dan kopi milik pemerintah kolonial. Meskipun dalam kondisi yang sulit, warga tetap mempertahankan tradisi dan budaya mereka. Gotong royong menjadi nilai utama dalam membangun infrastruktur desa.",
    image: "/api/placeholder/800/400",
    location: "Semaki Gede, Umbulharjo",
    significance: "Pembentukan karakter gotong royong dan ketahanan masyarakat",
  },
  {
    id: "3",
    year: "1945-1965",
    title: "Masa Kemerdekaan",
    description: "Warga desa turut serta dalam perjuangan kemerdekaan. Setelah merdeka, balai desa pertama dibangun sebagai simbol pemerintahan mandiri.",
    details:
      "Warga Dusun Semaki Gede turut aktif dalam perjuangan kemerdekaan Indonesia. Banyak pemuda desa yang bergabung dengan laskar rakyat untuk melawan penjajah. Setelah kemerdekaan, desa mulai membangun infrastruktur pemerintahan. Balai desa pertama dibangun pada tahun 1950 sebagai simbol kemandirian dan pemerintahan desa yang baru.",
    image: "/api/placeholder/800/400",
    location: "Semaki Gede, Umbulharjo",
    significance: "Kontribusi dalam perjuangan kemerdekaan dan pembentukan pemerintahan desa",
  },
  {
    id: "4",
    year: "1980-2000",
    title: "Era Pembangunan",
    description: "Pemerintah mulai menggalakkan program pembangunan desa. Listrik masuk desa, sekolah dasar negeri dibangun, dan akses jalan diperlebar.",
    details:
      "Era pembangunan nasional membawa perubahan signifikan bagi Dusun Semaki Gede. Listrik mulai masuk desa pada tahun 1985, membuka akses warga terhadap teknologi modern. Sekolah Dasar Negeri dibangun pada tahun 1988, memberikan akses pendidikan yang lebih baik bagi anak-anak desa. Jalan desa diperlebar dan diaspal, memudahkan akses transportasi dan ekonomi.",
    image: "/api/placeholder/800/400",
    location: "Semaki Gede, Umbulharjo",
    significance: "Modernisasi infrastruktur dan peningkatan kualitas hidup warga",
  },
  {
    id: "5",
    year: "2001-Sekarang",
    title: "Transformasi Digital",
    description: "Memasuki milenium baru, desa beradaptasi dengan teknologi. UMKM mulai bermunculan, dan website desa ini diluncurkan untuk menyebarkan informasi ke seluruh dunia.",
    details:
      "Dusun Semaki Gede memasuki era digital dengan berbagai inovasi dan adaptasi teknologi. UMKM berbasis batik tradisional mulai berkembang pesat, membuka lapangan kerja baru bagi warga. Program pengelolaan sampah 'Masjos' diluncurkan pada tahun 2020, menjadikan desa sebagai contoh pengelolaan lingkungan yang baik. Website desa diluncurkan untuk meningkatkan transparansi informasi dan promosi potensi desa.",
    image: "/api/placeholder/800/400",
    location: "Semaki Gede, Umbulharjo",
    significance: "Adaptasi teknologi dan pengembangan ekonomi kreatif berbasis budaya",
  },
];

export default function SejarahPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sejarah Dusun</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Perjalanan panjang Dusun Semaki Gede dari masa pendirian hingga transformasi digital yang membentuk identitas dan karakter masyarakat</p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Timeline Sejarah</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Perjalanan sejarah yang membentuk Dusun Semaki Gede menjadi desa yang maju dan berbudaya</p>
          </div>

          {/* Timeline */}
          <div className="max-w-6xl mx-auto">
            {historyData.map((period, index) => (
              <div key={period.id} className="relative">
                {/* Period Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-green-600 text-white text-2xl font-bold mb-4">{period.year}</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{period.title}</h3>
                  <div className="w-40 h-1 bg-green-600 mx-auto"></div>
                </div>

                {/* Period Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
                  {/* Image */}
                  <div className="order-2 lg:order-1">
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <img src={period.image} alt={period.title} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="order-1 lg:order-2">
                    <Card className="border-0 shadow-none">
                      <CardHeader>
                        <CardTitle className="text-2xl text-green-700 mb-4">{period.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-gray-600 text-lg leading-relaxed">{period.description}</p>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-green-600" />
                            <span className="text-gray-700">{period.location}</span>
                          </div>

                          <div className="flex items-center space-x-3">
                            <BookOpen className="w-5 h-5 text-green-600" />
                            <span className="text-gray-700">{period.significance}</span>
                          </div>
                        </div>

                        <div className="pt-4">
                          <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold">Baca Selengkapnya</button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Connector Line */}
                {index < historyData.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8">
                    <div className="w-1 h-16 bg-green-600"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Significance */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700 text-center">Makna Sejarah</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-green-600" />
                      Karakter Masyarakat
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Sejarah panjang telah membentuk karakter masyarakat Semaki Gede yang gigih, gotong royong, dan berpegang teguh pada nilai-nilai budaya tradisional sambil beradaptasi dengan perubahan zaman.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-green-600" />
                      Warisan Budaya
                    </h4>
                    <p className="text-gray-600 text-sm">Setiap periode sejarah meninggalkan warisan berharga yang terus dilestarikan dan dikembangkan, terutama dalam seni batik tradisional dan nilai-nilai kearifan lokal.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pelajari Lebih Lanjut</h2>
            <p className="text-xl text-gray-600 mb-8">Temukan cerita lengkap dan detail menarik tentang setiap periode sejarah Dusun Semaki Gede</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors font-semibold">Lihat Galeri Foto</button>
              <button className="border border-green-600 text-green-600 py-3 px-8 rounded-lg hover:bg-green-50 transition-colors font-semibold">Dokumentasi Video</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Crown, Shield, Building, UserCheck } from "lucide-react";

const organizationData = [
  {
    level: "Kepala Dukuh",
    members: [
      {
        name: "Bapak Suharto",
        position: "Kepala Dukuh",
        period: "2019-2025",
        image: "/api/placeholder/150/150",
        description: "Memimpin dan mengkoordinasikan seluruh kegiatan pembangunan dan kemasyarakatan di Dusun Semaki Gede.",
      },
    ],
    icon: Crown,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    level: "Lembaga Masyarakat",
    members: [
      {
        name: "Ibu Siti Aminah",
        position: "Sekretaris Desa",
        period: "2020-2026",
        image: "/api/placeholder/150/150",
        description: "Membantu Kepala Dukuh dalam administrasi dan dokumentasi kegiatan dusun.",
      },
      {
        name: "Bapak Ahmad Wijaya",
        position: "Kepala Urusan Pemerintahan",
        period: "2020-2026",
        image: "/api/placeholder/150/150",
        description: "Mengelola urusan pemerintahan dan pelayanan administrasi warga.",
      },
      {
        name: "Bapak Bambang Sutrisno",
        position: "Kepala Urusan Pembangunan",
        period: "2020-2026",
        image: "/api/placeholder/150/150",
        description: "Merencanakan dan mengkoordinasikan program pembangunan infrastruktur dusun.",
      },
      {
        name: "Ibu Dewi Sartika",
        position: "Kepala Urusan Kesejahteraan",
        period: "2020-2026",
        image: "/api/placeholder/150/150",
        description: "Mengembangkan program kesejahteraan sosial dan pemberdayaan masyarakat.",
      },
      {
        name: "Bapak Eko Prasetyo",
        position: "Kepala Urusan Keuangan",
        period: "2020-2026",
        image: "/api/placeholder/150/150",
        description: "Mengelola keuangan dusun dan pertanggungjawaban anggaran.",
      },
    ],
    icon: Building,
    color: "bg-blue-100 text-blue-800",
  },
  {
    level: "Ketua RT/RW",
    members: [
      {
        name: "Bapak Subagyo",
        position: "Ketua RW 01",
        period: "2021-2026",
        image: "/api/placeholder/150/150",
        description: "Mengkoordinasikan kegiatan di RW 01 dan menjadi penghubung dengan pemerintah dusun.",
      },
      {
        name: "Bapak Hermawan",
        position: "Ketua RW 02",
        period: "2021-2026",
        image: "/api/placeholder/150/150",
        description: "Mengkoordinasikan kegiatan di RW 02 dan menjadi penghubung dengan pemerintah dusun.",
      },
      {
        name: "Bapak Sujono",
        position: "Ketua RW 03",
        period: "2021-2026",
        image: "/api/placeholder/150/150",
        description: "Mengkoordinasikan kegiatan di RW 03 dan menjadi penghubung dengan pemerintah dusun.",
      },
    ],
    icon: Users,
    color: "bg-green-100 text-green-800",
  },
];

export default function StrukturPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Struktur Organisasi</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Struktur organisasi pemerintahan Dusun Semaki Gede yang mengatur tata kelola dan pelayanan kepada masyarakat</p>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hirarki Organisasi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Struktur organisasi yang jelas dan terstruktur untuk memastikan pelayanan yang optimal kepada seluruh warga Dusun Semaki Gede.</p>
          </div>

          {/* Organization Levels */}
          <div className="space-y-16">
            {organizationData.map((level, levelIndex) => (
              <div key={levelIndex} className="relative">
                {/* Level Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
                    <level.icon className="w-10 h-10 text-gray-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{level.level}</h3>
                  <div className="w-24 h-1 bg-green-600 mx-auto"></div>
                </div>

                {/* Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {level.members.map((member, memberIndex) => (
                    <Card key={memberIndex} className="text-center overflow-hidden card-hover">
                      <div className="h-48 bg-gray-200 relative">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl text-green-700">{member.name}</CardTitle>
                        <p className="text-lg font-semibold text-gray-600">{member.position}</p>
                        <p className="text-sm text-gray-500">Periode: {member.period}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm">{member.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Connector Line */}
                {levelIndex < organizationData.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8">
                    <div className="w-1 h-8 bg-green-600"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700 text-center">Informasi Tambahan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <UserCheck className="w-5 h-5 mr-2 text-green-600" />
                      Mekanisme Pengangkatan
                    </h4>
                    <p className="text-gray-600 text-sm">Kepala Dukuh dan perangkat desa diangkat melalui proses seleksi yang transparan dengan mempertimbangkan kompetensi, integritas, dan dedikasi untuk melayani masyarakat.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-green-600" />
                      Akuntabilitas
                    </h4>
                    <p className="text-gray-600 text-sm">Setiap perangkat desa bertanggung jawab atas kinerja dan pelayanan yang diberikan, dengan mekanisme evaluasi berkala dan pelaporan yang transparan.</p>
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


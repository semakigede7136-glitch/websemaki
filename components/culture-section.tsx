import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const culturalActivities = [
  {
    title: "Pelatihan Batik Tradisional",
    description: "Pelatihan membuat batik dengan teknik canting tradisional untuk pemula dan lanjutan.",
    location: "Balai Dusun Semaki Gede",
    schedule: "Setiap Sabtu, 09:00 - 12:00 WIB",
    participants: "15-20 orang per sesi",
    image: "/api/placeholder/400/300",
  },
  {
    title: "Workshop Motif Batik Khas",
    description: "Belajar membuat motif batik khas Semaki Gede dengan filosofi dan makna mendalam.",
    location: "Sanggar Budaya Semaki",
    schedule: "Setiap Minggu, 14:00 - 17:00 WIB",
    participants: "10-15 orang per sesi",
    image: "/api/placeholder/400/300",
  },
  {
    title: "Pembuatan Canting Tradisional",
    description: "Pelatihan membuat alat canting tradisional dari tembaga dan kayu.",
    location: "Rumah Pengrajin Canting",
    schedule: "Setiap Rabu, 19:00 - 21:00 WIB",
    participants: "8-12 orang per sesi",
    image: "/api/placeholder/400/300",
  },
  {
    title: "Pelatihan Pewarnaan Alami",
    description: "Belajar menggunakan pewarna alami dari tumbuhan untuk batik tradisional.",
    location: "Kebun Tumbuhan Pewarna",
    schedule: "Setiap Jumat, 08:00 - 11:00 WIB",
    participants: "12-18 orang per sesi",
    image: "/api/placeholder/400/300",
  },
];

export default function CultureSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Budaya & Pelatihan Tradisional</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Melestarikan dan mengembangkan warisan budaya batik tradisional melalui berbagai program pelatihan yang terjadwal secara rutin.</p>
        </div>

        {/* Cultural Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {culturalActivities.map((activity, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <div className="h-48 bg-gray-200 relative">
                <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-green-700">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{activity.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{activity.location}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{activity.schedule}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{activity.participants}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

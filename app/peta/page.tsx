import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation, Phone, Mail, Globe, Clock, Users } from "lucide-react";

const locationData = {
  name: "Dusun Semaki Gede",
  address: "Semaki, Umbulharjo, Yogyakarta City, Special Region of Yogyakarta",
  coordinates: {
    lat: -7.797538418890179,
    lng: 110.37912258733776,
  },
  description: "Dusun Semaki Gede terletak di Kecamatan Umbulharjo, Kota Yogyakarta. Dusun ini dikenal dengan warisan budaya batik tradisional dan masyarakat yang ramah serta gotong royong.",
  boundaries: {
    north: "Dusun Semaki Lor",
    east: "Dusun Semaki Kidul",
    south: "Dusun Semaki Tengah",
    west: "Dusun Semaki Kulon",
  },
  landmarks: [
    {
      name: "Balai Dusun Semaki Gede",
      type: "Pemerintahan",
      coordinates: "-7.797538418890179, 110.37912258733776",
      description: "Pusat pemerintahan dan pelayanan administrasi warga",
    },
    {
      name: "Masjid Jami' Semaki Gede",
      type: "Keagamaan",
      coordinates: "-7.797538418890179, 110.37912258733776",
      description: "Tempat ibadah utama dan pusat kegiatan keagamaan",
    },
    {
      name: "Sekolah Dasar Negeri",
      type: "Pendidikan",
      coordinates: "-7.797538418890179, 110.37912258733776",
      description: "Sekolah dasar untuk anak-anak dusun",
    },
    {
      name: "Puskesmas Pembantu",
      type: "Kesehatan",
      coordinates: "-7.797538418890179, 110.37912258733776",
      description: "Layanan kesehatan primer untuk warga",
    },
  ],
  contact: {
    phone: "(0274) 123-4567",
    email: "info@semakigede.id",
    website: "https://semakigede.id",
  },
  access: {
    public_transport: "Angkutan desa dan bus kota",
    parking: "Tersedia di area balai dusun dan masjid",
    accessibility: "Jalan utama sudah diaspal dan mudah diakses",
  },
};

export default function PetaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Peta & Lokasi</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Temukan lokasi Dusun Semaki Gede dan berbagai fasilitas penting di dalamnya</p>
        </div>
      </section>

      {/* Main Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Peta Lokasi Semaki Gede</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Koordinat: {locationData.coordinates.lat}, {locationData.coordinates.lng}
              </p>
            </div>

            {/* Interactive Map */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Peta Interaktif</CardTitle>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>

            {/* Location Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Basic Info */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700 flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Informasi Lokasi
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Alamat Lengkap</h4>
                      <p className="text-gray-600">{locationData.address}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Deskripsi</h4>
                      <p className="text-gray-600">{locationData.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Koordinat GPS</h4>
                      <p className="text-gray-600 font-mono">
                        Latitude: {locationData.coordinates.lat}
                        <br />
                        Longitude: {locationData.coordinates.lng}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700 flex items-center gap-2">
                      <Navigation className="w-5 h-5" />
                      Batas Wilayah
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-red-50 rounded-lg">
                        <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-2"></div>
                        <p className="text-sm font-medium text-gray-900">Utara</p>
                        <p className="text-xs text-gray-600">{locationData.boundaries.north}</p>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-2"></div>
                        <p className="text-sm font-medium text-gray-900">Timur</p>
                        <p className="text-xs text-gray-600">{locationData.boundaries.east}</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
                        <p className="text-sm font-medium text-gray-900">Selatan</p>
                        <p className="text-xs text-gray-600">{locationData.boundaries.south}</p>
                      </div>
                      <div className="text-center p-3 bg-yellow-50 rounded-lg">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                        <p className="text-sm font-medium text-gray-900">Barat</p>
                        <p className="text-xs text-gray-600">{locationData.boundaries.west}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Contact & Access */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700 flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Informasi Kontak
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{locationData.contact.phone}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{locationData.contact.email}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-green-600" />
                      <a href={locationData.contact.website} className="text-blue-600 hover:underline">
                        {locationData.contact.website}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Akses & Transportasi
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Transportasi Umum</h4>
                      <p className="text-gray-600">{locationData.access.public_transport}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Tempat Parkir</h4>
                      <p className="text-gray-600">{locationData.access.parking}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Aksesibilitas</h4>
                      <p className="text-gray-600">{locationData.access.accessibility}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landmarks Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tempat Penting</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Berbagai landmark dan fasilitas penting yang dapat ditemukan di Dusun Semaki Gede</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {locationData.landmarks.map((landmark, index) => (
                <Card key={index} className="text-center card-hover">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                      <MapPin className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle className="text-lg text-green-700">{landmark.name}</CardTitle>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">{landmark.type}</span>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{landmark.description}</p>

                    <div className="text-xs text-gray-500 font-mono">{landmark.coordinates}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kunjungi Dusun Semaki Gede</h2>
            <p className="text-xl text-gray-600 mb-8">Nikmati keindahan alam, budaya tradisional, dan keramahan masyarakat Dusun Semaki Gede</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                <Navigation className="w-5 h-5 inline mr-2" />
                Petunjuk Arah
              </button>
              <button className="border border-green-600 text-green-600 py-3 px-8 rounded-lg hover:bg-green-50 transition-colors font-semibold">
                <Phone className="w-5 h-5 inline mr-2" />
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


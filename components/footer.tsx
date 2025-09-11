import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, UserCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Dusun Semaki Gede</h3>
              <p className="text-gray-300 mb-4">Melestarikan warisan budaya dan mendokumentasikan kehidupan masyarakat dalam harmoni budaya yang telah turun temurun.</p>
              <div className="flex space-x-4">
                <a href="https://www.youtube.com/@semakigede-w2b" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Menu Utama</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/profil" className="text-gray-300 hover:text-green-400 transition-colors">
                    Profil Dusun
                  </Link>
                </li>
                <li>
                  <Link href="/kegiatan" className="text-gray-300 hover:text-green-400 transition-colors">
                    Kegiatan
                  </Link>
                </li>
                <li>
                  <Link href="/regulasi" className="text-gray-300 hover:text-green-400 transition-colors">
                    Regulasi
                  </Link>
                </li>
                <li>
                  <Link href="/umkm" className="text-gray-300 hover:text-green-400 transition-colors">
                    UMKM
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Semaki Gede, Semaki, Umbulharjo, Yogyakarta</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">+62 812-1998-6750</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">semakigede7136@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Dusun Semaki Gede. Semua hak dilindungi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

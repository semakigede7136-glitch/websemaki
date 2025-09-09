# 🌟 Website Dusun Semaki Gede

Website resmi Dusun Semaki Gede yang dibangun menggunakan Next.js dengan fitur modern dan responsif. Website ini berisi informasi lengkap tentang profil dusun, kegiatan, struktur organisasi, dan berbagai informasi penting lainnya.

## 🚀 Fitur Utama

### 📱 **Landing Page**

- Hero slider dengan gambar dan teks yang menarik
- Kata sambutan Kepala Dukuh
- Informasi budaya dalam bentuk card
- Video dokumenter desa
- Preview kegiatan terbaru

### 🏘️ **Halaman Profil Dusun**

- Informasi wilayah lengkap (penduduk, KK, luas, batas-batas)
- Peta lokasi interaktif Google Maps
- Potensi dusun (UMKM, kebersihan lingkungan, kampung tangguh bencana)
- Program unggulan "Masjos" (Mari Sampah Jangan Sembarangan)

### 🏛️ **Struktur Organisasi**

- Hirarki organisasi yang jelas
- Informasi lengkap setiap perangkat desa
- Periode jabatan dan deskripsi tugas

### 📅 **Kegiatan & Informasi Desa**

- Daftar kegiatan dengan filter dan pencarian
- Detail kegiatan lengkap dengan galeri foto
- Kategori dan tingkatan kegiatan
- Status kegiatan (Berlangsung, Selesai, Akan Datang)

### 🏆 **Prestasi Dusun**

- Timeline prestasi berdasarkan tahun
- Kategori prestasi yang beragam
- Statistik prestasi

### 📚 **Sejarah Dusun**

- Timeline sejarah dari masa pendirian
- Foto ilustrasi setiap periode
- Makna sejarah dan warisan budaya

### 📋 **Peraturan Dusun**

- Daftar peraturan dengan kategori
- Detail lengkap setiap peraturan
- Fitur pencarian dan filter

### 🏥 **Fasilitas Desa**

- Informasi lengkap setiap fasilitas
- Kategori fasilitas (Pemerintahan, Pendidikan, Kesehatan, dll)
- Jam operasional dan kontak

### 🛍️ **UMKM**

- Daftar UMKM dengan rating dan ulasan
- Kategori produk yang beragam
- Informasi kontak penjual
- UMKM unggulan

### 🗺️ **Peta & Lokasi**

- Peta interaktif Google Maps
- Informasi lokasi lengkap
- Batas wilayah dan landmark penting
- Akses dan transportasi

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Data Source**: Google Sheets (dengan fallback data)

## 📁 Struktur Proyek

```
semaki-gede-website/
├── app/                          # Next.js App Router
│   ├── (landing)/               # Landing page components
│   ├── profil/                  # Halaman profil dusun
│   ├── struktur/                # Halaman struktur organisasi
│   ├── kegiatan/                # Halaman kegiatan
│   │   └── [id]/               # Detail kegiatan
│   ├── prestasi/                # Halaman prestasi
│   ├── sejarah/                 # Halaman sejarah
│   ├── regulasi/                # Halaman peraturan
│   ├── fasilitas/               # Halaman fasilitas
│   ├── umkm/                    # Halaman UMKM
│   ├── peta/                    # Halaman peta
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles
│   └── page.tsx                # Homepage
├── components/                   # Reusable components
│   ├── ui/                     # shadcn/ui components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── navbar.tsx              # Navigation component
│   ├── footer.tsx              # Footer component
│   ├── hero-section.tsx        # Hero section
│   ├── about-section.tsx       # About section
│   ├── culture-section.tsx     # Culture section
│   ├── video-section.tsx       # Video section
│   └── activity-section.tsx    # Activity section
├── lib/                         # Utility functions
│   └── utils.ts                # Helper functions
├── public/                      # Static assets
├── package.json                 # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## 🚀 Cara Menjalankan

### Prerequisites

- Node.js 18+
- npm atau yarn

### Installation

1. **Clone repository**

```bash
git clone <repository-url>
cd semaki-gede-website
```

2. **Install dependencies**

```bash
npm install
# atau
yarn install
```

3. **Run development server**

```bash
npm run dev
# atau
yarn dev
```

4. **Buka browser**

```
http://localhost:3000
```

### Build untuk Production

```bash
npm run build
npm start
```

## 🔧 Konfigurasi

### Environment Variables

Buat file `.env.local` di root proyek:

```env
# Google Sheets URL (opsional, untuk integrasi data)
GOOGLE_SHEETS_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID

# API Keys (jika diperlukan)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### Tailwind CSS

Konfigurasi Tailwind sudah disesuaikan dengan shadcn/ui dan custom styles untuk Semaki Gede.

### TypeScript

Konfigurasi TypeScript sudah dioptimalkan untuk Next.js 14 dengan strict mode.

## 📊 Integrasi Data

### Google Sheets

Website ini dirancang untuk mengambil data dari Google Sheets dengan struktur:

- **slider_data**: Data untuk hero slider
- **village_info**: Informasi desa
- **news**: Berita dan kegiatan
- **products**: Data UMKM
- **regulations**: Peraturan desa
- **facilities**: Fasilitas desa
- **achievements**: Prestasi desa
- **history**: Sejarah desa
- **organization**: Struktur organisasi
- **gallery**: Galeri foto

### Fallback Data

Jika Google Sheets tidak tersedia, website akan menggunakan data fallback yang sudah disediakan.

## 🎨 Customization

### Warna dan Tema

Warna utama website menggunakan skema hijau yang mencerminkan semangat Dusun Semaki Gede:

```css
/* Primary colors */
--primary: #16a34a (green-600)
--accent: #22c55e (green-500)
```

### Komponen

Semua komponen dapat dikustomisasi dengan mudah melalui:

- Tailwind CSS classes
- CSS custom properties
- Component props

## 📱 Responsivitas

Website sudah dioptimalkan untuk berbagai ukuran layar:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Vercel (Recommended)

1. Push code ke GitHub
2. Connect repository ke Vercel
3. Deploy otomatis

### Manual Deployment

```bash
npm run build
# Upload folder .next ke hosting provider
```

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 License

Proyek ini dibuat untuk Dusun Semaki Gede. Silakan gunakan sebagai referensi untuk pengembangan website desa lainnya.

## 📞 Kontak

- **Dusun Semaki Gede**: Semaki, Umbulharjo, Yogyakarta
- **Email**: semakigede7136@gmail.com
- **Phone**: 087838558463

## 🙏 Ucapan Terima Kasih

Terima kasih kepada:

- Masyarakat Dusun Semaki Gede
- Tim pengembang website
- Komunitas Next.js dan Tailwind CSS
- shadcn/ui untuk komponen yang luar biasa

---

**Dibuat dengan ❤️ untuk Dusun Semaki Gede**

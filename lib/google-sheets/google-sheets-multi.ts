// Utility functions for fetching data from multiple Google Sheets
// Setiap jenis data memiliki sheet terpisah untuk kemudahan pengelolaan

export interface SheetData {
  [key: string]: string;
}

export interface SliderData {
  id: string;
  image_url: string;
  title: string;
  subtitle: string;
  is_active: string;
  sort_order: string;
  created_at: string;
  updated_at: string;
}
export interface ActivityData {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  image_url: string;
  level: string;
  status: string;
  date: string;
  time: string;
  location: string;
  participants: string;
  contact_person: string;
  contact_phone: string;
  wa_link?: string;
  gallery: string[]; // 🔥 ubah dari string ke string[]
}



export interface VillageInfo {
  id: string;
  section: string;
  title: string;
  content: string;
  data_value: string;
  created_at: string;
  updated_at: string;
}

export interface NewsData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image_url: string;
  views: string;
  is_published: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}


export interface RegulationData {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface AchievementData {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  image_url: string;
}

export interface GalleryData {
  id: string;
  title: string;
  category: string;
  image_url: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface FacilityData {
  id: string;
  name: string;
  category: string;
  description: string;
  location: string;
  contact: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface OrganizationData {
  id: string;
  name: string;
  position: string;
  period: string;
  image_url: string;
  level: string;
  created_at: string;
  updated_at: string;
}


export type UMKMData = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  location: string;
  category: string;
  price: string;
};

export async function fetchGoogleSheetData(sheetUrl: string): Promise<SheetData[]> {
  try {
    const response = await fetch(sheetUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const csvText = await response.text();

    // Split baris dengan hati-hati (menghapus \r untuk konsistensi)
    const lines = csvText.replace(/\r/g, "").split("\n");
    if (lines.length < 2) {
      return [];
    }

    // Parse header
    const headers = parseCsvLine(lines[0]);

    const data: SheetData[] = [];

    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = parseCsvLine(lines[i]);
        const row: SheetData = {};

        headers.forEach((header, index) => {
          row[header] = values[index] || "";
        });

        data.push(row);
      }
    }

    return data;
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    return [];
  }
}


// Fungsi bantu: parsing 1 baris CSV dengan memperhatikan tanda kutip
function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"' && line[i + 1] === '"') {
      // Handle escaped quotes ("")
      current += '"';
      i++;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

const getBaseSheetUrl = () => {
  const url = process.env.GOOGLE_SHEETS_URL || "https://docs.google.com/spreadsheets/d/e/2PACX-1vRla3EqHojQonDKnkPyFDNzkP7p-FrJewAUby9SaV7eWO82Os0O8BAzoNQx5-UCdwCQVCoFdJX3qYYr";

  // Check if URL is still using placeholder
  if (url.includes("YOUR_SHEET_ID")) {
    console.warn("⚠️ Google Sheets URL masih menggunakan placeholder. Silakan setup environment variable.");
    return null;
  }

  return url;
};

// Helper functions untuk mengambil data dari sheet tertentu
export async function fetchSliderData(): Promise<SliderData[]> {
  const baseUrl = getBaseSheetUrl();
  if (!baseUrl) return [];

  // slider_data gid (sesuaikan jika berbeda)
  const sheetUrl = `${baseUrl}/pub?gid=1928961272&output=csv`;
  const data = await fetchGoogleSheetData(sheetUrl);
  return data as unknown as SliderData[];
}

export async function fetchVillageInfo(): Promise<VillageInfo[]> {
  const baseUrl = getBaseSheetUrl();
  if (!baseUrl) return [];

  const sheetUrl = `${baseUrl}/pub?gid=1870188097&output=csv`;
  const data = await fetchGoogleSheetData(sheetUrl);
  return data as unknown as VillageInfo[];
}

export async function fetchNewsData(): Promise<NewsData[]> {
  const baseUrl = getBaseSheetUrl();
  if (!baseUrl) return [];

  const sheetUrl = `${baseUrl}/pub?gid=342987483&output=csv`;
  const data = await fetchGoogleSheetData(sheetUrl);
  return data as unknown as NewsData[];
}


export async function fetchRegulationData(): Promise<RegulationData[]> {
  const baseUrl = getBaseSheetUrl();
  if (!baseUrl) return [];

  const sheetUrl = `${baseUrl}/pub?gid=971909275&output=csv`;
  const data = await fetchGoogleSheetData(sheetUrl);
  return data as unknown as RegulationData[];
}

export async function fetchAchievementData(): Promise<AchievementData[]> {
  const baseUrl = getBaseSheetUrl();
  if (!baseUrl) return [];

  const sheetUrl = `${baseUrl}/pub?gid=1357837604&output=csv`;
  const data = await fetchGoogleSheetData(sheetUrl);
  return data as unknown as AchievementData[];
}

// Bentuk data mentah dari Google Sheets (gallery masih string)
type RawActivityData = Omit<ActivityData, "gallery"> & { gallery: string };

// Fungsi fetch
export async function fetchActivityData(): Promise<ActivityData[]> {
  const baseUrl = getBaseSheetUrl();
  if (!baseUrl) return [];

  // Ganti gid sesuai dengan sheet "kegiatan" kamu
  const sheetUrl = `${baseUrl}/pub?gid=1971002699&output=csv`;
  const data = await fetchGoogleSheetData(sheetUrl);

  // Convert ke ActivityData (gallery jadi array string)
  return (data as RawActivityData[]).map((item) => ({
    ...item,
    gallery: item.gallery
      ? item.gallery.split(",").map((g) => g.trim())
      : [],
  }));
}





export async function fetchGalleryData(): Promise<GalleryData[]> {
  const baseUrl = getBaseSheetUrl();
  if (!baseUrl) return [];

  const sheetUrl = `${baseUrl}/pub?gid=2040637510&output=csv`;
  const data = await fetchGoogleSheetData(sheetUrl);
  return data as unknown as GalleryData[];
}

export async function fetchFacilityData(): Promise<FacilityData[]> {
  const baseUrl = getBaseSheetUrl();
  if (!baseUrl) return [];

  const sheetUrl = `${baseUrl}/pub?gid=1303300334&output=csv`;
  const data = await fetchGoogleSheetData(sheetUrl);
  return data as unknown as FacilityData[];
}

export async function fetchOrganizationData(): Promise<OrganizationData[]> {
  const baseUrl = getBaseSheetUrl();
  if (!baseUrl) return [];

  // ganti gid sesuai sheet "struktur organisasi"
  const sheetUrl = `${baseUrl}/pub?gid=484892931&output=csv`; 
  const data = await fetchGoogleSheetData(sheetUrl);
  return data as unknown as OrganizationData[];
}


export async function fetchUMKMData(): Promise<UMKMData[]> {
  const baseUrl = getBaseSheetUrl();
  if (!baseUrl) return [];

  const sheetUrl = `${baseUrl}/pub?gid=81319787&output=csv`;
  const data = await fetchGoogleSheetData(sheetUrl);
  return data as unknown as UMKMData[];
}

// Utility functions untuk transform data
export function transformSliderData(data: SliderData[]) {
  return data
    .filter((item) => item.is_active?.toLowerCase() === "true")
    .sort((a, b) => parseInt(a.sort_order) - parseInt(b.sort_order))
    .map((item) => ({
      id: item.id,
      imageUrl: item.image_url,
      title: item.title,
      subtitle: item.subtitle,
    }));
}

export function transformVillageInfo(data: VillageInfo[]) {
  const demographics = data.filter((item) => item.section === "demographics");
  const description = data.find((item) => item.section === "description");

  return {
    demographics: demographics.map((item) => ({
      title: item.title,
      content: item.content,
      value: item.data_value,
    })),
    description: description?.content || "",
  };
}

// PERUBAHAN DI SINI: Mengubah fungsi agar menghasilkan URL untuk iframe
export function getDirectGoogleDriveUrl(urlOrId: string) {
  if (!urlOrId) return urlOrId;
  const fileIdRegex = /[a-zA-Z0-9_-]{33}/; // Regex untuk ID Google Drive yang lebih akurat
  const match = urlOrId.match(fileIdRegex);
  if (match && match[0]) {
    return `https://drive.google.com/file/d/${match[0]}/preview`;
  }
  return urlOrId;
}

export function transformNewsData(data: NewsData[]) {
  return data
    .filter((item) => item.is_published?.toLowerCase() === "true")
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
    .map((item) => ({
      id: item.id,
      title: item.title,
      excerpt: item.excerpt,
      content: item.content,
      author: item.author,
      category: item.category,
      imageUrl: getDirectGoogleDriveUrl(item.image_url),
      views: parseInt(item.views) || 0,
      publishedAt: item.published_at,
    }));
}




export function transformRegulationData(data: RegulationData[]) {
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    category: item.category,
  }));
}

export function transformAchievementData(data: AchievementData[]) {
  return data
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
    .map((item) => ({
      id: item.id,
      title: item.title,
      year: item.year,
      category: item.category,
      image_url: getDirectGoogleDriveUrl(item.image_url),
      description: item.description,
    }));
}

export function transformGalleryData(data: GalleryData[]) {
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    image_url: getDirectGoogleDriveUrl(item.image_url),
    description: item.description,
  }));
}

export function transformFacilityData(data: FacilityData[]) {
  return data.map((item) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    description: item.description,
    location: item.location,
    contact: item.contact,
    imageUrl: getDirectGoogleDriveUrl(item.image_url),
  }));
}


export function transformOrganizationData(data: OrganizationData[]) {
  return data.map((item) => ({
    id: item.id,
    name: item.name,
    position: item.position,
    period: item.period,
    imageUrl: getDirectGoogleDriveUrl(item.image_url),
    level: item.level,
  }));
}

export function transformUMKMData(data: UMKMData[]) {
  return data.map((item) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    description: item.description,
    image_url: getDirectGoogleDriveUrl(item.image_url),
    location: item.location,
    price: item.price,
  }));
}

export function splitUrls(input: string): string[] {
  if (!input) return [];

  return input
    .split(";")
    .map((url) => url.trim())
    .filter((url) => url.length);
}

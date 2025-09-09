import { Users, Palette, Calendar, Heart } from "lucide-react";

const cultureCards = [
  {
    icon: Users,
    title: "Komunitas Solid",
    description: "Masyarakat yang gotong royong dan menjaga keharmonisan dalam kehidupan sehari-hari.",
    color: "text-orange-600",
  },
  {
    icon: Palette,
    title: "Keberagaman Budaya",
    description: "Keragaman budaya yang diwariskan dari generasi ke generasi mencerminkan identitas dan kekayaan tradisi masyarakat.",
    color: "text-orange-600",
  },
  {
    icon: Calendar,
    title: "Kegiatan",
    description: "Kegiatan beragam yang berjalan dengan meriah dan penuh semangat.",
    color: "text-orange-600",
  },
  {
    icon: Heart,
    title: "Nilai Luhur",
    description: "Menjaga dan melestarikan nilai-nilai budaya yang diwariskan oleh leluhur.",
    color: "text-orange-600",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Kampung Semaki Gede</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Semaki Gede adalah sebuah kampung dengan kekayaan budaya yang luar biasa, terutama dalam seni batik tradisional yang telah menjadi identitas dan kebanggaan masyarakat setempat.
          </p>
        </div>

        {/* Culture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cultureCards.map((card, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 card-hover">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
                <card.icon className={`w-8 h-8 ${card.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

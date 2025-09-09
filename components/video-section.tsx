export default function VideoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Video Dokumenter</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Kampung Semaki Gede telah berdiri selama puluhan tahun dengan tradisi batik yang kuat. Setiap motif batik yang dihasilkan memiliki makna filosofis yang mendalam, mencerminkan kehidupan dan nilai-nilai masyarakat setempat. Dengan
            dukungan seluruh warga, kampung ini terus berupaya melestarikan budaya sambil mengembangkan ekonomi kreatif.
          </p>

          {/* Video Container */}
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_IIUdzeIGf4?si=vO5K5Kt2ZHJ6QX39"
                title="Video Dokumenter Semaki Gede"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG */}
      <div className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 120">
          <path
            fill="#f8fafc"
            fillOpacity="1"
            d="M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,106.7C840,117,960,107,1080,90.7C1200,75,1320,53,1380,42.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}


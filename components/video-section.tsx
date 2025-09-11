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
    </section>
  );
}

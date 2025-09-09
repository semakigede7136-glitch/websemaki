"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import { fetchActivityData, ActivityData, getDirectGoogleDriveUrl } from "@/lib/google-sheets/google-sheets-multi";

export default function ActivityDetailPage() {
  const params = useParams();
  const activityId = params.id as string;

  const [activity, setActivity] = useState<ActivityData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetchActivityData().then((data) => {
      const found = data.find((a) => a.id === activityId);
      setActivity(found || null);
      setLoading(false);
    });
  }, [activityId]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Berlangsung":
        return "bg-green-100 text-green-800";
      case "Selesai":
        return "bg-gray-100 text-gray-800";
      case "Akan Datang":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Tingkat RT":
        return "bg-blue-100 text-blue-800";
      case "Tingkat RW":
        return "bg-yellow-100 text-yellow-800";
      case "Tingkat Dusun":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading detail kegiatan...</div>;
  }

  if (!activity) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Kegiatan Tidak Ditemukan</h1>
          <Link href="/kegiatan">
            <Button>Kembali ke Daftar Kegiatan</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link href="/kegiatan">
                <Button variant="outline" className="border-white text-black hover:bg-white hover:text-gray-900">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Daftar
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(activity.level)}`}>{activity.level}</span>
              {/* <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(activity.status)}`}>{activity.status}</span> */}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{activity.title}</h1>
            <p className="text-xl opacity-90 max-w-3xl">{activity.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <iframe src={getDirectGoogleDriveUrl(activity.image_url)} className="w-full h-96 object-cover rounded-lg" />
              </div>

              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: activity.content }} />
              </div>

              {/* Gallery */}
              {activity.gallery && activity.gallery.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Galeri Foto</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activity.gallery.map((link, idx) => {
                      const match = link.match(/[-\w]{25,}/);
                      const fileId = match ? match[0] : null;
                      const previewUrl = fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null;

                      return (
                        <div key={idx} className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
                          {previewUrl ? <iframe src={previewUrl} className="w-full h-full" allow="autoplay"></iframe> : <img src={getDirectGoogleDriveUrl(link)} alt={`Galeri ${idx + 1}`} className="w-full h-full object-cover" />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700">Informasi Kegiatan</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-500" />
                      <span>{activity.time}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-gray-500" />
                      <span>{activity.participants}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700">Kontak</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Narahubung</p>
                      <p className="font-semibold text-gray-900">{activity.contact_person}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Telepon</p>
                      <p className="font-semibold text-gray-900">{activity.contact_phone}</p>
                    </div>
                    {activity.wa_link && (
                      <a href={activity.wa_link} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-green-600 hover:bg-green-700">Hubungi via WhatsApp</Button>
                      </a>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

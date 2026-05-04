"use client"

import { useState } from "react"
import { FileText, ClipboardCheck, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const assessmentData = {
  lampiran7: {
    title: "Lampiran 7",
    subtitle: "Instrumen Penilaian Penyusunan Perangkat Pembelajaran",
    description: "Penilaian dari guru pamong terhadap kualitas rancangan pembelajaran yang telah disusun",
    criteria: [
      { aspect: "Kesesuaian Tujuan Pembelajaran dengan CP", score: "A", notes: "Tujuan pembelajaran sudah selaras dengan Capaian Pembelajaran" },
      { aspect: "Kelengkapan Komponen RPP", score: "A", notes: "Semua komponen RPP tersusun dengan lengkap dan sistematis" },
      { aspect: "Keterkaitan Materi dengan Konteks", score: "B+", notes: "Perlu penguatan konteks lokal dalam materi pembelajaran" },
      { aspect: "Kualitas Media Pembelajaran", score: "A", notes: "Media pembelajaran inovatif dan sesuai karakteristik peserta didik" },
      { aspect: "Desain Asesmen", score: "A-", notes: "Instrumen asesmen sudah baik, perlu variasi teknik penilaian" },
      { aspect: "Integrasi Teknologi", score: "B+", notes: "Penggunaan teknologi cukup baik, perlu eksplorasi lebih lanjut" },
    ],
    overallScore: "A-",
    feedback: "Perangkat pembelajaran menunjukkan pemahaman yang baik terhadap kurikulum dan karakteristik peserta didik. Perlu peningkatan dalam kontekstualisasi materi dengan kearifan lokal."
  },
  lampiran8: {
    title: "Lampiran 8",
    subtitle: "Instrumen Penilaian Praktik Mengajar",
    description: "Penilaian kinerja praktik mengajar selama 3 siklus di sekolah mitra",
    cycles: [
      {
        name: "Siklus 1",
        date: "Minggu 1-2",
        aspects: [
          { name: "Pengelolaan Kelas", score: 75 },
          { name: "Penyampaian Materi", score: 78 },
          { name: "Penggunaan Media", score: 72 },
          { name: "Interaksi dengan Siswa", score: 80 },
          { name: "Penilaian Pembelajaran", score: 75 },
        ],
        reflection: "Perlu meningkatkan pengelolaan waktu dan variasi metode pembelajaran"
      },
      {
        name: "Siklus 2",
        date: "Minggu 3-4",
        aspects: [
          { name: "Pengelolaan Kelas", score: 82 },
          { name: "Penyampaian Materi", score: 85 },
          { name: "Penggunaan Media", score: 80 },
          { name: "Interaksi dengan Siswa", score: 85 },
          { name: "Penilaian Pembelajaran", score: 82 },
        ],
        reflection: "Menunjukkan peningkatan signifikan, perlu konsistensi dalam penerapan"
      },
      {
        name: "Siklus 3",
        date: "Minggu 5-6",
        aspects: [
          { name: "Pengelolaan Kelas", score: 88 },
          { name: "Penyampaian Materi", score: 90 },
          { name: "Penggunaan Media", score: 87 },
          { name: "Interaksi dengan Siswa", score: 92 },
          { name: "Penilaian Pembelajaran", score: 88 },
        ],
        reflection: "Praktik mengajar sudah menunjukkan kompetensi guru profesional"
      },
    ],
    mentorNotes: "Mahasiswa menunjukkan perkembangan yang sangat baik dari siklus ke siklus. Kemampuan beradaptasi dan menerima umpan balik menjadi kekuatan utama. Direkomendasikan untuk terus mengembangkan inovasi pembelajaran."
  }
}

export function AssessmentSection() {
  const [activeTab, setActiveTab] = useState<"lampiran7" | "lampiran8">("lampiran7")

  return (
    <section id="penilaian" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">
            Evaluasi Guru Pamong
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Instrumen Penilaian
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dokumentasi penilaian dari guru pamong terhadap perangkat pembelajaran dan 
            praktik mengajar selama program PPG
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-secondary rounded-lg p-1">
            <button
              onClick={() => setActiveTab("lampiran7")}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all",
                activeTab === "lampiran7"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <FileText className="h-4 w-4" />
              Lampiran 7
            </button>
            <button
              onClick={() => setActiveTab("lampiran8")}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all",
                activeTab === "lampiran8"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <ClipboardCheck className="h-4 w-4" />
              Lampiran 8
            </button>
          </div>
        </div>

        {/* Lampiran 7 Content */}
        {activeTab === "lampiran7" && (
          <div className="space-y-8">
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{assessmentData.lampiran7.title}</h3>
                  <p className="text-primary font-medium">{assessmentData.lampiran7.subtitle}</p>
                  <p className="text-muted-foreground text-sm mt-1">{assessmentData.lampiran7.description}</p>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 bg-primary/10 rounded-xl">
                  <span className="text-sm text-muted-foreground">Nilai Keseluruhan</span>
                  <span className="text-3xl font-bold text-primary">{assessmentData.lampiran7.overallScore}</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 font-semibold text-sm">Aspek Penilaian</th>
                      <th className="text-center py-4 px-4 font-semibold text-sm w-24">Nilai</th>
                      <th className="text-left py-4 px-4 font-semibold text-sm">Catatan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assessmentData.lampiran7.criteria.map((item, index) => (
                      <tr key={index} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                        <td className="py-4 px-4 text-sm">{item.aspect}</td>
                        <td className="py-4 px-4 text-center">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold">
                            {item.score}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-sm text-muted-foreground">{item.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  Umpan Balik Guru Pamong
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {assessmentData.lampiran7.feedback}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Lampiran 8 Content */}
        {activeTab === "lampiran8" && (
          <div className="space-y-8">
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{assessmentData.lampiran8.title}</h3>
                <p className="text-primary font-medium">{assessmentData.lampiran8.subtitle}</p>
                <p className="text-muted-foreground text-sm mt-1">{assessmentData.lampiran8.description}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {assessmentData.lampiran8.cycles.map((cycle, cycleIndex) => (
                  <div key={cycleIndex} className="bg-secondary/50 rounded-xl p-6 border border-border">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-lg">{cycle.name}</h4>
                      <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded">
                        {cycle.date}
                      </span>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      {cycle.aspects.map((aspect, aspectIndex) => (
                        <div key={aspectIndex}>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-muted-foreground">{aspect.name}</span>
                            <span className="font-medium">{aspect.score}</span>
                          </div>
                          <div className="h-2 bg-background rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full transition-all duration-500"
                              style={{ width: `${aspect.score}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground italic">
                        {'"'}{cycle.reflection}{'"'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-primary/10 rounded-xl">
                <h4 className="font-semibold mb-2 flex items-center gap-2 text-primary">
                  <ChevronRight className="h-4 w-4" />
                  Catatan Guru Pamong
                </h4>
                <p className="text-foreground leading-relaxed">
                  {assessmentData.lampiran8.mentorNotes}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

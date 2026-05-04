"use client"

import { useState } from "react"
import { AlertTriangle, BookOpen, CheckCircle2, RefreshCw, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const analysisData = [
  {
    id: "kendala",
    icon: AlertTriangle,
    title: "Kendala dalam Penyusunan",
    subtitle: "Tantangan yang dihadapi selama proses",
    content: [
      {
        heading: "Kendala Teknis",
        description: "Kesulitan dalam mengintegrasikan teknologi pembelajaran digital ke dalam rancangan perangkat pembelajaran, terutama dalam pemilihan platform dan tools yang sesuai dengan karakteristik peserta didik."
      },
      {
        heading: "Kendala Konseptual",
        description: "Tantangan dalam menyelaraskan tujuan pembelajaran dengan indikator pencapaian kompetensi yang terukur dan dapat diamati secara konkret."
      },
      {
        heading: "Kendala Praktis",
        description: "Keterbatasan waktu dalam menyusun perangkat pembelajaran yang komprehensif sambil menjalankan tugas praktik mengajar di sekolah mitra."
      }
    ]
  },
  {
    id: "teori",
    icon: BookOpen,
    title: "Teori Pedagogi yang Diadopsi",
    subtitle: "Landasan konseptual pembelajaran",
    content: [
      {
        heading: "Konstruktivisme",
        description: "Mengadopsi pendekatan konstruktivisme yang menekankan bahwa peserta didik membangun pengetahuannya sendiri melalui pengalaman dan interaksi dengan lingkungan belajar."
      },
      {
        heading: "Pembelajaran Diferensiasi",
        description: "Menerapkan konsep differentiated instruction untuk mengakomodasi keberagaman gaya belajar, minat, dan tingkat kesiapan peserta didik."
      },
      {
        heading: "TPACK Framework",
        description: "Mengintegrasikan Technological Pedagogical Content Knowledge (TPACK) untuk memastikan teknologi digunakan secara efektif dalam mendukung pencapaian tujuan pembelajaran."
      }
    ]
  },
  {
    id: "keberhasilan",
    icon: CheckCircle2,
    title: "Faktor Keberhasilan",
    subtitle: "Kunci sukses penerapan pembelajaran",
    content: [
      {
        heading: "Persiapan yang Matang",
        description: "Perencanaan pembelajaran yang detail mencakup antisipasi berbagai kemungkinan respons peserta didik dan strategi alternatif untuk setiap skenario."
      },
      {
        heading: "Kolaborasi dengan Guru Pamong",
        description: "Komunikasi intensif dan umpan balik konstruktif dari guru pamong membantu menyempurnakan praktik mengajar dari siklus ke siklus."
      },
      {
        heading: "Refleksi Berkelanjutan",
        description: "Kebiasaan melakukan refleksi setelah setiap sesi pembelajaran memungkinkan perbaikan yang sistematis dan terukur."
      }
    ]
  },
  {
    id: "perubahan",
    icon: RefreshCw,
    title: "Adaptasi untuk Situasi Berbeda",
    subtitle: "Fleksibilitas dalam implementasi",
    content: [
      {
        heading: "Adaptasi Media Pembelajaran",
        description: "Menyiapkan alternatif media pembelajaran baik digital maupun konvensional untuk mengantisipasi keterbatasan infrastruktur teknologi di sekolah yang berbeda."
      },
      {
        heading: "Penyesuaian Metode",
        description: "Mengembangkan variasi metode pembelajaran yang dapat disesuaikan dengan ukuran kelas, karakteristik peserta didik, dan sumber daya yang tersedia."
      },
      {
        heading: "Modifikasi Penilaian",
        description: "Merancang instrumen penilaian yang fleksibel dengan mempertimbangkan konteks budaya lokal dan latar belakang sosial ekonomi peserta didik."
      }
    ]
  }
]

export function ArtifactAnalysis() {
  const [activeTab, setActiveTab] = useState("kendala")
  const [expandedMobile, setExpandedMobile] = useState<string | null>("kendala")

  const activeData = analysisData.find((item) => item.id === activeTab)

  return (
    <section id="analisis" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">
            Refleksi Pembelajaran
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Analisis Artefak Produk Pembelajaran
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Refleksi mendalam terhadap proses penyusunan rencana dan perangkat pembelajaran 
            selama program PPG
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {analysisData.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all",
                    activeTab === item.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                </button>
              )
            })}
          </div>

          {/* Content Area */}
          {activeData && (
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{activeData.title}</h3>
                <p className="text-muted-foreground">{activeData.subtitle}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {activeData.content.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                        {index + 1}
                      </span>
                      <h4 className="font-semibold">{item.heading}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile View - Accordion */}
        <div className="md:hidden space-y-4">
          {analysisData.map((item) => {
            const Icon = item.icon
            const isExpanded = expandedMobile === item.id
            return (
              <div
                key={item.id}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setExpandedMobile(isExpanded ? null : item.id)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform",
                      isExpanded && "rotate-180"
                    )}
                  />
                </button>
                {isExpanded && (
                  <div className="px-4 pb-4 space-y-4">
                    {item.content.map((contentItem, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-secondary/50 border border-border"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs">
                            {index + 1}
                          </span>
                          <h4 className="font-medium text-sm">{contentItem.heading}</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {contentItem.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

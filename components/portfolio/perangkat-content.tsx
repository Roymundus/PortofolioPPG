"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, BookOpen, Presentation, ClipboardCheck } from "lucide-react"

interface PerangkatItem {
  title: string
  description: string
  driveEmbedUrl: string
}

interface PerangkatSection {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  items: PerangkatItem[]
}

const perangkatData: PerangkatSection[] = [
  {
    id: "rpp",
    title: "RPP / Modul Ajar",
    description: "Rencana Pelaksanaan Pembelajaran dan Modul Ajar untuk setiap siklus pembelajaran",
    icon: <FileText className="h-6 w-6" />,
    items: [
      {
        title: "Modul Ajar Siklus 1",
        description: "Modul ajar untuk pembelajaran siklus pertama",
        // Ganti dengan link embed Google Drive Anda
        // Format: https://drive.google.com/file/d/FILE_ID/preview
        driveEmbedUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/preview",
      },
      {
        title: "Modul Ajar Siklus 2",
        description: "Modul ajar untuk pembelajaran siklus kedua",
        driveEmbedUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/preview",
      },
      {
        title: "Modul Ajar Siklus 3",
        description: "Modul ajar untuk pembelajaran siklus ketiga",
        driveEmbedUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/preview",
      },
    ],
  },
  {
    id: "lkpd",
    title: "LKPD",
    description: "Lembar Kerja Peserta Didik untuk mendukung aktivitas pembelajaran",
    icon: <BookOpen className="h-6 w-6" />,
    items: [
      {
        title: "LKPD Siklus 1",
        description: "Lembar kerja untuk siklus pertama",
        driveEmbedUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/preview",
      },
      {
        title: "LKPD Siklus 2",
        description: "Lembar kerja untuk siklus kedua",
        driveEmbedUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/preview",
      },
      {
        title: "LKPD Siklus 3",
        description: "Lembar kerja untuk siklus ketiga",
        driveEmbedUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/preview",
      },
    ],
  },
  {
    id: "media",
    title: "Media Pembelajaran",
    description: "Media dan bahan ajar interaktif untuk mendukung proses pembelajaran",
    icon: <Presentation className="h-6 w-6" />,
    items: [
      {
        title: "Media Pembelajaran Siklus 1",
        description: "Presentasi dan media interaktif siklus pertama",
        driveEmbedUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/preview",
      },
      {
        title: "Media Pembelajaran Siklus 2",
        description: "Presentasi dan media interaktif siklus kedua",
        driveEmbedUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/preview",
      },
      {
        title: "Media Pembelajaran Siklus 3",
        description: "Presentasi dan media interaktif siklus ketiga",
        driveEmbedUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/preview",
      },
    ],
  },
  {
    id: "asesmen",
    title: "Instrumen Asesmen",
    description: "Instrumen penilaian untuk mengukur pencapaian kompetensi peserta didik",
    icon: <ClipboardCheck className="h-6 w-6" />,
    items: [
      {
        title: "Asesmen Diagnostik",
        description: "Instrumen asesmen diagnostik awal pembelajaran",
        driveEmbedUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/preview",
      },
      {
        title: "Asesmen Formatif",
        description: "Instrumen asesmen formatif selama proses pembelajaran",
        driveEmbedUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/preview",
      },
      {
        title: "Asesmen Sumatif",
        description: "Instrumen asesmen sumatif akhir pembelajaran",
        driveEmbedUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/preview",
      },
    ],
  },
]

function DriveEmbed({ url, title }: { url: string; title: string }) {
  const isValidUrl = url && !url.includes("YOUR_FILE_ID_HERE")
  
  if (!isValidUrl) {
    return (
      <div className="w-full aspect-[4/3] bg-muted rounded-lg flex items-center justify-center border border-dashed border-border">
        <div className="text-center p-6">
          <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
          <p className="text-sm text-muted-foreground">
            Ganti URL dengan link embed Google Drive
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Format: https://drive.google.com/file/d/FILE_ID/preview
          </p>
        </div>
      </div>
    )
  }

  return (
    <iframe
      src={url}
      title={title}
      className="w-full aspect-[4/3] rounded-lg border border-border"
      allow="autoplay"
      allowFullScreen
    />
  )
}

export function PerangkatContent() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="px-6 mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance font-sans">
            Perangkat Pembelajaran
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kumpulan dokumen perangkat pembelajaran yang disusun selama program PPG, 
            mencakup modul ajar, LKPD, media pembelajaran, dan instrumen asesmen.
          </p>
        </div>
      </section>

      {/* Perangkat Sections */}
      {perangkatData.map((section) => (
        <section key={section.id} id={section.id} className="px-6 mb-16">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {section.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <p className="text-muted-foreground text-sm">{section.description}</p>
              </div>
            </div>

            {/* Items Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DriveEmbed url={item.driveEmbedUrl} title={item.title} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Instructions */}
      <section className="px-6">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Cara Menambahkan File Google Drive</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <ol className="list-decimal list-inside space-y-2">
                <li>Buka file di Google Drive</li>
                <li>Klik tombol <strong className="text-foreground">Share</strong> dan atur akses menjadi <strong className="text-foreground">&quot;Anyone with the link&quot;</strong></li>
                <li>Salin link file tersebut</li>
                <li>Ubah format link dari:
                  <code className="block bg-background px-3 py-2 rounded mt-1 text-xs">
                    https://drive.google.com/file/d/FILE_ID/view
                  </code>
                </li>
                <li>Menjadi format embed:
                  <code className="block bg-background px-3 py-2 rounded mt-1 text-xs">
                    https://drive.google.com/file/d/FILE_ID/preview
                  </code>
                </li>
                <li>Ganti <code className="bg-background px-1 rounded">YOUR_FILE_ID_HERE</code> di kode dengan FILE_ID Anda</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

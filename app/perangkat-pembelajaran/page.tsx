import { Metadata } from "next"
import { PerangkatNavigation } from "@/components/portfolio/perangkat-navigation"
import { PerangkatContent } from "@/components/portfolio/perangkat-content"
import { Footer } from "@/components/portfolio/footer"

export const metadata: Metadata = {
  title: "Perangkat Pembelajaran - E-Portfolio PPG",
  description: "Kumpulan perangkat pembelajaran mahasiswa PPG termasuk RPP, modul ajar, LKPD, dan media pembelajaran",
}

export default function PerangkatPembelajaranPage() {
  return (
    <main className="min-h-screen">
      <PerangkatNavigation />
      <PerangkatContent />
      <Footer />
    </main>
  )
}

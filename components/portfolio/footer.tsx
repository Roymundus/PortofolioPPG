import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <div className="space-y-3">
              <a
                href="mailto:mahasiswa@email.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">mahasiswa@email.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+62 xxx-xxxx-xxxx</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Universitas PPG, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Navigasi</h4>
            <div className="space-y-2">
              <Link href="/profil" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Profil Mahasiswa
              </Link>
              <Link href="/analisis-artefak" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Analisis Artefak
              </Link>
              <Link href="/penilaian" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Instrumen Penilaian
              </Link>
              <Link href="/model-guru" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Model Guru yang Dituju
              </Link>
              <Link href="/perangkat-pembelajaran" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Perangkat Pembelajaran
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Sumber Daya</h4>
            <div className="space-y-2">
              <Link
                href="/penilaian"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Dokumen Lampiran 7</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
              <Link
                href="/penilaian"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Dokumen Lampiran 8</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
              <Link
                href="/perangkat-pembelajaran"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Perangkat Pembelajaran</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-primary font-semibold">E-Portfolio PPG</span>
            <span className="text-muted-foreground text-sm">• Mahasiswa PPG 2024</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            Dibuat sebagai dokumentasi perjalanan menjadi guru profesional
          </p>
        </div>
      </div>
    </footer>
  )
}

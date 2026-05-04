import { MapPin, GraduationCap, Quote } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="profil" className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Profile */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary text-sm tracking-widest uppercase">
                E-Portfolio PPG
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance font-sans">
                Alpian Roymundus Siringo-ringo
              </h1>
              <p className="text-xl text-primary">
                Calon Guru Profesional
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Saya adalah mahasiswa Program Pendidikan Profesi Guru yang berkomitmen 
              untuk membangun generasi penerus bangsa melalui pendidikan yang berkualitas 
              dan bermakna.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/analisis-artefak"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Lihat Analisis Artefak
              </Link>
              <Link
                href="/model-guru"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                Model Guru yang Dituju
              </Link>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            {/* Origin */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Asal Daerah</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Berasal dari <span className="text-foreground font-medium">Kota/Kabupaten, Provinsi</span> yang 
                    terkenal dengan keunikan budayanya seperti tradisi, kesenian daerah, 
                    dan kearifan lokal yang menjadi fondasi karakter saya sebagai calon pendidik.
                  </p>
                </div>
              </div>
            </div>

            {/* Inspiration */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Inspirasi Menjadi Guru</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Terinspirasi oleh guru-guru yang pernah membimbing saya dengan penuh 
                    dedikasi. Tujuan saya adalah menjadi guru profesional yang mampu 
                    menciptakan pembelajaran bermakna dan memberdayakan potensi setiap peserta didik.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Quote className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <blockquote className="text-foreground italic text-lg leading-relaxed">
                    {'"'}Pendidikan adalah senjata paling ampuh yang dapat kamu gunakan untuk mengubah dunia.{'"'}
                  </blockquote>
                  <cite className="text-muted-foreground text-sm">— Nelson Mandela</cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

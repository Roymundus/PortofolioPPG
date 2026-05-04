import { Target, Award, Heart, Users, Lightbulb, BookOpen } from "lucide-react"

const competencies = [
  {
    icon: BookOpen,
    title: "Kompetensi Pedagogik",
    description: "Menguasai teori belajar dan prinsip pembelajaran yang mendidik serta mampu menyelenggarakan pembelajaran yang mendidik."
  },
  {
    icon: Lightbulb,
    title: "Kompetensi Profesional",
    description: "Menguasai materi, struktur, konsep, dan pola pikir keilmuan yang mendukung mata pelajaran yang diampu."
  },
  {
    icon: Heart,
    title: "Kompetensi Kepribadian",
    description: "Bertindak sesuai norma agama, hukum, sosial, dan kebudayaan nasional Indonesia dengan menjunjung tinggi kode etik guru."
  },
  {
    icon: Users,
    title: "Kompetensi Sosial",
    description: "Berkomunikasi secara efektif, empatik, dan santun dengan sesama pendidik, tenaga kependidikan, orang tua, dan masyarakat."
  }
]

const characteristics = [
  "Adaptif terhadap perubahan",
  "Inovatif dalam pembelajaran",
  "Reflektif dan terus belajar",
  "Berempati pada peserta didik",
  "Kolaboratif dengan rekan sejawat",
  "Berintegritas tinggi"
]

export function TeacherModel() {
  return (
    <section id="model-guru" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">
            Visi Profesional
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Model Guru yang Dituju
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Gambaran guru profesional yang ingin diwujudkan melalui pengembangan 
            kompetensi dan karakter secara berkelanjutan
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12 mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Target className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Misi Saya</h3>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Menjadi guru yang <span className="text-foreground font-medium">inspiratif</span> dan{" "}
            <span className="text-foreground font-medium">transformatif</span>, mampu menciptakan 
            lingkungan belajar yang inklusif dan bermakna, serta memberdayakan setiap peserta 
            didik untuk mencapai potensi terbaiknya melalui pendidikan yang holistik dan 
            berpusat pada nilai-nilai kemanusiaan.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-8 text-center">
            Kompetensi yang Ingin Dikembangkan
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {competencies.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Character Traits */}
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="md:w-1/3">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Karakter Guru Profesional</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Karakteristik personal yang ingin saya bangun untuk menjadi guru 
                yang efektif dan bermakna bagi peserta didik.
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="flex flex-wrap gap-3">
                {characteristics.map((trait, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-xl md:text-2xl italic text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {'"'}Guru yang baik adalah guru yang tidak pernah berhenti belajar, 
            karena pendidikan adalah perjalanan tanpa akhir menuju kebijaksanaan.{'"'}
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-border" />
            <span className="text-primary font-medium">Prinsip Hidup Saya</span>
            <div className="h-px w-12 bg-border" />
          </div>
        </div>
      </div>
    </section>
  )
}

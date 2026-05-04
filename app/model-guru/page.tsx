import { Navigation } from "@/components/portfolio/navigation"
import { TeacherModel } from "@/components/portfolio/teacher-model"
import { Footer } from "@/components/portfolio/footer"

export default function ModelGuruPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <TeacherModel />
      </div>
      <Footer />
    </main>
  )
}

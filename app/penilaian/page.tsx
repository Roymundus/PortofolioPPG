import { Navigation } from "@/components/portfolio/navigation"
import { AssessmentSection } from "@/components/portfolio/assessment-section"
import { Footer } from "@/components/portfolio/footer"

export default function PenilaianPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <AssessmentSection />
      </div>
      <Footer />
    </main>
  )
}

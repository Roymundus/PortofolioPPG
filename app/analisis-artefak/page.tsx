import { Navigation } from "@/components/portfolio/navigation"
import { ArtifactAnalysis } from "@/components/portfolio/artifact-analysis"
import { Footer } from "@/components/portfolio/footer"

export default function AnalisisArtefakPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ArtifactAnalysis />
      </div>
      <Footer />
    </main>
  )
}

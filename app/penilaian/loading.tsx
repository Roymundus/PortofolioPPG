import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { Navigation } from "@/components/portfolio/navigation"

export default function PenilaianLoading() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-4 w-32 mx-auto" />
            <Skeleton className="h-12 w-80 mx-auto" />
            <Skeleton className="h-6 w-[450px] mx-auto" />
          </div>
          
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Lampiran 7 */}
            <div className="space-y-6">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-6 w-48" />
              <div className="space-y-3">
                <Skeleton className="h-12 w-full rounded-lg" />
                <Skeleton className="h-12 w-full rounded-lg" />
                <Skeleton className="h-12 w-full rounded-lg" />
                <Skeleton className="h-12 w-full rounded-lg" />
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>
              <Skeleton className="h-16 w-full rounded-lg" />
            </div>
            
            {/* Lampiran 8 */}
            <div className="space-y-6">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-6 w-48" />
              <div className="space-y-4">
                <Skeleton className="h-24 w-full rounded-lg" />
                <Skeleton className="h-24 w-full rounded-lg" />
                <Skeleton className="h-24 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Loading Indicator */}
      <div className="fixed bottom-6 right-6 flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-lg">
        <Spinner className="size-5 text-primary" />
        <span className="text-sm text-muted-foreground">Memuat...</span>
      </div>
    </main>
  )
}

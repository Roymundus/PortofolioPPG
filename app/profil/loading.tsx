import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { Navigation } from "@/components/portfolio/navigation"

export default function ProfilLoading() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-14 w-full max-w-md" />
                <Skeleton className="h-14 w-3/4" />
                <Skeleton className="h-6 w-64" />
              </div>
              
              <div className="flex gap-4">
                <Skeleton className="h-12 w-44 rounded-lg" />
                <Skeleton className="h-12 w-52 rounded-lg" />
              </div>
            </div>
            
            {/* Right Content */}
            <div className="space-y-6">
              <Skeleton className="h-32 w-full rounded-2xl" />
              <Skeleton className="h-40 w-full rounded-2xl" />
              <Skeleton className="h-28 w-full rounded-2xl" />
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

import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { PerangkatNavigation } from "@/components/portfolio/perangkat-navigation"

export default function PerangkatLoading() {
  return (
    <main className="min-h-screen bg-background">
      <PerangkatNavigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-4 w-32 mx-auto" />
            <Skeleton className="h-12 w-80 mx-auto" />
            <Skeleton className="h-6 w-[500px] mx-auto" />
          </div>
          
          {/* Category Tabs */}
          <div className="flex justify-center gap-3 mb-12">
            <Skeleton className="h-10 w-36 rounded-lg" />
            <Skeleton className="h-10 w-28 rounded-lg" />
            <Skeleton className="h-10 w-44 rounded-lg" />
            <Skeleton className="h-10 w-40 rounded-lg" />
          </div>
          
          {/* Document Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-64 w-full rounded-xl" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-64 w-full rounded-xl" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-64 w-full rounded-xl" />
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

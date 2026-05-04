import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { Navigation } from "@/components/portfolio/navigation"

export default function ModelGuruLoading() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-4 w-32 mx-auto" />
            <Skeleton className="h-12 w-72 mx-auto" />
            <Skeleton className="h-6 w-[400px] mx-auto" />
          </div>
          
          {/* Mission Card */}
          <Skeleton className="h-40 w-full max-w-3xl mx-auto rounded-2xl mb-16" />
          
          {/* Competencies Grid */}
          <div className="mb-12">
            <Skeleton className="h-8 w-48 mx-auto mb-8" />
            <div className="grid md:grid-cols-2 gap-6">
              <Skeleton className="h-36 w-full rounded-2xl" />
              <Skeleton className="h-36 w-full rounded-2xl" />
              <Skeleton className="h-36 w-full rounded-2xl" />
              <Skeleton className="h-36 w-full rounded-2xl" />
            </div>
          </div>
          
          {/* Character Section */}
          <div>
            <Skeleton className="h-8 w-56 mx-auto mb-8" />
            <div className="flex flex-wrap justify-center gap-4">
              <Skeleton className="h-12 w-28 rounded-full" />
              <Skeleton className="h-12 w-32 rounded-full" />
              <Skeleton className="h-12 w-24 rounded-full" />
              <Skeleton className="h-12 w-36 rounded-full" />
              <Skeleton className="h-12 w-28 rounded-full" />
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

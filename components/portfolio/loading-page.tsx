import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-4">
      {/* Animasi Spinner */}
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
      
      {/* Teks Loading */}
      <div className="flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold text-foreground">
          Memuat halaman...
        </h3>
        <p className="text-sm text-muted-foreground">
          Harap tunggu sebentar, sedang menyiapkan data portofolio.
        </p>
      </div>
    </div>
  );
}
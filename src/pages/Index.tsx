import { useEffect } from "react";
import Poster from "@/components/Poster";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "Fiesta Ibicenca | Bar Jubilats Serra";
  }, []);

  const handlePrint = () => window.print();

  return (
    <main className="preview-frame min-h-screen w-full flex flex-col items-center justify-start bg-background py-10 px-4">
      {/* Print button — hidden on print */}
      <div className="no-print w-full max-w-[210mm] flex items-center justify-between mb-6">
        <div>
          <h1 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Cartel · Vista previa
          </h1>
          <p className="text-xs text-muted-foreground mt-1">
            Optimizado para impresión A4 vertical (también A3).
          </p>
        </div>
        <Button
          onClick={handlePrint}
          size="lg"
          className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Printer className="h-4 w-4" />
          Imprimir cartel
        </Button>
      </div>

      {/* Poster */}
      <Poster />

      <p className="no-print mt-6 text-xs text-muted-foreground">
        Consejo: en el diálogo de impresión, desactiva “Encabezados y pies de página”
        y selecciona “Márgenes: Ninguno”.
      </p>
    </main>
  );
};

export default Index;

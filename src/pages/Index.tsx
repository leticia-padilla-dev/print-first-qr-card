import { useEffect, useMemo, useRef, useState } from "react";
import Poster from "@/components/Poster";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

const POSTER_WIDTH_PX = 793.7008;
const POSTER_HEIGHT_PX = 1122.5197;

const Index = () => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [posterScale, setPosterScale] = useState(1);

  useEffect(() => {
    document.title = "Jubilats Serra | Print poster";
  }, []);

  useEffect(() => {
    const node = stageRef.current;
    if (!node) return;

    const updateScale = () => {
      const nextScale = Math.min(1, node.clientWidth / POSTER_WIDTH_PX);
      setPosterScale(nextScale || 1);
    };

    updateScale();

    const observer = new ResizeObserver(() => updateScale());
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const handlePrint = () => window.print();
  const stageHeight = useMemo(() => POSTER_HEIGHT_PX * posterScale, [posterScale]);

  return (
    <main className="preview-frame min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden bg-background py-6 sm:py-10 px-3 sm:px-4">
      {/* Print button — hidden on print */}
      <div className="no-print w-full max-w-[210mm] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-sm uppercase tracking-[0.3em] text-muted-foreground break-words">
            Poster · Vista previa
          </h1>
          <p className="text-xs text-muted-foreground mt-1 max-w-[32ch] sm:max-w-none">
            Optimizado para impresión A4 vertical (también A3).
          </p>
        </div>
        <Button
          onClick={handlePrint}
          size="lg"
          className="w-full sm:w-auto gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Printer className="h-4 w-4" />
          Imprimir cartel
        </Button>
      </div>

      {/* Poster */}
      <div
        ref={stageRef}
        className="poster-stage w-full max-w-[210mm]"
        style={{ height: `${stageHeight}px` }}
      >
        <div
          className="poster-stage-inner"
          style={{
            width: `${POSTER_WIDTH_PX}px`,
            height: `${POSTER_HEIGHT_PX}px`,
            transform: `scale(${posterScale})`,
            transformOrigin: "top left",
          }}
        >
          <Poster />
        </div>
      </div>

      <p className="no-print mt-6 text-xs text-muted-foreground max-w-[36ch] sm:max-w-[210mm]">
        Consejo: en el diálogo de impresión, desactiva “Encabezados y pies de página”
        y selecciona “Márgenes: Ninguno”.
      </p>
    </main>
  );
};

export default Index;

import { useEffect, useMemo, useRef, useState } from "react";
import QrCardSheet from "@/components/QrCardSheet";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

const SHEET_WIDTH_PX = 793.7008;
const SHEET_HEIGHT_PX = 1122.5197;

const QrCardPrint = () => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    document.title = "Jubilats Serra | Printable QR cards";
  }, []);

  useEffect(() => {
    const node = stageRef.current;
    if (!node) return;

    const updateScale = () => {
      const nextScale = Math.min(1, node.clientWidth / SHEET_WIDTH_PX);
      setScale(nextScale || 1);
    };

    updateScale();
    const observer = new ResizeObserver(() => updateScale());
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const stageHeight = useMemo(() => SHEET_HEIGHT_PX * scale, [scale]);

  return (
    <main className="preview-frame min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden bg-background py-6 sm:py-10 px-3 sm:px-4">
      {/* Controls — hidden on print */}
      <div className="no-print w-full max-w-[210mm] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-sm uppercase tracking-[0.3em] text-muted-foreground break-words">
            Tarjetas QR · Vista previa
          </h1>
          <p className="text-xs text-muted-foreground mt-1 max-w-[32ch] sm:max-w-none">
            4 tarjetas 90×140mm en A4 vertical. Recortar por las líneas grises.
          </p>
        </div>
        <Button
          onClick={() => window.print()}
          size="lg"
          className="w-full sm:w-auto gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Printer className="h-4 w-4" />
          Imprimir tarjetas
        </Button>
      </div>

      {/* Sheet preview */}
      <div
        ref={stageRef}
        className="qr-sheet-stage w-full max-w-[210mm]"
        style={{ height: `${stageHeight}px` }}
      >
        <div
          className="qr-sheet-stage-inner"
          style={{
            width: `${SHEET_WIDTH_PX}px`,
            height: `${SHEET_HEIGHT_PX}px`,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <QrCardSheet />
        </div>
      </div>

      <p className="no-print mt-6 text-xs text-muted-foreground max-w-[36ch] sm:max-w-[210mm]">
        Consejo: desactiva "Encabezados y pies de página" y selecciona "Márgenes: Ninguno" al imprimir.
      </p>
    </main>
  );
};

export default QrCardPrint;

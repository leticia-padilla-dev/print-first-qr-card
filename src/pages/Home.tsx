import { useEffect } from "react";
import { ArrowRight, FileImage, QrCode } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  useEffect(() => {
    document.title = "Jubilats Serra | Print-first poster and QR cards";
  }, []);

  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-border bg-card p-6 shadow-xl shadow-black/5 sm:p-10">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Print-first assets
          </p>
          <h1 className="mt-4 font-['Cormorant_Garamond'] text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Bar Jubilats Serra
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Repo de artefactos imprimibles para un negocio local: un cartel promocional A4 y una
            hoja de tarjetas QR listas para imprimir, recortar y usar en sala.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <RouteCard
            eyebrow="Poster"
            title="Cartel promocional"
            description="Vista previa print-first del cartel editorial para evento especial, ajustada a A4 vertical."
            to="/poster"
            icon={<FileImage className="h-5 w-5" />}
            cta="Abrir poster"
          />
          <RouteCard
            eyebrow="QR cards"
            title="Tarjetas QR imprimibles"
            description="Hoja A4 con 4 tarjetas QR 90×140 mm para imprimir, recortar y colocar en mesa."
            to="/print/qr-card"
            icon={<QrCode className="h-5 w-5" />}
            cta="Abrir tarjetas"
          />
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-secondary/20 p-5 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Uso recomendado</p>
          <p className="mt-2">
            Abrir la vista que corresponda, revisar en navegador y luego imprimir con márgenes a
            cero y gráficos de fondo activados.
          </p>
        </div>
      </div>
    </main>
  );
};

function RouteCard({
  eyebrow,
  title,
  description,
  to,
  icon,
  cta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  to: string;
  icon: React.ReactNode;
  cta: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-[1.5rem] border border-border bg-background p-6">
      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary/30 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
        {icon}
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-5 font-['Cormorant_Garamond'] text-3xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{description}</p>
      <Button asChild className="mt-6 w-full justify-between sm:w-auto">
        <Link to={to}>
          {cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </article>
  );
}

export default Home;

import bgImage from "@/assets/cartel-ibicenca.png";

const Poster = () => {
  return (
    <article
      className="poster relative overflow-hidden bg-[hsl(var(--poster-deep))] shadow-[var(--shadow-poster)] rounded-md"
      style={{
        width: "210mm",
        height: "297mm",
      }}
      aria-label="Cartel Fiesta Ibicenca Bar Jubilats Serra"
    >
      {/* Background image */}
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 40%" }}
      />

      {/* Grain texture for premium printed feel */}
      <div className="grain-overlay" aria-hidden="true" />


      {/* Gradient overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-overlay)" }}
        aria-hidden="true"
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 38%, hsl(0 0% 0% / 0.3) 74%, hsl(0 0% 0% / 0.52) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Safe content zone — ~12mm margins */}
      <div
        className="relative h-full flex flex-col"
        style={{ padding: "14mm 14mm 12mm 14mm", color: "hsl(var(--poster-ink))" }}
      >
        {/* Top — Venue */}
        <header className="text-center">
          <div
            className="tracking-[0.45em] text-[10pt] font-medium uppercase"
            style={{ color: "hsl(var(--poster-ink-soft))" }}
          >
            Bar Jubilats Serra
          </div>
          <div
            className="mx-auto mt-3"
            style={{
              width: "60mm",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, hsl(var(--poster-gold) / 0.8), transparent)",
            }}
          />
        </header>

        {/* Title block */}
        <div className="text-center mt-8">
          <h1
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "72pt",
              lineHeight: 0.9,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              textShadow: "0 4px 20px hsl(0 0% 0% / 0.5)",
            }}
          >
            Fiesta
          </h1>
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
              fontSize: "108pt",
              lineHeight: 0.72,
              marginTop: "-8pt",
              color: "hsl(var(--poster-gold))",
              textShadow: "0 2px 8px rgba(0,0,0,0.65)",
              letterSpacing: "0.01em",
              position: "relative",
              zIndex: 10,
              transform: "translateX(-3mm)",
            }}
          >
            Ibicenca
          </h2>
        </div>

        {/* Date */}
        <div className="text-center mt-6">
          <div
            className="inline-flex items-center gap-4"
            style={{ color: "hsl(var(--poster-ink))" }}
          >
            <span style={{ width: "18mm", height: "1px", background: "hsl(var(--poster-ink) / 0.5)" }} />
            <span
              className="uppercase tracking-[0.32em] text-[12pt] font-medium"
              style={{ textShadow: "0 2px 10px hsl(0 0% 0% / 0.35)" }}
            >
              Sábado 20 de Junio
            </span>
            <span style={{ width: "18mm", height: "1px", background: "hsl(var(--poster-ink) / 0.5)" }} />
          </div>
          <div
          className="mt-4 tracking-[0.52em] text-[11pt] uppercase"
          style={{ color: "hsl(var(--poster-gold))", textShadow: "0 2px 10px hsl(0 0% 0% / 0.28)" }}
          >
            Cena · Baile
          </div>
        </div>

        {/* Dress code & ambiente */}
        <div className="text-center mt-6 space-y-1.5">
          <div
            className="text-[9.5pt] uppercase tracking-[0.3em] font-medium"
            style={{ color: "hsl(var(--poster-ink-soft))", textShadow: "0 2px 8px hsl(0 0% 0% / 0.28)" }}
          >
            Dress Code: Todo Blanco
          </div>
          <div
            className="text-[9pt] uppercase tracking-[0.28em]"
            style={{ color: "hsl(var(--poster-ink-soft) / 0.9)", textShadow: "0 2px 8px hsl(0 0% 0% / 0.24)" }}
          >
            Música & Buen Ambiente
          </div>
        </div>

        {/* Menu card */}
        <section
          className="mt-auto mx-auto"
          style={{
            width: "80%",
            maxWidth: "142mm",
            background: "hsl(0 0% 0% / 0.58)",
            color: "hsl(var(--poster-ink))",
            padding: "6.2mm 7.4mm 5.6mm",
            borderRadius: "4mm",
            border: "1px solid hsl(42 90% 70% / 0.5)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 18px 45px hsl(0 0% 0% / 0.24)",
          }}
        >
          <div className="text-center">
            <div
              className="uppercase tracking-[0.28em] text-[10.5pt] font-semibold"
              style={{ color: "hsl(var(--poster-gold))" }}
            >
              Menú Especial
            </div>
            <div
              className="mx-auto mt-2"
              style={{
                width: "30mm",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--poster-ink) / 0.95), transparent)",
              }}
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-[18px] text-center">
            <div>
              <div
                className="text-[8.75pt] uppercase tracking-[0.2em] font-semibold"
                style={{ color: "hsl(var(--poster-ink-soft) / 0.96)" }}
              >
                Entrantes incluidos
              </div>
              <div
                className="text-[12pt] mt-1.5"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 500,
                  lineHeight: 1.45,
                  color: "hsl(var(--poster-ink))",
                }}
              >
                Provolone · Brava · Calamar frito
              </div>
              <div
                className="mx-auto mt-3"
                style={{
                  width: "42mm",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, hsl(var(--poster-gold) / 0.75), transparent)",
                }}
              />
            </div>

            <div>
              <div
                className="text-[8.75pt] uppercase tracking-[0.2em] font-semibold"
                style={{ color: "hsl(var(--poster-ink-soft) / 0.96)" }}
              >
                Minibocadillo a elegir
              </div>
              <div
                className="text-[12pt] mt-1.5"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 500,
                  lineHeight: 1.45,
                  color: "hsl(var(--poster-ink))",
                }}
              >
                Brascada · Chivito · Jubilado
              </div>
              <div
                className="mx-auto mt-3"
                style={{
                  width: "42mm",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, hsl(var(--poster-gold) / 0.75), transparent)",
                }}
              />
            </div>

            <div className="pt-1">
              <div
                className="text-[8.75pt] uppercase tracking-[0.2em] font-semibold"
                style={{ color: "hsl(var(--poster-ink-soft) / 0.96)" }}
              >
                Incluye
              </div>
              <div
                className="text-[12.5pt] mt-1.5"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                  lineHeight: 1.35,
                  color: "hsl(var(--poster-gold))",
                }}
              >
                1 bebida + 1 cubata
              </div>
            </div>
          </div>
          <div className="mt-4 pt-1 text-center">
            <div
              className="mx-auto mb-3"
              style={{
                width: "42mm",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--poster-gold) / 0.75), transparent)",
              }}
            />
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                fontSize: "27pt",
                lineHeight: 1,
                color: "hsl(40 52% 90%)",
                letterSpacing: "0.01em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              22,00 €
            </div>
            <div
              className="text-[9pt] mt-1.5"
              style={{ color: "hsl(var(--poster-ink-soft) / 0.97)" }}
            >
              2 € destinados a la Asociación Jubilats Serra
            </div>
          </div>
        </section>

        {/* Reservas */}
        <footer className="text-center mt-7">
          <div
            className="mx-auto mb-3"
            style={{
              width: "40mm",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, hsl(var(--poster-gold) / 0.7), transparent)",
            }}
          />
          <div
            className="uppercase tracking-[0.4em] text-[9pt]"
            style={{ color: "hsl(var(--poster-ink-soft))" }}
          >
            Reservas
          </div>
          <div
            className="mt-1 text-[14pt]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              color: "hsl(var(--poster-ink))",
              letterSpacing: "0.05em",
            }}
          >
            +34 615 92 97 35
          </div>
        </footer>
      </div>
    </article>
  );
};

export default Poster;

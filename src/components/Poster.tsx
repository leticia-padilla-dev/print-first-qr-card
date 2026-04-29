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
        style={{
          objectPosition: "center 40%",
          filter: "brightness(1.15) contrast(1.05) saturate(1.1)",
        }}
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
            "radial-gradient(ellipse at center, transparent 50%, hsl(0 0% 0% / 0.15) 80%, hsl(0 0% 0% / 0.3) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Safe content zone — ~10mm bottom margin to lower the layout */}
      <div
        className="relative h-full flex flex-col"
        style={{
          padding: "14mm 14mm 10mm 14mm",
          color: "hsl(var(--poster-ink))",
        }}
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
        <div className="text-center mt-6">
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
              marginTop: "-10pt",
              color: "hsl(var(--poster-gold))",
              textShadow: "0 2px 8px rgba(0,0,0,0.65)",
              letterSpacing: "0.01em",
              position: "relative",
              zIndex: 10,
              transform: "translateX(-3mm)",
            }}
          >
            Ibicenca!
          </h2>
          <svg
            width="60"
            height="14"
            viewBox="0 0 60 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto mt-3 opacity-90"
            style={{ color: "hsl(var(--poster-ink))" }}
          >
            <path d="M 4 7 Q 10.5 1, 17 7 T 30 7 T 43 7 T 56 7" />
          </svg>
        </div>

        {/* Menu card */}
        <section
          className="mx-auto mt-6"
          style={{
            width: "fit-content",
            background: "hsl(0 0% 0% / 0.35)",
            color: "hsl(var(--poster-ink))",
            padding: "4mm 6mm 3.5mm",
            borderRadius: "3mm",
            border: "1px solid hsl(42 90% 70% / 0.25)",
            backdropFilter: "blur(4px)",
            boxShadow: "0 10px 30px hsl(0 0% 0% / 0.15)",
          }}
        >
          <div className="text-center">
            <div
              className="uppercase tracking-[0.28em] text-[10.5pt] font-semibold"
              style={{ color: "hsl(var(--poster-gold))" }}
            >
              Menú Especial
            </div>
            <svg
              width="40"
              height="10"
              viewBox="0 0 40 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mt-2 opacity-80"
              style={{ color: "hsl(var(--poster-gold))" }}
            >
              <path d="M 2 5 Q 6.5 1, 11 5 T 20 5 T 29 5 T 38 5" />
            </svg>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-[20px] text-center">
            <div>
              <div
                className="text-[9.25pt] uppercase tracking-[0.17em] font-semibold"
                style={{ color: "hsl(var(--poster-ink-soft) / 0.96)" }}
              >
                Entrantes incluidos
              </div>
              <div
                className="text-[13.25pt] mt-2"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                  lineHeight: 1.52,
                  color: "hsl(var(--poster-ink))",
                }}
              >
                Provolone · Brava · Calamar frito
              </div>
              <div
                className="mx-auto mt-3"
                style={{
                  width: "42mm",
                  borderBottom: "1px dashed hsl(var(--poster-ink) / 0.3)",
                }}
              />
            </div>

            <div>
              <div
                className="text-[9.25pt] uppercase tracking-[0.17em] font-semibold"
                style={{ color: "hsl(var(--poster-ink-soft) / 0.96)" }}
              >
                Minibocadillo a elegir
              </div>
              <div
                className="text-[13.25pt] mt-2"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                  lineHeight: 1.52,
                  color: "hsl(var(--poster-ink))",
                }}
              >
                Brascada · Chivito · Jubilado
              </div>
              <div
                className="mx-auto mt-3"
                style={{
                  width: "42mm",
                  borderBottom: "1px dashed hsl(var(--poster-ink) / 0.3)",
                }}
              />
            </div>

            <div className="pt-1">
              <div
                className="text-[9.25pt] uppercase tracking-[0.17em] font-semibold"
                style={{ color: "hsl(var(--poster-ink-soft) / 0.96)" }}
              >
                Incluye
              </div>
              <div
                className="text-[13.75pt] mt-2"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                  lineHeight: 1.42,
                  color: "hsl(var(--poster-gold))",
                }}
              >
                1 bebida · 1 cubata
              </div>
            </div>
          </div>
          <div className="mt-4 pt-1 text-center">
            <div
              className="mx-auto mb-3"
              style={{
                width: "42mm",
                borderBottom: "1px dashed hsl(var(--poster-ink) / 0.3)",
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

        {/* Date */}
        <div className="text-center mt-auto">
          <div
            className="inline-flex items-center gap-4"
            style={{ color: "hsl(var(--poster-ink))" }}
          >
            <span
              style={{
                width: "18mm",
                height: "1px",
                background: "hsl(var(--poster-ink) / 0.5)",
              }}
            />
            <span
              className="uppercase tracking-[0.32em] text-[12pt] font-medium"
              style={{ textShadow: "0 2px 10px hsl(0 0% 0% / 0.35)" }}
            >
              Sábado 20 de Junio
            </span>
            <span
              style={{
                width: "18mm",
                height: "1px",
                background: "hsl(var(--poster-ink) / 0.5)",
              }}
            />
          </div>
          <div
            className="mt-3 tracking-[0.35em] text-[10.5pt] uppercase font-semibold"
            style={{
              color: "hsl(var(--poster-gold))",
              textShadow: "0 2px 10px hsl(0 0% 0% / 0.28)",
            }}
          >
            Cena 20:30–22:30 · Baile · DJ
          </div>
        </div>

        {/* Dress code & ambiente */}
        <div className="text-center mt-4 space-y-1">
          <div
            className="text-[9.5pt] uppercase tracking-[0.3em] font-medium"
            style={{
              color: "hsl(var(--poster-ink-soft))",
              textShadow: "0 2px 8px hsl(0 0% 0% / 0.28)",
            }}
          >
            Dress Code: ¡Todo Blanco!
          </div>
          <div
            className="text-[9pt] uppercase tracking-[0.28em]"
            style={{
              color: "hsl(var(--poster-ink-soft) / 0.9)",
              textShadow: "0 2px 8px hsl(0 0% 0% / 0.24)",
            }}
          >
            DJ · Copas · Ambiente Ibicenco
          </div>
        </div>



        {/* Reservas */}
        <footer className="text-center mt-4">
          <div
            className="mx-auto mb-2"
            style={{
              width: "40mm",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, hsl(var(--poster-gold) / 0.5), transparent)",
            }}
          />
          <div
            className="uppercase tracking-[0.22em] text-[9.5pt] font-semibold"
            style={{
              color: "hsl(var(--poster-ink))",
              textShadow: "0 2px 8px hsl(0 0% 0% / 0.4)",
            }}
          >
            Plazas Limitadas · Reserva Ya
          </div>
          <div
            className="mt-0.5 text-[14.5pt]"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 700,
              color: "hsl(var(--poster-gold))",
              letterSpacing: "0.05em",
              textShadow: "0 2px 8px hsl(0 0% 0% / 0.4)",
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

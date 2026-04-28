import bgImage from "@/assets/ibiza-bg.jpg";

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
      />

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
            "radial-gradient(ellipse at center, transparent 40%, hsl(15 40% 6% / 0.55) 100%)",
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
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: "62pt",
              lineHeight: 0.95,
              letterSpacing: "0.01em",
            }}
          >
            Fiesta
          </h1>
          <h2
            style={{
              fontFamily: "'Pinyon Script', cursive",
              fontSize: "78pt",
              lineHeight: 1,
              marginTop: "-6pt",
              background: "var(--gradient-gold)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 2px 8px hsl(15 40% 5% / 0.5))",
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
              className="uppercase tracking-[0.3em] text-[11pt] font-medium"
            >
              Sábado 20 de Junio
            </span>
            <span style={{ width: "18mm", height: "1px", background: "hsl(var(--poster-ink) / 0.5)" }} />
          </div>
          <div
            className="mt-3 tracking-[0.5em] text-[10pt] uppercase"
            style={{ color: "hsl(var(--poster-gold))" }}
          >
            Cena · Baile
          </div>
        </div>

        {/* Dress code & ambiente */}
        <div className="text-center mt-5 space-y-1">
          <div
            className="text-[9.5pt] uppercase tracking-[0.32em] font-medium"
            style={{ color: "hsl(var(--poster-ink-soft))" }}
          >
            Dress Code: Todo Blanco
          </div>
          <div
            className="text-[9pt] uppercase tracking-[0.28em]"
            style={{ color: "hsl(var(--poster-ink-soft) / 0.85)" }}
          >
            Música & Buen Ambiente
          </div>
        </div>

        {/* Menu card */}
        <section
          className="mt-6 mx-auto"
          style={{
            width: "100%",
            background: "hsl(40 30% 98% / 0.94)",
            color: "hsl(var(--poster-deep))",
            padding: "8mm 9mm",
            borderRadius: "2mm",
            border: "1px solid hsl(42 60% 55% / 0.5)",
          }}
        >
          <div className="text-center">
            <div
              className="uppercase tracking-[0.4em] text-[9pt]"
              style={{ color: "hsl(25 60% 35%)" }}
            >
              Menú Especial
            </div>
            <div
              className="mx-auto mt-2"
              style={{
                width: "30mm",
                height: "1px",
                background: "hsl(25 50% 40% / 0.4)",
              }}
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 text-center">
            <div>
              <div
                className="text-[8.5pt] uppercase tracking-[0.25em] font-medium"
                style={{ color: "hsl(25 40% 30%)" }}
              >
                Entrantes incluidos
              </div>
              <div
                className="text-[11.5pt] mt-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
              >
                Provolone · Brava · Calamar frito
              </div>
            </div>

            <div>
              <div
                className="text-[8.5pt] uppercase tracking-[0.25em] font-medium"
                style={{ color: "hsl(25 40% 30%)" }}
              >
                Minibocadillo a elegir
              </div>
              <div
                className="text-[11.5pt] mt-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
              >
                Brascada · Chivito · Jubilado
              </div>
            </div>

            <div className="pt-2">
              <div
                className="text-[8.5pt] uppercase tracking-[0.25em] font-medium"
                style={{ color: "hsl(25 40% 30%)" }}
              >
                Incluye
              </div>
              <div
                className="text-[11.5pt] mt-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
              >
                1 bebida + 1 cubata
              </div>
            </div>
          </div>
        </section>

        {/* Price — protagonist */}
        <div className="text-center mt-6">
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: "54pt",
              lineHeight: 1,
              background: "var(--gradient-gold)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 2px 6px hsl(15 40% 5% / 0.45))",
              letterSpacing: "-0.01em",
            }}
          >
            22,30 €
          </div>
          <div
            className="text-[8.5pt] mt-2 italic"
            style={{ color: "hsl(var(--poster-ink-soft))" }}
          >
            2 € destinados a la Asociación Jubilats Serra
          </div>
        </div>

        {/* Spacer pushes footer down */}
        <div className="flex-1" />

        {/* Reservas */}
        <footer className="text-center">
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
            +34 XXX XXX XXX
          </div>
        </footer>
      </div>
    </article>
  );
};

export default Poster;

import { QRCodeSVG } from "qrcode.react";

const QR_URL = "https://jubilats.vercel.app/carta";

const QrCard = () => (
  <article
    className="qr-card relative flex flex-col items-center overflow-hidden"
    style={{
      width: "90mm",
      height: "140mm",
      padding: "8mm 7mm 9mm",
      gap: "0",
      fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#F5F1E8",
    }}
    aria-label="Tarjeta QR Bar Jubilats Serra"
  >
    <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
      <div className="absolute inset-x-0 top-[6mm] opacity-60">
        <svg viewBox="0 0 100 18" className="w-full h-auto">
          <path
            d="M0,13 C5,12 8,10 11,8.5 C14,7 17,8.8 21,9.2 C25,9.6 29,6.2 33,4.8 C37,3.4 40,7.2 44,9.6 C48,12 53,5.2 58,4 C63,2.8 67,7.4 72,8.6 C77,9.8 81,5.8 86,5.2 C91,4.6 95,8.5 100,7.2"
            fill="none"
            stroke="#5F735B"
            strokeWidth="0.68"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="absolute left-1/2 bottom-[16mm] w-[74%] -translate-x-1/2 opacity-30">
        <svg viewBox="0 0 100 12" className="w-full h-auto">
          <path
            d="M0,8 L14,6.5 L28,7.2 L43,4.5 L58,7 L74,4.2 L88,6.6 L100,5.8"
            fill="none"
            stroke="#98A38F"
            strokeWidth="0.45"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>

    <div className="z-10 flex w-full flex-col items-center text-center">
      <p
        className="m-0 text-[7.4pt] font-medium uppercase leading-none tracking-[0.42em]"
        style={{ color: "#6E675C" }}
      >
        Bar Jubilats
      </p>
      <div
        className="mt-[7mm] w-full border-t"
        style={{ borderColor: "rgba(91, 105, 84, 0.28)" }}
      />
    </div>

    <div className="z-10 mt-[7mm] flex w-full flex-col items-center text-center">
      <p
        className="m-0 uppercase leading-none"
        style={{
          color: "#1D281B",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "18.2pt",
          fontWeight: 600,
          letterSpacing: "0.16em",
        }}
      >
        Disfruta Serra
      </p>
      <p
        className="m-0 mt-[2.2mm]"
        style={{
          color: "#736C60",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "9.3pt",
          fontWeight: 500,
          letterSpacing: "0.1em",
        }}
      >
        Carta del restaurante
      </p>
    </div>

    <div className="z-10 mt-[9mm] flex items-center justify-center shrink-0 rounded-xl bg-white p-[3.2mm] shadow-[0_0.9mm_2.6mm_rgba(35,32,28,0.10)] ring-1 ring-[rgba(91,105,84,0.10)]">
      <QRCodeSVG
        value={QR_URL}
        size={220}
        fgColor="#000000"
        bgColor="#ffffff"
        level="H"
        marginSize={3}
      />
    </div>

    <div className="z-10 mt-auto flex w-full flex-col items-center text-center">
      <p
        className="m-0 uppercase leading-none"
        style={{
          color: "#23201C",
          fontSize: "9.9pt",
          fontWeight: 650,
          letterSpacing: "0.18em",
        }}
      >
        Escanea la carta
      </p>
      <p
        className="m-0 mt-[2.4mm]"
        style={{
          color: "#6E675C",
          fontSize: "7.9pt",
          fontWeight: 500,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
        }}
      >
        Serra, Valencia
      </p>
    </div>
  </article>
);

export default QrCard;

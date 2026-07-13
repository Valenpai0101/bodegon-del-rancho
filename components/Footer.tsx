import { businessInfo } from "@/lib/menu-data";

export function Footer() {
  return (
    <footer className="bg-ink text-paper/70 pt-14 pb-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <img
          src="/images/logo.png"
          alt="El Bodegón del Rancho"
          className="w-16 h-16 rounded-full object-cover mb-5"
        />

        <p className="font-hand text-3xl md:text-4xl text-gold-light mb-6">
          Comer rico es vivir mejor
        </p>

        <div className="divider-dashed w-full max-w-md mb-6" />

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs uppercase tracking-widest text-paper/50 mb-6">
          <span>{businessInfo.address}</span>
          <span>{businessInfo.hours}</span>
          <span>{businessInfo.instagram}</span>
        </div>

        <p className="text-[11px] text-paper/35">
          © {new Date().getFullYear()} {businessInfo.name}. Hecho con cariño en{" "}
          {businessInfo.location}.
        </p>
      </div>
    </footer>
  );
}

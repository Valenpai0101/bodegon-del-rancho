import React from "react";

type IconProps = { className?: string };

const base = "stroke-current fill-none";

export const IconEmpanada = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} strokeWidth="1.6">
    <path className={base} d="M10 30 Q32 8 54 30 Q54 46 32 54 Q10 46 10 30 Z" />
    <path className={base} d="M14 30 Q32 16 50 30" />
    <path className={base} d="M18 24l4 4M24 20l4 4M30 18l4 4M36 20l4 4M42 24l4 4" />
  </svg>
);

export const IconPicada = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} strokeWidth="1.6">
    <rect x="8" y="26" width="48" height="8" rx="1" className={base} />
    <circle cx="18" cy="20" r="5" className={base} />
    <circle cx="32" cy="16" r="6" className={base} />
    <circle cx="46" cy="20" r="5" className={base} />
    <path className={base} d="M14 34l4 12M32 34v14M50 34l-4 12" />
  </svg>
);

export const IconEnsalada = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} strokeWidth="1.6">
    <path className={base} d="M8 32c0 12 10 20 24 20s24-8 24-20" />
    <path className={base} d="M8 32h48" />
    <path className={base} d="M18 32c0-6 3-10 6-14M32 32c0-8 0-12 0-16M46 32c0-6-3-10-6-14" />
  </svg>
);

export const IconSandwich = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} strokeWidth="1.6">
    <path className={base} d="M8 40h48l-6-8H14z" />
    <path className={base} d="M10 40c0 6 4 10 22 10s22-4 22-10" />
    <path className={base} d="M20 32l3-6M32 32l0-7M44 32l-3-6" />
  </svg>
);

export const IconPizza = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} strokeWidth="1.6">
    <path className={base} d="M32 8 58 52H6z" />
    <circle cx="26" cy="30" r="2.4" className="fill-current" />
    <circle cx="36" cy="34" r="2.4" className="fill-current" />
    <circle cx="30" cy="42" r="2.4" className="fill-current" />
    <path className={base} d="M6 52h52" />
  </svg>
);

export const IconSinTacc = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} strokeWidth="1.6">
    <circle cx="32" cy="32" r="22" className={base} />
    <path className={base} d="M14 14l36 36" />
  </svg>
);

export const IconMilanesa = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} strokeWidth="1.6">
    <ellipse cx="32" cy="32" rx="22" ry="16" className={base} />
    <path className={base} d="M14 24c4 2 4 4 0 6M22 18c4 2 4 4 0 6M32 16c4 2 4 4 0 6M42 18c4 2 4 4 0 6M50 24c4 2 4 4 0 6" />
  </svg>
);

export const IconPlato = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} strokeWidth="1.6">
    <circle cx="32" cy="32" r="24" className={base} />
    <circle cx="32" cy="32" r="15" className={base} />
  </svg>
);

export const IconTarta = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} strokeWidth="1.6">
    <path className={base} d="M8 36a24 14 0 0 0 48 0z" />
    <path className={base} d="M8 36a24 14 0 0 1 48 0" />
    <path className={base} d="M14 34l3 8M32 32v10M50 34l-3 8" />
  </svg>
);

export const IconPapas = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} strokeWidth="1.6">
    <path className={base} d="M22 54V22a4 4 0 0 1 8 0v32M34 54V22a4 4 0 0 1 8 0v32" />
    <path className={base} d="M14 54h36" />
  </svg>
);

export const IconWok = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} strokeWidth="1.6">
    <path className={base} d="M6 30c0 12 12 20 26 20s26-8 26-20" />
    <path className={base} d="M56 28l6-4M8 28l-6-4" />
    <path className={base} d="M20 22c3-4 6-6 12-6s9 2 12 6" />
  </svg>
);

export const IconPostre = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} strokeWidth="1.6">
    <path className={base} d="M18 26h28l-4 22a4 4 0 0 1-4 4H26a4 4 0 0 1-4-4z" />
    <path className={base} d="M16 26c0-6 6-10 16-10s16 4 16 10" />
    <path className={base} d="M32 16V8" />
  </svg>
);

export const IconCafe = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} strokeWidth="1.6">
    <path className={base} d="M12 26h32v14a12 12 0 0 1-12 12H24a12 12 0 0 1-12-12z" />
    <path className={base} d="M44 28h6a6 6 0 0 1 0 12h-4" />
    <path className={base} d="M20 18c1-3-1-3 0-6M28 18c1-3-1-3 0-6M36 18c1-3-1-3 0-6" />
  </svg>
);

export const iconMap: Record<string, React.FC<IconProps>> = {
  empanada: IconEmpanada,
  picada: IconPicada,
  ensalada: IconEnsalada,
  sandwich: IconSandwich,
  pizza: IconPizza,
  sintacc: IconSinTacc,
  milanesa: IconMilanesa,
  plato: IconPlato,
  tarta: IconTarta,
  papas: IconPapas,
  wok: IconWok,
  postre: IconPostre,
  cafe: IconCafe,
};

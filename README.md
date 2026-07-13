# El Bodegón del Rancho — Sitio Web

Web oficial de **El Bodegón del Rancho** (Ituzaingó 759, Pilar), construida en
Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion, con la
identidad visual extraída directamente de la carta física del local.

## Cómo correr el proyecto

Requisitos: Node.js 18.18+ (recomendado 20 LTS).

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

Para build de producción:

```bash
npm run build
npm run start
```

## Estructura

```
app/
  layout.tsx        → fuentes (Oswald, Lora, Caveat) + metadata SEO
  page.tsx           → ensambla todas las secciones
  globals.css         → textura papel, ribbons, carved-box (sistema visual)
components/
  Header.tsx          → nav fija + menú mobile
  Hero.tsx            → parallax, overlay, CTAs
  Historia.tsx        → scroll reveal, storytelling
  Carta.tsx            → tabs de categorías (datos reales de la carta)
  Especialidades.tsx  → tarjetas destacadas
  Galeria.tsx          → grid de fotos con hover
  Eventos.tsx          → tipos de eventos
  Reservas.tsx         → formulario → arma mensaje de WhatsApp
  Contacto.tsx          → mapa embebido + datos
  Footer.tsx
  Ribbon.tsx            → elemento "cinta" (signature del diseño)
  Logo.tsx               → logo SVG inspirado en el logo real
  MenuIcons.tsx           → set de iconos lineales estilo grabado
lib/
  menu-data.ts            → TODA la carta transcripta fielmente de la imagen
  utils.ts
```

## Identidad visual (de la carta física a la web)

| Elemento en la carta impresa            | Adaptación web                                   |
|------------------------------------------|---------------------------------------------------|
| Cintas marrones con títulos en mayúscula | Componente `Ribbon` reutilizado como signature en toda la web |
| Fondo papel envejecido                   | Textura de ruido SVG + overlay `mix-blend-multiply` en `globals.css` |
| Ilustraciones lineales monocromáticas    | Set de iconos SVG a mano en `MenuIcons.tsx`        |
| Recuadros con borde grabado (precios)    | Clase utilitaria `.carved-box`                     |
| Logo circular con chef bigotudo          | Recreado en `Logo.tsx` (SVG vectorial, escalable)  |
| Frase manuscrita "Buena comida..."       | Fuente Caveat (`font-hand`), usada en Hero y Footer |
| Paleta cuero / crema / negro             | Tokens Tailwind: `paper`, `cuero`, `ink`, `rust`, `gold` |

## Datos reales del negocio

Todos los platos, precios y categorías fueron transcriptos exactamente de la
carta adjunta (`lib/menu-data.ts`). Si cambian precios o platos, ese es el
único archivo que hay que editar — toda la UI se actualiza sola.

## Personalizar imágenes

Las imágenes de Hero / Historia / Especialidades / Galería usan fotos de stock
de Unsplash como placeholder. Para producción, reemplazá las URLs en
`Hero.tsx`, `Historia.tsx`, `Especialidades.tsx` y `Galeria.tsx` por fotos
reales del local, del salón y de los platos — eso va a subir muchísimo la
sensación de autenticidad.

## Reservas

El formulario de reservas no usa backend: arma un mensaje prellenado y abre
WhatsApp (`wa.me`) con el número de contacto. Si en el futuro querés guardar
las reservas en una base de datos, se puede conectar fácil a una API route de
Next.js.

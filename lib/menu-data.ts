export interface MenuItem {
  name: string;
  desc?: string;
  price?: string; // some items have two prices (individual/grande)
  priceGrande?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  icon: string; // key into IconSet
  items: MenuItem[];
  note?: string;
}

export const menuData: MenuCategory[] = [
  {
    id: "entradas",
    title: "Entradas",
    icon: "empanada",
    items: [
      { name: "Tortilla", desc: "papa o verdura", price: "$8.000" },
      { name: "Tortilla de papa", desc: "napolitana", price: "$9.000" },
      { name: "Papas fritas", desc: "con cheddar y bacon", price: "$10.100" },
      { name: "Papas fritas", desc: "con cheddar", price: "$8.100" },
      { name: "Rabas", price: "$20.000" },
      {
        name: "Empanadas",
        desc: "fritas o al horno · carne, jamón y queso, caprese, verdura, pollo, atún, roquefort, queso y cebolla",
        price: "$2.200",
      },
    ],
  },
  {
    id: "picadas",
    title: "Picadas",
    icon: "picada",
    items: [
      {
        name: "Picada clásica",
        desc: "quesos, jamón, salame, lecopino, morcilla, fritas o aros de cebolla, pepinillos y aceitunas",
        price: "$24.000",
      },
      {
        name: "Combo cervecero",
        desc: "queso, jamón y salame en cubos, maní, papas fritas, chorizos parrilleros",
        price: "$20.000",
      },
    ],
  },
  {
    id: "ensaladas",
    title: "Ensaladas",
    icon: "ensalada",
    items: [
      { name: "César", desc: "lechuga, pollo, parmesano, salsa césar", price: "$9.700" },
      {
        name: "La Tuta",
        desc: "6 ingredientes a elección · rúcula, lechuga, zanahoria, tomate, apio, huevo, choclo, hojas, remolacha, frutos secos, zanahoria, cúrcuma, remolacha, aceitunas, queso, etc.",
        price: "$10.500",
      },
    ],
  },
  {
    id: "sandwich",
    title: "Sándwich",
    icon: "sandwich",
    items: [
      { name: "Jamón crudo", desc: "rúcula, queso y tomate", price: "$7.500" },
      { name: "Pollo", desc: "palta, tomate, rúcula y queso crema", price: "$11.000" },
      {
        name: "Milanesa suprema",
        desc: "completa · jamón, queso, lechuga, tomate y huevo",
        price: "$13.100",
      },
      {
        name: "Lomito completo",
        desc: "jamón, queso, lechuga, tomate y huevo",
        price: "$14.800",
      },
    ],
  },
  {
    id: "pizzas",
    title: "Pizzas",
    icon: "pizza",
    note: "Individual 4 porciones · Grande 8 porciones",
    items: [
      { name: "Muzzarella", price: "$8.800", priceGrande: "$11.100" },
      { name: "Jamón y morrón", price: "$7.200", priceGrande: "$14.100" },
      { name: "Jamón y huevo", price: "$7.200", priceGrande: "$13.100" },
      { name: "Tuccazeta", price: "$7.200", priceGrande: "$14.800" },
      { name: "Crudo y rúcula", price: "$8.800", priceGrande: "$17.200" },
      { name: "Roquefort", price: "$8.700", priceGrande: "$17.200" },
      { name: "Napolitana", price: "$7.000", priceGrande: "$13.100" },
      { name: "Jamón y palmito", price: "$8.200", priceGrande: "$13.600" },
      { name: "Calabresa", price: "$8.600", priceGrande: "$14.100" },
      { name: "Empanadas", desc: "fritas o al horno", price: "$2.200" },
      { name: "Dolceza", price: "$26.000" },
    ],
  },
  {
    id: "sin-tacc",
    title: "Platos sin TACC",
    icon: "sintacc",
    items: [
      { name: "Empanadas", desc: "verdura, carne y jamón y queso", price: "$4.000" },
      { name: "Pizza individual", price: "$10.600" },
      { name: "Ravioles de verdura", price: "$14.000" },
      { name: "Ravioles de jamón y queso", price: "$14.000" },
      { name: "Ñoquis", price: "$13.000" },
      { name: "Sorrentinos", price: "$13.000" },
      { name: "Tallarines", price: "$11.500" },
      { name: "Tostado árabe", price: "$9.100" },
      { name: "Sándwich de miga", price: "$9.600" },
      { name: "Cuadrados dulces", price: "$10.000" },
    ],
  },
  {
    id: "minutas",
    title: "Minutas",
    icon: "milanesa",
    items: [
      { name: "Milanesa de ternera", price: "$12.100" },
      { name: "Milanesa napolitana", price: "$13.200" },
      { name: "Milanesa a caballo", price: "$13.200" },
      { name: "Suprema de pollo", price: "$11.600" },
      { name: "Suprema de pollo napolitana", price: "$13.200" },
      { name: "Omelette", desc: "jamón y queso o verdura", price: "$8.020" },
      { name: "Pechuga grill", price: "$15.100" },
      { name: "Revuelto de granja", price: "$7.200" },
    ],
  },
  {
    id: "platos",
    title: "Nuestros Platos",
    icon: "plato",
    items: [
      { name: "Matambre a la pizza", price: "$20.800" },
      { name: "Bife de chorizo", price: "$19.200" },
      { name: "Lomo al champignon", price: "$21.300" },
    ],
  },
  {
    id: "tartas",
    title: "Tartas",
    icon: "tarta",
    items: [
      {
        name: "Tarta individual",
        desc: "jamón y queso, calabaza y acelga y queso, aceituna y queso, zapallito, puerro, cebolla y queso, caprese y pollo",
        price: "$9.800",
      },
    ],
  },
  {
    id: "guarniciones",
    title: "Guarniciones",
    icon: "papas",
    items: [
      { name: "Papas o batatas fritas", price: "$3.900" },
      { name: "Papas fritas con cheddar", price: "$5.500" },
      { name: "Puré", desc: "papa, calabaza o batata", price: "$3.500" },
      { name: "Ensalada 3 gustos", price: "$3.500" },
    ],
  },
  {
    id: "wok",
    title: "Wok",
    icon: "wok",
    note: "Viene con arroz",
    items: [
      { name: "De vegetales", price: "$12.800" },
      { name: "De pollo, arroz y verduras", price: "$13.900" },
      { name: "De lomo, arroz y verduras", price: "$14.800" },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    icon: "postre",
    items: [
      { name: "Flan casero o budín de pan", desc: "con dulce o crema", price: "$5.800" },
      { name: "Ensalada de frutas", price: "$6.800" },
      { name: "Queso y dulce", price: "$5.400" },
      { name: "Panqueques con dulce de leche", desc: "vienen dos unidades", price: "$7.100" },
    ],
  },
  {
    id: "cafeteria",
    title: "Cafetería",
    icon: "cafe",
    items: [
      { name: "Café / Cortado", price: "$2.700" },
      { name: "Jarrito", price: "$3.300" },
      { name: "Café con leche", price: "$4.000" },
      { name: "Té", desc: "sabores variados", price: "$3.300" },
      { name: "Jugo de multifruta", price: "$4.900" },
      { name: "Licuado de banana", price: "$4.900" },
      { name: "Exprimido de naranja", price: "$4.800" },
      { name: "Limonada", desc: "limón o menta y lima", price: "$5.000" },
      {
        name: "Combo desayuno o merienda",
        desc: "café con leche + 2 medialunas, tostadas, manteca y dulce",
        price: "$7.500",
      },
      {
        name: "Combo saludable",
        desc: "jugo de naranja + yogurt, frutas, tostadas, queso y dulce",
        price: "$9.200",
      },
      { name: "Tostadas", desc: "con queso crema y palta", price: "$6.100" },
      { name: "Tostadas con huevo", desc: "revueltos y semillas", price: "$6.400" },
      { name: "Medialunas", price: "$1.400" },
      { name: "Medialunas con jamón y queso", price: "$1.400" },
      { name: "Tostado de jamón y queso", desc: "pan de miga o árabe", price: "$6.100" },
    ],
  },
];

export const specialties = [
  {
    name: "Matambre a la Pizza",
    desc: "Nuestra bandera. Matambre tierno cubierto de salsa, muzzarella derretida y orégano, como manda la tradición del bodegón.",
    price: "$20.800",
  },
  {
    name: "Picada Clásica",
    desc: "Para compartir en familia. Quesos, fiambres, morcilla y papas fritas — la mesa completa en una tabla.",
    price: "$24.000",
  },
  {
    name: "Bife de Chorizo",
    desc: "A la parrilla, a punto, con la guarnición que elijas. Carne argentina en su máxima expresión.",
    price: "$19.200",
  },
  {
    name: "Empanadas de la Casa",
    desc: "Fritas o al horno. Carne, jamón y queso, caprese, verdura, pollo, atún, roquefort — la receta de siempre.",
    price: "$2.200",
  },
];

export const businessInfo = {
  name: "El Bodegón del Rancho",
  location: "Pilar",
  address: "Ituzaingó 759, Pilar",
  instagram: "@elbodegondelrancho",
  phone: "11 3583-2135",
  phoneHref: "5491135832135",
  hours: "Lunes a Sábados · 09:00 a 23:00 hs",
};

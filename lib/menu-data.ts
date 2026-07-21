export interface MenuItem {
  name: string;
  desc?: string;
  price?: string;
  priceGrande?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  icon: string;
  items: MenuItem[];
  note?: string;
}

export const menuData: MenuCategory[] = [
  {
    id: "entradas",
    title: "Entradas",
    icon: "entradas",
    items: [
      { name: "Tortilla", desc: "papa o verdura", price: "$8.000" },
      { name: "Tortilla de papa", desc: "napolitana", price: "$9.500" },
      { name: "Papas fritas", desc: "con cheddar", price: "$9.100" },
      { name: "Papas fritas", desc: "con cheddar y bacon", price: "$10.100" },
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
    icon: "picadas",
    items: [
      {
        name: "Picada clásica",
        desc: "para 2 personas · quesos, jamón, salame, longaniza, mortadela, cruda, aceitunas, cherry, roquefort y papas fritas",
        price: "$24.000",
      },
      {
        name: "Combo cervecero",
        desc: "para 2 personas · quesos, jamón y salame en cubos, maní, papas fritas, cherry, aceitunas",
        price: "$18.500",
      },
    ],
  },
  {
    id: "ensaladas",
    title: "Ensaladas",
    icon: "ensaladas",
    items: [
      { name: "César", desc: "lechuga, repollo o atún, parmesano y salsa césar", price: "$9.700" },
      {
        name: "La Tuya",
        desc: "5 ingredientes a elección · rúcula, lechuga, zanahoria, tomate, apio, huevo, choclo, papa, remolacha, fideos, atún, lentejas, garbanzos, kanikamas, aceitunas negras",
        price: "$10.500",
      },
    ],
  },
  {
    id: "sandwich",
    title: "Sándwich",
    icon: "sandwich",
    items: [
      { name: "Clásico", desc: "jamón, queso y tomate", price: "$6.100" },
      { name: "Jamón crudo", desc: "rúcula, queso y tomate", price: "$7.500" },
      { name: "Pollo", desc: "palta, tomate, rúcula y queso crema", price: "$11.000" },
      {
        name: "Milanesa o suprema completa",
        desc: "jamón, queso, lechuga, tomate y huevo",
        price: "$11.000",
      },
      {
        name: "Lomito completo",
        desc: "jamón, queso, lechuga, tomate y huevo",
        price: "$14.500",
      },
    ],
  },
  {
    id: "pizzas",
    title: "Pizzas",
    icon: "pizzas",
    note: "Individual 4 porciones · Grande 8 porciones",
    items: [
      { name: "Muzzarella", price: "$5.800", priceGrande: "$11.300" },
      { name: "Jamón y morrón", price: "$7.200", priceGrande: "$14.100" },
      { name: "Jamón y huevo", price: "$7.200", priceGrande: "$13.900" },
      { name: "Fugazzeta", price: "$7.200", priceGrande: "$14.200" },
      { name: "Crudo y rúcula", price: "$8.800", priceGrande: "$17.200" },
      { name: "Roquefort", price: "$8.700", priceGrande: "$17.200" },
      { name: "Napolitana", price: "$7.000", priceGrande: "$13.900" },
      { name: "Jamón y palmito", price: "$8.300", priceGrande: "$15.900" },
      { name: "Calabresa", price: "$7.600", priceGrande: "$14.900" },
      { name: "Empanadas", desc: "fritas o al horno", price: "$2.200" },
      {
        name: "Docena de empanadas",
        desc: "carne, jamón y queso, caprese, verdura, pollo, atún, roquefort, queso y cebolla",
        price: "$25.000",
      },
    ],
  },
  {
    id: "pastas",
    title: "Pastas",
    icon: "pastas",
    note: "Salsas a elección: fileto, crema, parissiene, rosa, mixta, bolognesa, blanca o champignon",
    items: [
      { name: "Tallarines", price: "$9.800" },
      { name: "Sorrentinos", desc: "jamón y muzzarella", price: "$10.800" },
      { name: "Ravioles", desc: "verdura", price: "$10.800" },
      { name: "Ñoquis", price: "$9.800" },
    ],
  },
  {
    id: "wok",
    title: "Wok",
    icon: "wok",
    note: "Viene con arroz",
    items: [
      { name: "De vegetales", price: "$12.500" },
      { name: "De pollo, arroz y verduras", price: "$13.500" },
      { name: "De lomo, arroz y verduras", price: "$15.500" },
    ],
  },
  {
    id: "hamburguesas",
    title: "Hamburguesas",
    icon: "hamburguesas",
    note: "Incluye fritas",
    items: [
      { name: "Sola", price: "$9.100" },
      { name: "Jamón, queso y huevo", price: "$9.800" },
      { name: "Lechuga, tomate y huevo", price: "$9.800" },
      { name: "Completa", desc: "jamón, queso, huevo, lechuga, tomate", price: "$10.500" },
      { name: "Americana", desc: "cheddar, panceta y cebolla caramelizada", price: "$11.000" },
    ],
  },
  {
    id: "sin-tacc",
    title: "Platos sin TACC",
    icon: "sintacc",
    items: [
      { name: "Empanadas", desc: "verdura, carne y jamón y queso", price: "$4.000" },
      { name: "Pizza individual", price: "$10.500" },
      { name: "Ravioles de verdura", price: "$14.000" },
      { name: "Ravioles de jamón y queso", price: "$14.000" },
      { name: "Sorrentinos", price: "$15.000" },
      { name: "Tallarines", price: "$11.500" },
      { name: "Tostado árabe", price: "$9.500" },
      { name: "Cuadrados dulces", price: "$10.000" },
    ],
  },
  {
    id: "minutas",
    title: "Minutas",
    icon: "minutas",
    note: "Cada plato incluye guarnición a elección",
    items: [
      { name: "Milanesa de ternera", price: "$12.100" },
      { name: "Milanesa napolitana", price: "$13.200" },
      { name: "Milanesa a caballo", price: "$13.200" },
      { name: "Suprema de pollo", price: "$11.600" },
      { name: "Suprema de pollo napolitana", price: "$13.200" },
      { name: "Omelette", desc: "jamón y queso o verdura", price: "$8.000" },
      { name: "Pechuga grille", price: "$15.100" },
      { name: "Bife vuelto de gramajo", price: "$7.200" },
    ],
  },
  {
    id: "platos",
    title: "Nuestros Platos",
    icon: "platos",
    note: "Cada plato incluye guarnición a elección",
    items: [
      { name: "Matambre a la pizza", price: "$20.800" },
      { name: "Bife de chorizo", price: "$19.200" },
      { name: "Lomo al champignon", price: "$21.300" },
    ],
  },
  {
    id: "guarniciones",
    title: "Guarniciones",
    icon: "guarniciones",
    items: [
      { name: "Papas o batatas fritas", price: "$7.900" },
      { name: "Papas fritas con cheddar", price: "$8.900" },
      { name: "Puré", desc: "papa, calabaza o batata", price: "$5.300" },
      { name: "Ensalada 3 gustos", price: "$5.900" },
    ],
  },
  {
    id: "tartas",
    title: "Tartas",
    icon: "tartas",
    items: [
      {
        name: "Tarta individual",
        desc: "jamón y queso, calabaza, acelga y queso, zapallito, puerro, cebolla y jamón, cebolla y queso, caprese y pollo",
        price: "$9.800",
      },
    ],
  },
  {
    id: "cafeteria",
    title: "Cafetería",
    icon: "cafe",
    items: [
      { name: "Café pocillo", price: "$2.700" },
      { name: "Jarrito", price: "$3.300" },
      { name: "Café con leche", price: "$4.000" },
      { name: "Té", desc: "saborizado", price: "$3.300" },
      { name: "Licuado multifruta", price: "$4.900" },
      { name: "Licuado de banana", price: "$4.900" },
      { name: "Exprimido de naranja", price: "$4.900" },
      { name: "Limonada", desc: "jengibre, menta y lima", price: "$5.000" },
      {
        name: "Combo desayuno o merienda",
        desc: "café con leche, 2 medialunas, jugo de naranja",
        price: "$7.500",
      },
      {
        name: "Combo saludable",
        desc: "jugo de naranja, yogurt, frutas, tostadas, queso y dulce",
        price: "$9.200",
      },
      { name: "Tostadas", desc: "con queso crema y palta", price: "$6.100" },
      { name: "Tostadas con huevo", desc: "revuelto y semillas", price: "$5.600" },
      { name: "Medialunas", price: "$1.400" },
      { name: "Medialunas con jamón y queso", price: "$1.800" },
      { name: "Tostado de jamón y queso", desc: "pan de miga o árabe", price: "$6.100" },
      { name: "Consultar por variedad de dulce" },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    icon: "postres",
    items: [
      { name: "Flan casero o budín de pan", desc: "con dulce o crema", price: "$5.800" },
      { name: "Ensalada de frutas", price: "$3.800" },
      { name: "Queso y dulce", price: "$5.400" },
      { name: "Panqueques con dulce de leche", desc: "vienen dos unidades", price: "$7.100" },
      { name: "Consultar por variedad de helados" },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    icon: "bebidas",
    items: [
      { name: "Agua mineral 500ml", price: "$3.200" },
      { name: "Agua con gas 500ml", price: "$3.200" },
      { name: "Gaseosas 500ml", price: "$3.800" },
      { name: "Powerade 600ml", price: "$4.000" },
      { name: "Agua saborizada 500ml", price: "$3.500" },
      { name: "Gaseosas 1.5 litros", price: "$6.800" },
      { name: "Agua saborizada 1.5 litros", price: "$5.500" },
      { name: "Agua mineral 1.5 litros", price: "$4.200" },
    ],
  },
];

export const specialties = [
  {
    name: "Rabas",
    desc: "Aros de calamar fritos, dorados y crocantes, con limón. Un clásico para arrancar o para picar entre amigos.",
    price: "$20.000",
  },
  {
    name: "Empanadas de la Casa",
    desc: "Fritas o al horno. Carne, jamón y queso, caprese, verdura, pollo, atún, roquefort — la receta de siempre.",
    price: "$2.200",
  },
  {
    name: "Milanesa Napolitana",
    desc: "Con papas fritas. Milanesa jugosa cubierta de salsa, muzzarella derretida y orégano, al estilo de casa.",
    price: "$13.200",
  },
  {
    name: "Flan Casero",
    desc: "Con dulce de leche y crema. El cierre perfecto, como el de la abuela.",
    price: "$5.800",
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

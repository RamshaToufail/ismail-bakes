export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  tag: string;
  image: string;
  description: string;
  servings?: string;
  flavours?: string[];
  highlights?: string[];
  leadTime?: string;
};

export const products: Product[] = [
  {
    id: 'rose-cake',
    name: 'The Rose Garden',
    category: 'Custom cakes',
    price: 6500,
    tag: 'CUSTOM FAVOURITE',
    image: 'photo-1578985545062-69928b1d9587',
    description:
      'Vanilla bean sponge, whipped buttercream and a garden of hand-piped roses.',
    servings: '1.5 – 2 lbs · Serves 8 to 12 celebration guests',
    flavours: [
      'Pure Madagascar Vanilla Bean',
      'Silky Whipped Buttercream',
      'Optional Belgian Chocolate Layer',
    ],
    highlights: [
      'Handcrafted fresh to order',
      'Intricate hand-piped buttercream florals',
      'Custom inscription plaque available',
      'No artificial preservatives',
    ],
    leadTime: 'At least 48 hours notice (3 to 5 days for multi-tier)',
  },
  {
    id: 'strawberry-cupcakes',
    name: 'Strawberry Cloud',
    category: 'Cupcakes',
    price: 1800,
    tag: 'A LITTLE JOY',
    image: 'photo-1486427944299-d1955d23e34d',
    description:
      'Soft vanilla cupcakes crowned with strawberry buttercream.',
    servings: 'Box of 6 gourmet cupcakes (also available in box of 12)',
    flavours: [
      'Tender Vanilla Crumb',
      'Fresh Strawberry Buttercream',
      'Delicate Berry Compote Swirl',
    ],
    highlights: [
      'Baked fresh on the morning of your date',
      'Perfect for tea parties and party favours',
      'Artisanal aesthetic gift packaging',
    ],
    leadTime: 'At least 48 hours notice',
  },
  {
    id: 'chocolate-pops',
    name: 'Midnight Cake Pops',
    category: 'Cake pops',
    price: 1200,
    tag: 'PARTY READY',
    image: 'photo-1576618148400-f54bed99fcfd',
    description:
      'Chocolate cake truffles dipped in a delicate chocolate shell.',
    servings: 'Set of 6 cake truffles on sticks (custom bulk boxes available)',
    flavours: [
      'Fudgy Belgian Chocolate Sponge',
      'Crisp Chocolate Dipping Shell',
      'Artisanal Drizzle & Sprinkles',
    ],
    highlights: [
      'Rich truffle-like texture',
      'Individually wrapped on request',
      'Ideal for dessert tables & party hampers',
    ],
    leadTime: 'At least 48 hours notice',
  },
  {
    id: 'berry-sundae',
    name: 'Berry & Cream Sundae',
    category: 'Sundaes',
    price: 950,
    tag: 'SPOONFUL OF JOY',
    image: 'photo-1563805042-7684c019e1cb',
    description:
      'A layered dessert with seasonal berries, cream and buttery crumbs.',
    servings: 'Individual gourmet dessert cup (custom multi-cup party sets available)',
    flavours: [
      'Golden Shortbread Butter Crumbs',
      'Velvety Fresh Cream Mousse',
      'Seasonal Berry Compote',
    ],
    highlights: [
      'Chilled and ready to serve',
      'Delicate balance of tart berries and rich cream',
      'Aesthetic clear presentation cup',
    ],
    leadTime: 'At least 48 hours notice',
  },
];

export const photo = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const money = (n: number) => `PKR ${n.toLocaleString('en-PK')}`;

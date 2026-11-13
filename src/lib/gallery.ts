import { photo } from '@/lib/products';

export type GalleryItem = {
  id: string;
  title: string;
  category: 'cakes' | 'cupcakes' | 'cake-pops' | 'desserts';
  categoryLabel: string;
  occasion: string;
  image: string;
  description: string;
  servings?: string;
  leadTime?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'rose-garden',
    title: 'The Rose Garden Celebration Cake',
    category: 'cakes',
    categoryLabel: 'Celebration Cakes',
    occasion: 'Birthdays & Bridal Showers',
    image: 'photo-1578985545062-69928b1d9587',
    description:
      'Vanilla bean sponge layered with whipped buttercream, adorned with a lush crown of hand-piped pastel roses.',
    servings: '1.5 – 2 lbs (Serves 8–12 guests)',
    leadTime: '3 to 5 days advance notice',
  },
  {
    id: 'vintage-lambeth',
    title: 'Vintage Lambeth Heart Cake',
    category: 'cakes',
    categoryLabel: 'Celebration Cakes',
    occasion: 'Anniversaries & Milestone Birthdays',
    image: 'photo-1535141192574-5d4897c13136',
    description:
      'Classic Victorian Lambeth over-piping with delicate shell borders, intricate swags, and a custom piped message.',
    servings: '1.5 lbs (Serves 6–10 guests)',
    leadTime: '3 to 5 days advance notice',
  },
  {
    id: 'strawberry-cloud',
    title: 'Strawberry Cloud Cupcakes',
    category: 'cupcakes',
    categoryLabel: 'Gourmet Cupcakes',
    occasion: 'Tea Parties & Favours',
    image: 'photo-1486427944299-d1955d23e34d',
    description:
      'Delicate vanilla cupcakes topped with silky strawberry buttercream swirls and subtle edible pearl accents.',
    servings: 'Gift Box of 6 or 12',
    leadTime: '48 hours advance notice',
  },
  {
    id: 'midnight-pops',
    title: 'Midnight Chocolate Truffle Pops',
    category: 'cake-pops',
    categoryLabel: 'Midnight Cake Pops',
    occasion: 'Kids Parties & Dessert Bars',
    image: 'photo-1576618148400-f54bed99fcfd',
    description:
      'Fudgy Belgian chocolate cake truffles dipped in dark chocolate with gold dust and crisp chocolate drizzle.',
    servings: 'Party Box of 6, 12, or bulk party sets',
    leadTime: '48 hours advance notice',
  },
  {
    id: 'berry-cream-sundae',
    title: 'Berry & Cream Layered Sundae Cups',
    category: 'desserts',
    categoryLabel: 'Dessert Sundaes',
    occasion: 'Intimate Dinners & Event Tables',
    image: 'photo-1563805042-7684c019e1cb',
    description:
      'Golden buttery shortbread crumbs layered with seasonal berry compote and whipped cream mousse.',
    servings: 'Individual chilled cups (sets available)',
    leadTime: '48 hours advance notice',
  },
  {
    id: 'belgian-chocolate-fudge',
    title: 'Belgian Chocolate Ganache Tier',
    category: 'cakes',
    categoryLabel: 'Celebration Cakes',
    occasion: 'Birthdays & Engagements',
    image: 'photo-1606890737304-57a1ca8a5b62',
    description:
      'Decadent chocolate sponge layered with smooth Belgian dark chocolate ganache, topped with gold leaf touches.',
    servings: '2 – 3 lbs (Serves 12–18 guests)',
    leadTime: '3 to 5 days advance notice',
  },
  {
    id: 'floral-buttercream-box',
    title: 'Floral Garden Cupcake Assortment',
    category: 'cupcakes',
    categoryLabel: 'Gourmet Cupcakes',
    occasion: 'Celebration Gifts & Mother’s Day',
    image: 'photo-1587668178277-295251f900ce',
    description:
      'Each cupcake is uniquely piped as a blooming botanical garden with hand-crafted buttercream petals.',
    servings: 'Artisanal Gift Box of 6 or 12',
    leadTime: '48 hours advance notice',
  },
  {
    id: 'mini-dessert-spread',
    title: 'Party Dessert Table Trio',
    category: 'desserts',
    categoryLabel: 'Dessert Sundaes',
    occasion: 'Family Celebrations & Gatherings',
    image: 'photo-1551024709-8f23befc6f87',
    description:
      'A curated display combining mini dessert shooters, cake pops, and cupcakes for celebrations in Rawalpindi.',
    servings: 'Custom party counts',
    leadTime: '3 to 5 days advance notice',
  },
];

export const galleryPhoto = (id: string, w = 900) => photo(id, w);

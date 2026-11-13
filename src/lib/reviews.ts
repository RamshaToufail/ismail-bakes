export type CustomerReview = {
  id: string;
  quote: string;
  author: string;
  location: string;
  occasion: string;
  creation: string;
  rating: number;
};

export const verifiedReviews: CustomerReview[] = [
  {
    id: 'review-1',
    quote:
      'The Rose Garden cake was the absolute highlight of my sister’s birthday dinner. It was just as delicious as it was stunning—rich, moist, and not overly sweet!',
    author: 'Ayesha K.',
    location: 'Westridge, Rawalpindi',
    occasion: 'Birthday Celebration',
    creation: 'The Rose Garden Celebration Cake',
    rating: 5,
  },
  {
    id: 'review-2',
    quote:
      'The strawberry cupcakes were so soft and the whipped buttercream was perfection. Discussing our requirements through Instagram was super warm and seamless.',
    author: 'Bilal M.',
    location: 'Range Road, Rawalpindi',
    occasion: 'Family Gathering',
    creation: 'Strawberry Cloud Cupcakes',
    rating: 5,
  },
  {
    id: 'review-3',
    quote:
      'Hands down the best cake pops in Rawalpindi. The kids adored them at the party, and the aesthetic packaging made everything feel so thoughtfully done.',
    author: 'Zainab S.',
    location: 'Afshan Colony, Rawalpindi',
    occasion: 'Party Dessert Table',
    creation: 'Midnight Chocolate Truffle Pops',
    rating: 5,
  },
];

export interface MenuItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  text: string;
  author: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  url: string;
  span: string; // Tailwind grid span
}

export const CAFE_INFO = {
  name: 'The Cafe 45',
  tagline: 'Good Food. Good Mood.',
  subheading: 'A cozy place in Bareilly for coffee, pizzas, burgers and casual bites.',
  aboutHeading: 'A Place Made for Good Moments',
  aboutBody1:
    'Located near the Choupla Over Bridge on City Station Road, The Cafe 45 is a relaxed hangout in Bareilly where good food and warm company come together.',
  aboutBody2:
    'From our freshly brewed cold coffee and wood-fired pizzas to hearty stacked burgers and savory parcels, our kitchen prepares comforting café classics for easy afternoons and relaxed evening meals with friends and family.',
  locationShort: 'Bareilly, Uttar Pradesh',
  fullAddress: '9C35+792, City Station Road, Choupla Over Bridge, Bareilly, Uttar Pradesh 243003',
  phone: '089231 77788',
  phoneTel: 'tel:08923177788',
  phoneDisplay: '+91 89231 77788',
  googleRating: '4.0',
  reviewCount: '261',
  typicalPrice: '₹1–1,200 per person',
  googleMapsUrl: 'https://share.google/0Kk4pAMYYSxak9KcN',
  hours: [
    { days: 'Monday – Sunday', hours: '11:00 AM – 11:00 PM' },
  ],
};

export const SIGNATURE_MENU: MenuItem[] = [
  {
    id: 'zingy-parcel',
    name: 'Non Veg Zingy Parcel',
    tagline: 'Golden-baked puff pastry folded over seasoned, savory spiced chicken filling.',
    category: 'Casual Bites',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    tagline: 'Creamy, thick chilled coffee poured over ice cubes with a rich roasted aroma.',
    category: 'Coffee & Drinks',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'honey-chilli-potato',
    name: 'Honey Chilli Potato',
    tagline: 'Crispy fried potato fingers tossed in a sticky sweet chilli glaze with toasted sesame.',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'veg-tower-burger',
    name: 'Veg Tower Burger',
    tagline: 'Crisp vegetable patty stacked with garden greens, ripe tomatoes, and house dressing on a toasted bun.',
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'pizza-party',
    name: 'Pizza Party',
    tagline: 'Hand-stretched crust layered with seasoned pizza sauce, melted mozzarella, and fresh vegetable toppings.',
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80',
  },
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: 'review-1',
    text: 'Good food for eat and dinning pizza offers',
    author: 'Verified Diner',
    rating: 4,
    date: 'Google Local Guide',
    verified: true,
  },
  {
    id: 'review-2',
    text: 'Ordered chowmein, gave burnt tasteless food',
    author: 'Bareilly Resident',
    rating: 2,
    date: 'Google Reviewer',
    verified: true,
  },
  {
    id: 'review-3',
    text: 'Best service 😍 Yummy food 😋 🥰🥰',
    author: 'Happy Guest',
    rating: 5,
    date: 'Google Local Guide',
    verified: true,
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Warm Café Interior',
    category: 'Atmosphere',
    url: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80',
    span: 'col-span-12 md:col-span-7 row-span-2',
  },
  {
    id: 'gal-2',
    title: 'Freshly Brewed Coffee & Espresso',
    category: 'Beverage',
    url: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=900&q=80',
    span: 'col-span-12 md:col-span-5 row-span-1',
  },
  {
    id: 'gal-3',
    title: 'Handcrafted Wood-Fired Pizza',
    category: 'Kitchen',
    url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80',
    span: 'col-span-12 md:col-span-5 row-span-1',
  },
  {
    id: 'gal-4',
    title: 'Crispy Gourmet Burger Stack',
    category: 'Casual Bites',
    url: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=80',
    span: 'col-span-12 md:col-span-4 row-span-1',
  },
  {
    id: 'gal-5',
    title: 'Casual Seating & Evening Vibes',
    category: 'Dining',
    url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80',
    span: 'col-span-12 md:col-span-4 row-span-1',
  },
  {
    id: 'gal-6',
    title: 'Chilled Refreshments & Frappés',
    category: 'Drinks',
    url: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80',
    span: 'col-span-12 md:col-span-4 row-span-1',
  },
];

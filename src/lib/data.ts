export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "Cakes" | "Pastries" | "Snacks" | "Beverages" | "Specials";
  imageId: string;
};

export type SpecialItem = {
  id: number;
  name: string;
  description: string;
  imageId: string;
};

export type Testimonial = {
  id: number;
  name: string;
  review: string;
  rating: number;
  imageId: string;
};

export const menuItems: MenuItem[] = [
  { id: 1, name: "Chocolate Truffle", description: "A rich and decadent chocolate cake, perfect for any celebration.", price: 650, category: "Cakes", imageId: "menu-1" },
  { id: 2, name: "Red Velvet Cake", description: "Classic red velvet with a smooth cream cheese frosting.", price: 750, category: "Cakes", imageId: "menu-2" },
  { id: 3, name: "Fresh Fruit Cake", description: "A light sponge cake topped with seasonal fresh fruits.", price: 800, category: "Cakes", imageId: "menu-3" },
  { id: 4, name: "Blueberry Cheesecake", description: "Creamy cheesecake with a tangy blueberry topping.", price: 900, category: "Cakes", imageId: "menu-4" },
  { id: 5, name: "Chocolate Croissant", description: "Flaky, buttery croissant filled with rich dark chocolate.", price: 150, category: "Pastries", imageId: "menu-5" },
  { id: 6, name: "Almond Tart", description: "A delicate tart with a frangipane filling and sliced almonds.", price: 200, category: "Pastries", imageId: "menu-6" },
  { id: 7, "name": "Macarons (Box of 6)", "description": "Assortment of delicate French macarons in various flavors.", "price": 300, "category": "Pastries", "imageId": "menu-7" },
  { id: 8, name: "Veg Puff", description: "Crispy puff pastry filled with a savory mixed vegetable filling.", price: 80, category: "Snacks", imageId: "menu-8" },
  { id: 9, name: "Paneer Tikka Sandwich", description: "Grilled sandwich with a spicy paneer tikka filling.", price: 180, category: "Snacks", imageId: "menu-9" },
  { id: 10, name: "Cappuccino", description: "Espresso with steamed milk foam, a timeless classic.", price: 160, category: "Beverages", imageId: "menu-10" },
  { id: 11, name: "Iced Latte", description: "Chilled espresso with milk, perfect for a warm day.", price: 180, category: "Beverages", imageId: "menu-11" },
  { id: 12, name: "Designer Birthday Cake", description: "Customized cakes for your special occasions. Price on request.", price: 2500, category: "Specials", imageId: "menu-12" },
];

export const specials: SpecialItem[] = [
  { id: 1, name: "Red Velvet Cake", description: "Our most loved cake, known for its vibrant color and delicious taste.", imageId: "specials-1" },
  { id: 2, name: "Chocolate Truffle", description: "Indulge in pure chocolate bliss with this rich and moist truffle cake.", imageId: "specials-2" },
  { id: 3, name: "Fresh Fruit Cake", description: "A refreshing and light cake, loaded with exotic seasonal fruits.", imageId: "specials-3" },
  { id: 4, name: "Designer Birthday Cakes", description: "Make your celebration unforgettable with a custom-designed cake.", imageId: "specials-4" },
];

export const testimonials: Testimonial[] = [
  { id: 1, name: "Anjali P.", review: "The best cakes in Nashik! The red velvet is to die for. The ambiance is so cozy and perfect for a quiet evening.", rating: 5, imageId: "testimonial-1" },
  { id: 2, name: "Rohan K.", review: "I ordered a custom birthday cake, and it was a masterpiece. Looked amazing and tasted even better. Highly recommended!", rating: 5, imageId: "testimonial-2" },
  { id: 3, name: "Priya S.", review: "A lovely place to hang out. Their coffee and snacks are great. The staff is very friendly and welcoming.", rating: 4, imageId: "testimonial-3" },
  { id: 4, name: "Vikram G.", review: "The quality of their pastries is top-notch. You can taste the freshness in every bite. A true gem in the city.", rating: 5, imageId: "testimonial-4" },
  { id: 5, name: "Sunita M.", review: "I'm a regular here. The consistency in taste and service is commendable. It's my go-to place for desserts.", rating: 5, imageId: "testimonial-5" },
];

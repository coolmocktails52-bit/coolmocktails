export interface Mocktail {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  category: "Tropical" | "Botanical" | "Spicy" | "Citrus" | "Dessert" | "Mystical";

  // SEO & UX
  prepTime: string;
  difficulty: "Apprentice" | "Alchemist" | "Grandmaster" | "Beginner" | "Adept" | "Master";
  glassware: string;
  calories: number;
  flavorNotes: string[];
  garnish: string;

  // Visuals & Content
  color: string;
  image: string;
  ingredients: string[];
  method: string;

  // ✅ NEW FIELDS
  dateToPublish: string; // ISO date string
  comments: {
    id: number;
    author: string;
    message: string;
    createdAt: string;
  }[];
}

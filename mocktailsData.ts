export interface Mocktail {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  category: "Tropical" | "Botanical" | "Spicy" | "Citrus" | "Dessert" | "Mystical"; // Added explicit categories
  color: string;
  image: string;
  ingredients: string[];
  method: string;
}

export const MOCKTAILS: Mocktail[] = [
  {
    id: 1,
    name: "The Enchanted Fog",
    subtitle: "A Potion of Invisibility",
    description: "A mystical blend of zero-proof Gin and rosemary smoke.",
    category: "Mystical",
    color: "#7c3aed",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400",
    ingredients: ["2oz Zero-Proof Gin", "1oz Blackberry Syrup", "Rosemary Sprig"],
    method: "Muddle blackberries, shake with ice, and garnish with torched rosemary."
  },
  {
    id: 2,
    name: "Golden Elixir",
    subtitle: "Liquid Sunlight",
    description: "Turmeric-infused citrus with a sparkle of ginger beer.",
    category: "Citrus",
    color: "#ca8a04",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400",
    ingredients: ["3oz Pineapple Juice", "0.5oz Ginger Syrup", "Pinch of Turmeric"],
    method: "Shake citrus and syrup, top with sparkling water and a gold leaf garnish."
  },
  {
    id: 3,
    name: "Midnight Eclipse",
    subtitle: "Shadow in a Glass",
    description: "Activated charcoal meets tart cherry and botanical essence.",
    category: "Botanical",
    color: "#1e1b4b",
    image: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?w=400",
    ingredients: ["2oz Tart Cherry Juice", "1/4 tsp Activated Charcoal", "Sage Leaf"],
    method: "Whisk charcoal into juice, shake with ice, and serve in a chilled coupe."
  },
  {
    id: 4,
    name: "Serpent's Venom",
    subtitle: "A Dangerous Sweetness",
    description: "Spiced hibiscus tea with a stinging lime-jalapeño kick.",
    category: "Spicy",
    color: "#b91c1c",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400",
    ingredients: ["3oz Hibiscus Tea", "1 Sliced Jalapeño", "Agave Nectar"],
    method: "Steep hibiscus with jalapeño, sweeten with agave, and serve over crystal ice."
  },
  {
    id: 5,
    name: "Astral Drift",
    subtitle: "Stardust & Sea Foam",
    description: "Blueberry-infused lavender tonic topped with salted foam.",
    category: "Mystical",
    color: "#0369a1",
    image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=400",
    ingredients: ["1oz Lavender Syrup", "Butterfly Pea Tea", "Sea Salt"],
    method: "Layer the tea over tonic for a color-shift; finish with a foam cap."
  },
  {
    id: 6,
    name: "Phoenix Breath",
    subtitle: "The Fire Tincture",
    description: "Smoked paprika and blood orange juice for a revitalizing warmth.",
    category: "Spicy",
    color: "#ea580c",
    image: "https://images.unsplash.com/photo-1621263764490-344429bf2461?w=400",
    ingredients: ["4oz Blood Orange Juice", "Smoked Paprika Rim", "Chilled Espresso Shot"],
    method: "Rim the glass with spice, shake juice with ice, and float espresso on top."
  },
  {
    id: 7,
    name: "Emerald Omen",
    subtitle: "Visions of the Forest",
    description: "A dense, herbal infusion of matcha, mint, and cucumber water.",
    category: "Botanical",
    color: "#166534",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400",
    ingredients: ["1 tsp Ceremonial Matcha", "Fresh Mint", "Cucumber Essence"],
    method: "Whisk matcha into cold cucumber water, muddle mint, and double strain."
  },
  {
    id: 8,
    name: "The Alchemist's Rose",
    subtitle: "Eternal Bloom",
    description: "Delicate rose water paired with white grape and lychee.",
    category: "Botanical",
    color: "#db2777",
    image: "https://images.unsplash.com/photo-1582731252123-95638927843e?w=400",
    ingredients: ["2oz White Grape Juice", "1/2 tsp Rose Water", "Peeled Lychee"],
    method: "Stir gently with ice, garnish with a single dried rosebud."
  },
  {
    id: 9,
    name: "Desert Mirage",
    subtitle: "Sands of Time",
    description: "Cardamom-spiced pear nectar with a hint of toasted oak.",
    category: "Spicy",
    color: "#92400e",
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=400",
    ingredients: ["3oz Pear Nectar", "2 Cardamom Pods", "Vanilla Bean"],
    method: "Simmer pear nectar with spices, cool, and serve in a heavy crystal glass."
  },
  {
    id: 10,
    name: "Frozen Ether",
    subtitle: "A Chill from the Void",
    description: "A crisp, crystalline blend of elderflower and white cranberry.",
    category: "Citrus",
    color: "#38bdf8",
    image: "https://images.unsplash.com/photo-1453824979084-c8fd42932378?w=400",
    ingredients: ["2oz White Cranberry Juice", "1oz Elderflower Syrup", "Frozen Grapes"],
    method: "Shake until ice cold and serve in a glass rinsed with menthol spray."
  }
];
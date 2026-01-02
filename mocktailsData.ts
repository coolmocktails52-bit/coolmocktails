export interface Mocktail {
  comments: any;
  id: number;
  name: string;
  subtitle: string;
  description: string;
  category: "Tropical" | "Botanical" | "Spicy" | "Citrus" | "Dessert" | "Mystical";
  // Powerful Fields for SEO & UX
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
}


export const MOCKTAILS: Mocktail[] = [
  {
    id: 1,
    name: "The Enchanted Fog",
    subtitle: "A Potion of Invisibility",
    description: "A mystical blend of zero-proof Gin and rosemary smoke.",
    category: "Mystical",
    prepTime: "8 min",
    difficulty: "Alchemist",
    glassware: "Crystal Coupe",
    calories: 45,
    flavorNotes: ["Smoky", "Herbal", "Deep"],
    garnish: "Torched Rosemary Sprig",
    color: "#7c3aed",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400",
    ingredients: ["2oz Zero-Proof Gin", "1oz Blackberry Syrup", "Rosemary Sprig"],
    method: "Muddle blackberries in a shaker, add gin and ice. Shake vigorously and double strain into a chilled coupe. Light a rosemary sprig until smoking and place atop the glass."
  },
  {
    id: 2,
    name: "Golden Elixir",
    subtitle: "Liquid Sunlight",
    description: "Turmeric-infused citrus with a sparkle of ginger beer.",
    category: "Citrus",
    prepTime: "5 min",
    difficulty: "Apprentice",
    glassware: "Highball Glass",
    calories: 85,
    flavorNotes: ["Bright", "Zesty", "Sparkling"],
    garnish: "Dehydrated Pineapple & Gold Leaf",
    color: "#ca8a04",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400",
    ingredients: ["3oz Pineapple Juice", "0.5oz Ginger Syrup", "Pinch of Turmeric"],
    method: "Combine pineapple juice, syrup, and turmeric in a shaker with ice. Shake briefly to chill. Strain into a highball glass filled with fresh ice and top with sparkling water."
  },
  {
    id: 3,
    name: "Midnight Eclipse",
    subtitle: "Shadow in a Glass",
    description: "Activated charcoal meets tart cherry and botanical essence.",
    category: "Botanical",
    prepTime: "6 min",
    difficulty: "Alchemist",
    glassware: "Nick & Nora",
    calories: 60,
    flavorNotes: ["Tart", "Earthy", "Bold"],
    garnish: "Single Silver-dusted Sage Leaf",
    color: "#1e1b4b",
    image: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?w=400",
    ingredients: ["2oz Tart Cherry Juice", "1/4 tsp Activated Charcoal", "Sage Leaf"],
    method: "Whisk the charcoal into the cherry juice until fully dissolved. Shake with ice and a bruised sage leaf. Double strain into a chilled glass for a deep, dark finish."
  },
  {
    id: 4,
    name: "Serpent's Venom",
    subtitle: "A Dangerous Sweetness",
    description: "Spiced hibiscus tea with a stinging lime-jalapeño kick.",
    category: "Spicy",
    prepTime: "12 min",
    difficulty: "Grandmaster",
    glassware: "Rocks Glass",
    calories: 55,
    flavorNotes: ["Spicy", "Floral", "Acidic"],
    garnish: "Black Salt Rim & Jalapeño Wheel",
    color: "#b91c1c",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400",
    ingredients: ["3oz Hibiscus Tea", "1 Sliced Jalapeño", "Agave Nectar"],
    method: "Steep hibiscus tea with jalapeño slices for 10 minutes. Strain and chill. Shake with agave and lime juice. Serve over a single large ice cube in a salt-rimmed glass."
  },
  {
    id: 5,
    name: "Astral Drift",
    subtitle: "Stardust & Sea Foam",
    description: "Blueberry-infused lavender tonic topped with salted foam.",
    category: "Mystical",
    prepTime: "10 min",
    difficulty: "Grandmaster",
    glassware: "Tall Collins",
    calories: 70,
    flavorNotes: ["Sweet", "Salty", "Floral"],
    garnish: "Edible Violet Flowers",
    color: "#0369a1",
    image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=400",
    ingredients: ["1oz Lavender Syrup", "Butterfly Pea Tea", "Sea Salt"],
    method: "Build the lavender syrup and tonic over ice. Slowly pour the Butterfly Pea tea over a bar spoon to create a purple-to-blue gradient. Top with a pinch of sea salt foam."
  },
  {
    id: 6,
    name: "Phoenix Breath",
    subtitle: "The Fire Tincture",
    description: "Smoked paprika and blood orange juice for a revitalizing warmth.",
    category: "Spicy",
    prepTime: "7 min",
    difficulty: "Alchemist",
    glassware: "Stemless Wine Glass",
    calories: 95,
    flavorNotes: ["Smoky", "Citrus", "Warm"],
    garnish: "Burnt Orange Peel",
    color: "#ea580c",
    image: "https://images.unsplash.com/photo-1621263764490-344429bf2461?w=400",
    ingredients: ["4oz Blood Orange Juice", "Smoked Paprika Rim", "Chilled Espresso Shot"],
    method: "Rim the glass with a mixture of sugar and smoked paprika. Shake juice and ice, pour into glass, and gently float a cold espresso shot on top for a 'rising sun' effect."
  },
  {
    id: 7,
    name: "Emerald Omen",
    subtitle: "Visions of the Forest",
    description: "A dense, herbal infusion of matcha, mint, and cucumber water.",
    category: "Botanical",
    prepTime: "5 min",
    difficulty: "Apprentice",
    glassware: "Tall Tumbler",
    calories: 40,
    flavorNotes: ["Clean", "Grassy", "Cooling"],
    garnish: "Cucumber Ribbon & Mint Bouquet",
    color: "#166534",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400",
    ingredients: ["1 tsp Ceremonial Matcha", "Fresh Mint", "Cucumber Essence"],
    method: "Whisk matcha with a small amount of warm water to create a paste, then thin with cold cucumber-infused water. Muddle mint in the glass, add ice, and pour the matcha over."
  },
  {
    id: 8,
    name: "The Alchemist's Rose",
    subtitle: "Eternal Bloom",
    description: "Delicate rose water paired with white grape and lychee.",
    category: "Botanical",
    prepTime: "4 min",
    difficulty: "Apprentice",
    glassware: "Vintage Goblet",
    calories: 110,
    flavorNotes: ["Sweet", "Perfumed", "Elegant"],
    garnish: "Dried Rosebuds",
    color: "#db2777",
    image: "https://images.unsplash.com/photo-1582731252123-95638927843e?w=400",
    ingredients: ["2oz White Grape Juice", "1/2 tsp Rose Water", "Peeled Lychee"],
    method: "Stir all ingredients gently in a mixing glass with plenty of ice. Strain into a goblet and drop in a single lychee to represent the heart of the bloom."
  },
  {
    id: 9,
    name: "Desert Mirage",
    subtitle: "Sands of Time",
    description: "Cardamom-spiced pear nectar with a hint of toasted oak.",
    category: "Spicy",
    prepTime: "15 min",
    difficulty: "Grandmaster",
    glassware: "Heavy Crystal Rocks",
    calories: 120,
    flavorNotes: ["Woody", "Spiced", "Rich"],
    garnish: "Cinnamon Stick & Star Anise",
    color: "#92400e",
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=400",
    ingredients: ["3oz Pear Nectar", "2 Cardamom Pods", "Vanilla Bean"],
    method: "Lightly toast cardamom pods in a pan before muddling. Simmer pear nectar with vanilla and cardamom for 5 mins. Cool completely, then stir with ice and strain into a glass."
  },
  {
    id: 10,
    name: "Frozen Ether",
    subtitle: "A Chill from the Void",
    description: "A crisp, crystalline blend of elderflower and white cranberry.",
    category: "Citrus",
    prepTime: "3 min",
    difficulty: "Apprentice",
    glassware: "Frosted Martini Glass",
    calories: 75,
    flavorNotes: ["Cold", "Crisp", "Floral"],
    garnish: "Frozen White Grapes",
    color: "#38bdf8",
    image: "https://images.unsplash.com/photo-1453824979084-c8fd42932378?w=400",
    ingredients: ["2oz White Cranberry Juice", "1oz Elderflower Syrup", "Frozen Grapes"],
    method: "Shake elderflower syrup and cranberry juice with crushed ice until the shaker frosts over. Strain into a pre-frozen glass and add frozen grapes for a sustained chill."
  }
];
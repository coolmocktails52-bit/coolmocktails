export interface Mocktail {
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
  dateToPublish :string;
  comments : {
    id : number,
    author : string,
    message : string,
    createdAt : string
  }[]
}


export const MOCKTAILS: Mocktail[] = [
  {
    "id": 1,
    "name": "The Enchanted Fog",
    "subtitle": "A Potion of Invisibility",
    "description": "A mystical blend of zero-proof gin and rosemary smoke.",
    "category": "Mystical",
    "prepTime": "8 min",
    "difficulty": "Alchemist",
    "glassware": "Crystal Coupe",
    "calories": 45,
    "flavorNotes": [
      "Smoky",
      "Herbal",
      "Deep"
    ],
    "garnish": "Torched Rosemary Sprig",
    "color": "#7c3aed",
    "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400",
    "ingredients": [
      "2oz Zero-Proof Gin",
      "1oz Blackberry Syrup",
      "Rosemary Sprig"
    ],
    "method": "Shake gin and syrup with ice, double strain, and infuse with rosemary smoke.",
    "dateToPublish": "2025-01-01T00:00:00.000Z",
    "comments": [
      {
        "id": 1767146402813,
        "author": "John Doe",
        "message": "This mocktail is amazing 🔥",
        "createdAt": "2025-12-31T02:00:02.813Z"
      }
    ]
  },
  {
    "id": 2,
    "name": "Golden Elixir",
    "subtitle": "Liquid Sunlight",
    "description": "Turmeric-infused citrus with ginger sparkle.",
    "category": "Citrus",
    "prepTime": "5 min",
    "difficulty": "Apprentice",
    "glassware": "Highball Glass",
    "calories": 85,
    "flavorNotes": [
      "Bright",
      "Zesty",
      "Sparkling"
    ],
    "garnish": "Dehydrated Pineapple",
    "color": "#ca8a04",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400",
    "ingredients": [
      "Pineapple Juice",
      "Ginger Syrup",
      "Turmeric"
    ],
    "method": "Shake ingredients lightly and top with sparkling water.",
    "dateToPublish": "2025-01-02T00:00:00.000Z",
    "comments": [
      {
        "id": 1767146866685,
        "author": "Anonymous Alchemist",
        "message": "fsfsdfdsfds",
        "createdAt": "2025-12-31T02:07:46.685Z"
      }
    ]
  },
  {
    "id": 3,
    "name": "Midnight Eclipse",
    "subtitle": "Shadow in a Glass",
    "description": "Activated charcoal with tart cherry depth.",
    "category": "Botanical",
    "prepTime": "6 min",
    "difficulty": "Alchemist",
    "glassware": "Nick & Nora",
    "calories": 60,
    "flavorNotes": [
      "Tart",
      "Earthy",
      "Bold"
    ],
    "garnish": "Sage Leaf",
    "color": "#1e1b4b",
    "image": "https://images.unsplash.com/photo-1544145945-f904253d0c7b?w=400",
    "ingredients": [
      "Tart Cherry Juice",
      "Activated Charcoal",
      "Sage"
    ],
    "method": "Shake well and double strain into a chilled glass.",
    "dateToPublish": "2025-01-03T00:00:00.000Z",
    "comments": []
  },
  {
    "id": 4,
    "name": "Serpent's Venom",
    "subtitle": "A Dangerous Sweetness",
    "description": "Hibiscus tea with jalapeño heat.",
    "category": "Spicy",
    "prepTime": "12 min",
    "difficulty": "Grandmaster",
    "glassware": "Rocks Glass",
    "calories": 55,
    "flavorNotes": [
      "Spicy",
      "Floral",
      "Acidic"
    ],
    "garnish": "Jalapeño Wheel",
    "color": "#b91c1c",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400",
    "ingredients": [
      "Hibiscus Tea",
      "Jalapeño",
      "Agave"
    ],
    "method": "Infuse tea with jalapeño, chill, shake, and strain.",
    "dateToPublish": "2025-01-04T00:00:00.000Z",
    "comments": []
  },
  {
    "id": 5,
    "name": "Astral Drift",
    "subtitle": "Stardust & Sea Foam",
    "description": "Lavender tonic with salted foam.",
    "category": "Mystical",
    "prepTime": "10 min",
    "difficulty": "Grandmaster",
    "glassware": "Tall Collins",
    "calories": 70,
    "flavorNotes": [
      "Sweet",
      "Salty",
      "Floral"
    ],
    "garnish": "Edible Violet",
    "color": "#0369a1",
    "image": "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=400",
    "ingredients": [
      "Lavender Syrup",
      "Tonic Water",
      "Sea Salt Foam"
    ],
    "method": "Build over ice and top gently with foam.",
    "dateToPublish": "2025-01-05T00:00:00.000Z",
    "comments": []
  },
  {
    "id": 6,
    "name": "Phoenix Breath",
    "subtitle": "The Fire Tincture",
    "description": "Blood orange warmth with smoked paprika.",
    "category": "Spicy",
    "prepTime": "7 min",
    "difficulty": "Alchemist",
    "glassware": "Stemless Wine Glass",
    "calories": 95,
    "flavorNotes": [
      "Smoky",
      "Citrus",
      "Warm"
    ],
    "garnish": "Burnt Orange Peel",
    "color": "#ea580c",
    "image": "https://images.unsplash.com/photo-1621263764490-344429bf2461?w=400",
    "ingredients": [
      "Blood Orange Juice",
      "Smoked Paprika",
      "Espresso"
    ],
    "method": "Shake juice and float espresso on top.",
    "dateToPublish": "2025-01-06T00:00:00.000Z",
    "comments": []
  },
  {
    "id": 7,
    "name": "Emerald Omen",
    "subtitle": "Visions of the Forest",
    "description": "Matcha, mint, and cucumber infusion.",
    "category": "Botanical",
    "prepTime": "5 min",
    "difficulty": "Apprentice",
    "glassware": "Tall Tumbler",
    "calories": 40,
    "flavorNotes": [
      "Clean",
      "Grassy",
      "Cooling"
    ],
    "garnish": "Mint Bouquet",
    "color": "#166534",
    "image": "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400",
    "ingredients": [
      "Matcha",
      "Mint",
      "Cucumber Water"
    ],
    "method": "Whisk matcha and pour over mint and ice.",
    "dateToPublish": "2025-01-07T00:00:00.000Z",
    "comments": []
  },
  {
    "id": 8,
    "name": "The Alchemist's Rose",
    "subtitle": "Eternal Bloom",
    "description": "Rose water with lychee and grape.",
    "category": "Botanical",
    "prepTime": "4 min",
    "difficulty": "Apprentice",
    "glassware": "Vintage Goblet",
    "calories": 110,
    "flavorNotes": [
      "Sweet",
      "Perfumed",
      "Elegant"
    ],
    "garnish": "Dried Rosebuds",
    "color": "#db2777",
    "image": "https://images.unsplash.com/photo-1582731252123-95638927843e?w=400",
    "ingredients": [
      "White Grape Juice",
      "Rose Water",
      "Lychee"
    ],
    "method": "Stir gently and strain into goblet.",
    "dateToPublish": "2025-01-08T00:00:00.000Z",
    "comments": []
  },
  {
    "id": 9,
    "name": "Desert Mirage",
    "subtitle": "Sands of Time",
    "description": "Spiced pear nectar with cardamom.",
    "category": "Spicy",
    "prepTime": "15 min",
    "difficulty": "Grandmaster",
    "glassware": "Crystal Rocks",
    "calories": 120,
    "flavorNotes": [
      "Woody",
      "Spiced",
      "Rich"
    ],
    "garnish": "Star Anise",
    "color": "#92400e",
    "image": "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=400",
    "ingredients": [
      "Pear Nectar",
      "Cardamom",
      "Vanilla"
    ],
    "method": "Simmer spices, cool, and stir over ice.",
    "dateToPublish": "2025-01-09T00:00:00.000Z",
    "comments": []
  },
  {
    "id": 10,
    "name": "Frozen Ether",
    "subtitle": "A Chill from the Void",
    "description": "Elderflower and white cranberry frost.",
    "category": "Citrus",
    "prepTime": "3 min",
    "difficulty": "Apprentice",
    "glassware": "Frosted Martini Glass",
    "calories": 75,
    "flavorNotes": [
      "Cold",
      "Crisp",
      "Floral"
    ],
    "garnish": "Frozen Grapes",
    "color": "#38bdf8",
    "image": "https://images.unsplash.com/photo-1453824979084-c8fd42932378?w=400",
    "ingredients": [
      "White Cranberry Juice",
      "Elderflower Syrup",
      "Ice"
    ],
    "method": "Shake hard with ice and strain into frozen glass.",
    "dateToPublish": "2025-01-10T00:00:00.000Z",
    "comments": []
  },
  {
    "id": 1767146561469,
    "name": "Crystal Breeze",
    "subtitle": "",
    "description": "A refreshing mint-citrus mocktail",
    "category": "Citrus",
    "prepTime": "5 min",
    "difficulty": "Beginner",
    "glassware": "",
    "calories": 0,
    "flavorNotes": [],
    "garnish": "",
    "color": "#000000",
    "image": "",
    "ingredients": [
      "Mint",
      "Lime",
      "Sparkling Water"
    ],
    "method": "Muddle mint, add lime juice, top with sparkling water",
    "dateToPublish": "2025-12-31T02:02:41.469Z",
    "comments": []
  }
]
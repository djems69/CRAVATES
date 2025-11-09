// Données des produits
const products = [
  {
    id: 1,
    name: "T-shirt Peinture Floral",
    category: "tshirts-sweats",
    price: 45,
    unique: false,
    images: [
      "images/tshirt1-1.jpg",
      "images/tshirt1-2.jpg",
      "images/tshirt1-3.jpg"
    ],
    description: "T-shirt en coton bio personnalisé avec une peinture florale unique.",
    stock: {
      "XS": 2,
      "S": 5,
      "M": 8,
      "L": 6,
      "XL": 3
    }
  },
  {
    id: 2,
    name: "Sweat à Capuche Abstrait",
    category: "tshirts-sweats",
    price: 65,
    unique: false,
    images: [
      "images/sweat1-2.jpg",
      "images/sweat1-1.jpg"
    ],
    description: "Sweat à capuche confortable avec design abstrait original.",
    stock: {
      "S": 3,
      "M": 4,
      "L": 2,
      "XL": 1
    }
  },
  {
    id: 3,
    name: "Cravate noire effet satiné",
    category: "cravates",
    price: 40,
    unique: false,
    images: [
      "images/cravate1-1.jpg",
      "images/cravate1-2.jpg",
      "images/cravate1-3.jpg"
    ],
    description: "Cravate noire effet satiné, pièce unique avec peinture originale.",
    stock: {
      "Unique": 1
    }
  },
  {
    id: 4,
    name: "Cravate vert kaki effet satiné",
    category: "cravates",
    price: 40,
    unique: false,
    images: [
      "images/cravate2-1.jpg",
      "images/cravate2-2.jpg",
      "images/cravate2-3.jpg"
    ],
    description: "Cravate élégante avec motif contemporain, disponible en plusieurs exemplaires.",
    stock: {
      "Standard": 5
    }
  },
  {
    id: 5,
    name: "Cravate vert kaki effet satiné",
    category: "cravates",
    price: 40,
    unique: true,
    images: [
      "images/cravate3-1.jpg",
      "images/cravate3-2.jpg",
      "images/cravate3-3.jpg"
    ],
    description: "Cravate vert kaki effet satiné, pièce unique avec peinture originale.",
    stock: {
      "Unique": 1
    }
  },
  {
    id: 6,
    name: "Sweat à Capuche",
    category: "tshirts-sweats",
    price: 65,
    unique: false,
    images: [
      "images/sweat2-1.jpg",
      "images/sweat2-2.jpg"
    ],
    description: "Sweat à capuche personnalisé avec peinture originale.",
    stock: {
      "S": 3,
      "M": 4,
      "L": 2,
      "XL": 1
    }
  }
];

const categories = [
  {
    slug: "tshirts-sweats",
    name: "T-shirts & Sweats à Capuche",
    description: "Découvrez notre collection de t-shirts et sweats à capuche personnalisés"
  },
  {
    slug: "cravates",
    name: "Cravates",
    description: "L'art au cou : Démarquez-vous avec une cravate née d'une toile de peinture Tany'Art, ainsi que des modèles uniques ornés de bijoux et accessoires pour un style audacieux et personnalisé."
  }
];


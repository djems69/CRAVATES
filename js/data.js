// Données des produits
const products = [
  {
    id: 1,
    name: "T-shirt Tany'Art noir",
    category: "tshirts-sweats",
    price: 30,
    unique: false,
    images: [
      "images/tshirt1-1.jpg",
      "images/tshirt1-2.jpg"
    ],
    description: "T-shirt floqué d'une oeuvre originale de l'artiste.",
    stock: {
      "XS": 0,
      "S": 0,
      "M": 0,
      "L": 0,
      "XL": 0
    }
  },
  {
    id: 21,
    name: "T-shirt Tany'Art noir(2)",
    category: "tshirts-sweats",
    price: 30,
    unique: false,
    images: [
      "images/tshirt2-1.jpg",
      "images/tshirt2-2.jpg"
    ],
    description: "T-shirt floqué d'une oeuvre originale de l'artiste.",
    stock: {
      "XS": 0,
      "S": 5,
      "M": 0,
      "L": 0,
      "XL": 0
    }
  },
  {
    id: 22,
    name: "T-shirt Tany'Art blanc",
    category: "tshirts-sweats",
    price: 30,
    unique: false,
    images: [
      "images/tshirt3-1.jpg",
      "images/tshirt2-2.jpg"
    ],
    description: "T-shirt floqué d'une oeuvre originale de l'artiste.",
    stock: {
      "XS": 0,
      "S": 0,
      "M": 0,
      "L": 5,
      "XL": 0
    }
  },
  {
    id: 23,
    name: "T-shirt Tany'Art noir(3)",
    category: "tshirts-sweats",
    price: 30,
    unique: false,
    images: [
      "images/tshirt4-1.jpg",
      "images/tshirt4-2.jpg"
    ],
    description: "T-shirt floqué d'une oeuvre originale de l'artiste.",
    stock: {
      "XS": 0,
      "S": 0,
      "M": 0,
      "L": 5,
      "XL": 0
    }
  },
  {
    id: 24,
    name: "T-shirt Tany'Art noir(4)",
    category: "tshirts-sweats",
    price: 30,
    unique: false,
    images: [
      "images/tshirt5-1.jpg"
    ],
    description: "T-shirt floqué d'une oeuvre originale de l'artiste.",
    stock: {
      "XS": 0,
      "S": 5,
      "M": 0,
      "L": 0,
      "XL": 0
    }
  },
  {
    id: 25,
    name: "T-shirt Tany'Art noir(5)",
    category: "tshirts-sweats",
    price: 30,
    unique: false,
    images: [
      "images/tshirt6-1.jpg"
    ],
    description: "T-shirt floqué d'une oeuvre originale de l'artiste.",
    stock: {
      "XS": 0,
      "S": 5,
      "M": 0,
      "L": 0,
      "XL": 0
    }
  },
  {
    id: 24,
    name: "T-shirt Tany'Art rose",
    category: "tshirts-sweats",
    price: 30,
    unique: false,
    images: [
      "images/tshirt7-1.jpg"
    ],
    description: "T-shirt floqué d'une oeuvre originale de l'artiste.",
    stock: {
      "XS": 0,
      "S": 5,
      "M": 0,
      "L": 0,
      "XL": 0
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
      "images/sweat1-1.jpg",
      "images/sweat1-3.jpg"
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
    name: "Cravate Tany'Art noir effet satiné",
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
    id: 7,
    name: "Cravate bleu marine effet satiné",
    category: "cravates",
    price: 40,
    unique: true,
    images: [
      "images/cravate4-1.jpg",
      "images/cravate4-2.jpg",
      "images/cravate4-3.jpg"
    ],
    description: "Cravate vert kaki effet satiné, pièce unique avec peinture originale.",
    stock: {
      "Unique": 1
    }
  },
  {
    id: 8,
    name: "Cravate Tany'Art effet satiné",
    category: "cravates",
    price: 50,
    unique: true,
    images: [
      "images/cravate5-1.jpg",
      "images/cravate5-2.jpg",
      "images/cravate5-3.jpg",
      "images/cravate5-4.jpg"
    ],
    description: "Cravate vert kaki effet satiné, pièce unique avec peinture originale.",
    stock: {
      "Unique": 1
    }
  },
  {
    id: 9,
    name: "Cravate Tany'Art effet satiné",
    category: "cravates",
    price: 50,
    unique: true,
    images: [
      "images/cravate6-1.jpg",
      "images/cravate6-2.jpg",
      "images/cravate6-3.jpg",
      "images/cravate6-4.jpg"
    ],
    description: "Cravate vert kaki effet satiné, pièce unique avec peinture originale.",
    stock: {
      "Unique": 1
    }
  },
  {
    id: 10,
    name: "Cravate Tany'Art effet satiné",
    category: "cravates",
    price: 50,
    unique: true,
    images: [
      "images/cravate7-1.jpg",
      "images/cravate7-2.jpg",
      "images/cravate7-3.jpg"
    ],
    description: "Cravate vert kaki effet satiné, pièce unique avec peinture originale.",
    stock: {
      "Unique": 1
    }
  },
  {
    id: 11,
    name: "Cravate Tany'Art effet satiné",
    category: "cravates",
    price: 50,
    unique: true,
    images: [
      "images/cravate8-1.jpg",
      "images/cravate8-2.jpg",
      "images/cravate8-3.jpg"
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
    description: "Quand l'Art se fait vetement: Découvrez nos sweats a capuche avec flocage d'une oeuvre originale au dos ainsi que nos tshirts floqués a l'avant. L'alliance du confort et de l'art pour un style qui ne passe pas inaperçu!"
  },
  {
    slug: "cravates",
    name: "Cravates",
    description: "L'art au cou : Démarquez-vous avec une cravate née d'une toile de peinture Tany'Art, ainsi que des modèles uniques ornés de bijoux et accessoires pour un style audacieux et personnalisé."
  }
];


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
    name: "Cravate noire<br>effet satiné",
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
      "images/cravate5-3.jpg"
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
    description: "Artiste peintre et portraitiste autodidacte, j'ai toujours rêvé de créer ma propre collection de vêtements. Aujourd'hui, ce rêve se concrétise avec Tany'Art. Pour commencer, je vous propose des cravates, des t-shirts et des sweats à capuche, chacun étant une œuvre d'art issue de mes toiles. Mais ce n'est pas tout ! Vous aimez sortir du lot, avoir l'exclusivité et une pièce unique ? Je souhaite également créer une ligne de vêtements uniques, des pièces exclusives, un seul modèle de chaque, afin que chacun puisse se sentir spécial et unique grâce à mon art. En tant que styliste autodidacte de ma propre collection, je sélectionne avec soin les tissus et les accessoires. La confection est confiée à une modéliste. Je vous invite à découvrir ma collection, qui sera prochainement enrichie de nouvelles créations ! Je serais ravie de vous compter parmi mes clients et de partager cette aventure créative avec vous !"
  },
  {
    slug: "cravates",
    name: "Cravates",
    description: "L'art au cou : Démarquez-vous avec une cravate née d'une toile de peinture Tany'Art, ainsi que des modèles uniques ornés de bijoux et accessoires pour un style audacieux et personnalisé."
  }
];


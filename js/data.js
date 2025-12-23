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
    name: "T-shirt Tany'Art noir",
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
      "S": 1,
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
      "L": 1,
      "XL": 0
    }
  },
  {
    id: 23,
    name: "T-shirt Tany'Art noir",
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
      "L": 1,
      "XL": 0
    }
  },
  {
    id: 24,
    name: "T-shirt Tany'Art noir",
    category: "tshirts-sweats",
    price: 30,
    unique: false,
    images: [
      "images/tshirt5-1.jpg"
    ],
    description: "T-shirt floqué d'une oeuvre originale de l'artiste.",
    stock: {
      "XS": 0,
      "S": 0,
      "M": 0,
      "L": 1,
      "XL": 0
    }
  },
  {
    id: 25,
    name: "T-shirt Tany'Art noir",
    category: "tshirts-sweats",
    price: 30,
    unique: false,
    images: [
      "images/tshirt6-1.jpg"
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
    id: 26,
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
      "S": 0,
      "M": 0,
      "L": 0,
      "XL": 0
    }
  },
  {
    id: 2,
    name: "Sweat à Capuche Abstrait",
    category: "tshirts-sweats",
    price: 45,
    unique: false,
    images: [
      "images/sweat1-2.jpg",
      "images/sweat1-1.jpg",
      "images/sweat1-3.jpg"
    ],
    description: "Sweat à capuche confortable avec design abstrait original.",
    stock: {
      "S": 0,
      "M": 0,
      "L": 0,
      "XL": 0
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
    unique: false,
    images: [
      "images/cravate3-1.jpg",
      "images/cravate3-2.jpg",
      "images/cravate3-3.jpg"
    ],
    description: "Cravate vert kaki effet satiné, pièce unique avec peinture originale.",
    stock: {
      "Standard": 1
    }
  },
  {
    id: 7,
    name: "Cravate bleu marine effet satiné",
    category: "cravates",
    price: 40,
    unique: false,
    images: [
      "images/cravate4-1.jpg",
      "images/cravate4-2.jpg",
      "images/cravate4-3.jpg"
    ],
    description: "Cravate vert kaki effet satiné, pièce unique avec peinture originale.",
    stock: {
      "Standard": 1
    }
  },
  {
    id: 8,
    name: "Cravate Tany'Art effet satiné",
    category: "cravates",
    price: 50,
    unique: false,
    images: [
      "images/cravate5-1.jpg",
      "images/cravate5-2.jpg",
      "images/cravate5-3.jpg",
      "images/cravate5-4.jpg"
    ],
    description: "Cravate vert kaki effet satiné, pièce unique avec peinture originale.",
    stock: {
      "Standard": 3
    }
  },
  {
    id: 9,
    name: "Cravate Tany'Art effet satiné",
    category: "cravates",
    price: 40,
    unique: false,
    images: [
      "images/cravate6-1.jpg",
      "images/cravate6-2.jpg",
      "images/cravate6-3.jpg",
      "images/cravate6-4.jpg"
    ],
    description: "Cravate vert kaki effet satiné, pièce unique avec peinture originale.",
    stock: {
      "Standard": 1
    }
  },
  {
    id: 10,
    name: "Cravate Tany'Art effet satiné",
    category: "cravates",
    price: 50,
    unique: false,
    images: [
      "images/cravate7-1.jpg",
      "images/cravate7-2.jpg",
      "images/cravate7-3.jpg"
    ],
    description: "Cravate vert kaki effet satiné, pièce unique avec peinture originale.",
    stock: {
      "Standard": 1
    }
  },
  {
    id: 11,
    name: "Cravate Tany'Art effet satiné",
    category: "cravates",
    price: 50,
    unique: false,
    images: [
      "images/cravate8-1.jpg",
      "images/cravate8-2.jpg",
      "images/cravate8-3.jpg"
    ],
    description: "Cravate vert kaki effet satiné, pièce unique avec peinture originale.",
    stock: {
      "Standard": 1
    }
  },
  {
    id: 34,
    name: "Blazer modèle unique avec coupe asymetrique",
    category: "pieces-uniques",
    price: 120,
    unique: true,
    images: [
      "images/unique1-1.jpg",
      "images/unique1-2.jpg",
      "images/unique1-3.jpg",
      "images/unique1-4.jpg",
      "images/unique1-5.jpg"
    ],
    description: "Ce blazer a été pensé pour vous offrir une allure a la fois sophistiquée et audacieuse. Conçu pour celles qui aiment se démarquer. Taille 38",
    stock: {
      "Unique": 1
    }
  },
  {
    id: 31,
    name: "Sublime robe de soirée longue",
    category: "pieces-uniques",
    price: 90,
    unique: true,
    images: [
      "images/unique2-1.jpg",
      "images/unique2-2.jpg",
      "images/unique2-3.jpg"
    ],
    description: "Modèle unique au design moderne et audacieux. Sa coupe asymétrique et ses jeux de matières apportent une allure élégante, glamour et résolument chic. Coupe près du corps qui sublime la silouhette. Détails brillants raffinés. Style haute élégance. Idéal pour une soirée d'exception! Une robe rare et unique, parfaite pour un gala, une cérémonie, un évènement chic ou une soirée habillée. Elle attire le regard et garantie une allure élégante et raffinée. Taille 38",
    stock: {
      "Unique": 1
    }
  },
  {
    id: 30,
    name: "Sublime robe de soirée longue modèle unique",
    category: "pieces-uniques",
    price: 300,
    unique: true,
    images: [
      "images/unique3-1.jpg",
      "images/unique3-2.jpg",
      "images/unique3-3.jpg",
      "images/unique3-4.jpg",
      "images/unique3-5.jpg"
    ],
    description: "Idéal pour un Evénement Chic, mariage, gala ,soirée élégante ou cérémonie. Sa coupe près du corps met parfaitement la silhouette en valeur, tandis que les détails raffinés apportent une touche de Glamour et d'Originalité. Décolleté travaillé avec transparence délicate. Dos élégant et sophistiqué. Détails brillants et finitions soignées. Tissu  agréable à porter. Une Robe Rare et Unique que vous ne verrez sur personne d'autre ! Parfaite pour se démarquer avec classe et assurance !",
    stock: {
      "Unique": 0,
    }
  },
  {
    id: 32,
    name: "Blazer noir asymétrique exceptionnel!",
    category: "pieces-uniques",
    price: 90,
    unique: true,
    images: [
      "images/unique4-1.jpg",
      "images/unique4-2.jpg",
      "images/unique4-3.jpg"
    ],
    description: "Les épaulettes structurées affirment votre allure avec élégance. Ornée de franges argentées scintillantes à une épaule et d'une broche décorative raffinée sur la poitrine. Fabriqué à partir de matériaux de haute qualité. Ne passez pas à coté de cette pièce d'exception qui sublime votre garde-robe!",
    stock: {
      "Unique": 0
    }
  },
  {
    id: 33,
    name: "Blazer miroir",
    category: "pieces-uniques",
    price: 90,
    unique: true,
    images: [
      "images/unique5-1.jpg",
      "images/unique5-2.jpg",
      "images/unique5-3.jpg"
    ],
    description: "Osez l'éclat avec ce blazer unique en son genre. Ce blazer noir élégant est réhaussé d'une manche ornée de triangles de miroirs scintillants, capturant la lumière et les regards à chaque mouvement. Un blazer noir en velours, classique, revisité avec une touche d'audace. Les triangles de miroirs sont soigneusement disposés sur une seule manche pour un effet spectaculaire! Pièce de collection : un vetement rare qui ne manquera pas de faire tourner les tetes!",
    stock: {  
      "Unique": 0
    }
  },
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
  },
  {
    slug: "pieces-uniques",
    name: "Pieces Uniques",
    description: "Des créations exclusives et uniques, chacune portant la signature artistique de Tany'Art."
  }
];


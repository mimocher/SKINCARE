import retinol from './retinol.webp';
import ur from './urepear.webp';
import filler from './filler.webp';
import aha from './aha.webp';
import sal from './sal.webp';
import eu from './eu.webp';
import prot from './prot.webp';
import hh from './hh.webp';
import mask from './mask.webp';
import milky from './milky.webp';
import bos from './bos.jpeg';
import pink from './pink.webp';
import pads from './pads.webp';
import night from './night.jpg';
import wash from './wash.jpg';
import cee from './cee.webp';
import acne from './acne.jpg';
import z from './z.webp';
import api from './api.webp';
import althea from './althea.webp';
import red from './red.webp';
import cetaphil from './cetaphil.webp';
import prot1 from './prot1.webp';




export const initialProducts = [
  {
    id: 1,
    name: "Niacinamide 10% + Zinc 1%",
    description: "Sérum pour pores dilatés et brillance",
    price: 185.00,
    category: "Sérums",
    image: "https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw6f4b5f2c/Images/products/The%20Ordinary/rdn-niacinamide-10pct-zinc-1pct-30ml.png"
  },
  {
    id: 2,
    name: "Hyaluronic Acid 2% + B5",
    description: "Sérum hydratant intensif",
    price: 195.00,
    category: "Hydratation",
    image: "https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw8e0b7b4e/Images/products/The%20Ordinary/rdn-hyaluronic-acid-2pct-b5-30ml.png"
  },
  {
    id: 3,
    name: "Retinol 0.5% in Squalane",
    description: "Sérum anti-âge au rétinol",
    price: 240.00,
    category: "Anti-âge",
    image: retinol
  },
  {
    id: 4,
    name: "AHA 30% + BHA 2% Peeling Solution",
    description: "Masque peeling aux acides",
    price: 320.00,
    category: "Masques",
    image: aha
  },
  {
    id: 5,
    name: "Salicylic Acid 2% Masque",
    description: "Masque purifiant anti-imperfections",
    price: 300.00,
    category: "Masques",
    image: sal
  },

  // Eucerin - Soins Spécialisés
  {
    id: 6,
    name: "Eucerin UreaRepair PLUS 10%",
    description: "Crème hydratante intensive à l'urée",
    price: 290.00,
    category: "Hydratation",
    image: ur
  },
  {
    id: 7,
    name: "Eucerin Hyaluron-Filler Jour",
    description: "Crème anti-rides à l'acide hyaluronique",
    price: 420.00,
    category: "Anti-âge",
    image: filler
  },
  {
    id: 8,
    name: "Eucerin Dermatopic",
    description: "Crème apaisante peaux sensibles",
    price: 350.00,
    category: "Sensibles",
    image: eu
  },
  {
    id: 9,
    name: "Eucerin Sun Protection",
    description: "Crème solaire SPF 50+ fluide",
    price: 310.00,
    category: "Protection",
    image: prot
  },

  // Dr. Althea - Soins Coréens
  {
    id: 10,
    name: "Dr. Althea 345 Relief Gel",
    description: "Gel apaisant 345 sérum concentré",
    price: 520.00,
    category: "Soins",
    image: hh
  },
  {
    id: 11,
    name: "Dr. Althea Resveratrol 345",
    description: "Sérum anti-oxydant revitalisant",
    price: 580.00,
    category: "Sérums",
    image: hh
  },
  {
    id: 12,
    name: "Dr. Althea Brightening Mask",
    description: "Masque éclaircissant aux peptides",
    price: 450.00,
    category: "Masques",
    image: mask
  },
  {
    id: 13,
    name: "The ordinary milky toner",
    description: "Crème nutritive barrière hydrolipidique",
    price: 490.00,
    category: "Hydratation",
    image: milky
  },

  // Medicube - Appareils & Soins
  {
    id: 14,
    name: "Medicube Pink Peptide Serum",
    description: "Sérum boosteur d'absorption",
    price: 650.00,
    category: "Sérums",
    image: pink
  },
  {
    id: 15,
    name: "Medicube Deep Shot",
    description: "Sérum pénétration profonde",
    price: 720.00,
    category: "Sérums",
    image: pads},
  {
    id: 16,
    name: "Medicube Super Cica Cream",
    description: "Crème réparatrice au cica",
    price: 380.00,
    category: "Soins",
    image: night},
  {
    id: 17,
    name: "Medicube Airstouch Device",
    description: "Appareil de soin à air pulsé",
    price: 1850.00,
    category: "Appareils",
    image: bos },

  // Cetaphil - Doux & Sensibles
  {
    id: 18,
    name: "Cetaphil Gentle Skin Cleanser",
    description: "Nettoyant doux sans savon",
    price: 220.00,
    category: "Nettoyage",
    image: wash
  },
  {
    id: 19,
    name: "Cetaphil Moisturizing Lotion",
    description: "Lotion hydratante 24h",
    price: 280.00,
    category: "Hydratation",
    image: cee
  },
  {
    id: 20,
    name: "Cetaphil Pro Acne Prone",
    description: "Soin hydratant peaux à imperfections",
    price: 310.00,
    category: "Soins",
    image: acne
  },
  {
    id: 21,
    name: "Cetaphil Sun SPF 50+",
    description: "Fluide solaire matifiant",
    price: 340.00,
    category: "Protection",
    image: prot1
  },

  // Soins Spéciaux
  {
    id: 22,
    name: "The Ordinary Azelaic Acid 10%",
    description: "Suspension éclaircissante et unifiante",
    price: 210.00,
    category: "Traitements",
    image:z
  },
  {
    id: 23,
    name: "Eucerin AtopiControl",
    description: "Baume apaisant peau atopique",
    price: 360.00,
    category: "Sensibles",
    image: api
  },
  {
    id: 24,
    name: "Dr. Althea Petal Velvet Sun",
    description: "Crème solaire teintée SPF 50+",
    price: 510.00,
    category: "Protection",
    image: althea},
  {
    id: 25,
    name: "Medicube Red Erasing Cream",
    description: "Crème correctrice rougeurs",
    price: 420.00,
    category: "Soins",
    image: red
  },
  {
    id: 26,
    name: "Cetaphil Night Cream",
    description: "Crème de nuit réparatrice",
    price: 290.00,
    category: "Anti-âge",
    image: cetaphil
  }
];
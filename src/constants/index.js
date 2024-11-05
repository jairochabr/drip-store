import sneakers from "@/assets/sneakers.png";
import offerImg from "@/assets/offer.png";

// src/pages/HomePage/Carousel/index.jsx
export const SLIDES = [
  {
    id: 1,
    subtitle: "Melhores ofertas personalizadas",
    title: "Queima de estoque Nike 🔥",
    description:
      "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    buttonText: "Ver Ofertas",
    imageSrc: `${sneakers}`,
  },
  {
    id: 2,
    subtitle: "Novos modelos disponíveis",
    title: "Coleção Exclusiva Nike",
    description:
      "Descubra os últimos lançamentos da Nike com designs inovadores e tecnologia de ponta.",
    buttonText: "Explorar Coleção",
    imageSrc: `${sneakers}`,
  },
  {
    id: 3,
    subtitle: "Promoção por tempo limitado",
    title: "50% OFF em tênis de corrida",
    description:
      "Aproveite descontos incríveis em nossa linha de tênis de corrida. Oferta válida enquanto durarem os estoques.",
    buttonText: "Comprar Agora",
    imageSrc: `${sneakers}`,
  },
  {
    id: 4,
    subtitle: "Promoção por tempo limitado",
    title: "30% OFF em tênis esportivos",
    description:
      "Aproveite descontos incríveis em nossa linha de tênis de esportivos. Oferta válida enquanto durarem os estoques.",
    buttonText: "Comprar Agora",
    imageSrc: `${sneakers}`,
  },
];

// src/pages/HomePage/Offer/index.jsx
export const OFFER_SECTION = {
  subtitle: "Oferta especial",
  title: "Air Jordan edição de colecionador",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
  buttonLabel: "Ver Oferta",
  imageSrc: `${offerImg}`,
};

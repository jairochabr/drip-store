import { ProductCard } from "@/components/@ui/ProductCard";
import { ProductsContainer, CategoryTitle } from "./style";
import { motion } from "framer-motion";
import { TENNIS } from "@/assets";
import { DiscountBanner } from "./DiscountBanner"; // Importando o DiscountBanner

export function CategoryPage() {
  // Definindo os produtos de cada categoria
  const tenisProducts = [
    {
      id: 1,
      name: "Tênis Nike",
      category: "Tênis",
      originalPrice: 200,
      currentPrice: 150,
      discount: 25,
      image: TENNIS.kSwiss,
    },
    {
      id: 2,
      name: "Tênis Adidas",
      category: "Tênis",
      originalPrice: 220,
      currentPrice: 180,
      discount: 18,
      image: TENNIS.kSwiss,
    },
    {
      id: 3,
      name: "Tênis Puma",
      category: "Tênis",
      originalPrice: 250,
      currentPrice: 200,
      discount: 20,
      image: TENNIS.kSwiss,
    },
    {
      id: 4,
      name: "Tênis Reebok",
      category: "Tênis",
      originalPrice: 230,
      currentPrice: 170,
      discount: 26,
      image: TENNIS.kSwiss,
    },
    // Novos itens adicionados
    {
      id: 5,
      name: "Tênis New Balance",
      category: "Tênis",
      originalPrice: 240,
      currentPrice: 190,
      discount: 21,
      image: TENNIS.kSwiss,
    },
    {
      id: 6,
      name: "Tênis Converse",
      category: "Tênis",
      originalPrice: 210,
      currentPrice: 170,
      discount: 19,
      image: TENNIS.kSwiss,
    },
  ];

  const camisaProducts = [
    {
      id: 5,
      name: "Camisa Polo",
      category: "Camisa",
      originalPrice: 80,
      currentPrice: 60,
      discount: 25,
      image: TENNIS.nikered,
    },
    {
      id: 6,
      name: "Camisa Manga Longa",
      category: "Camisa",
      originalPrice: 100,
      currentPrice: 75,
      discount: 25,
      image: TENNIS.nikered,
    },
    {
      id: 7,
      name: "Camisa Estampada",
      category: "Camisa",
      originalPrice: 90,
      currentPrice: 70,
      discount: 22,
      image: TENNIS.nikered,
    },
    {
      id: 8,
      name: "Camisa Básica",
      category: "Camisa",
      originalPrice: 60,
      currentPrice: 45,
      discount: 25,
      image: TENNIS.nikered,
    },
    // Novos itens adicionados
    {
      id: 9,
      name: "Camisa Polo Slim",
      category: "Camisa",
      originalPrice: 95,
      currentPrice: 75,
      discount: 21,
      image: TENNIS.nikered,
    },
    {
      id: 10,
      name: "Camisa T-shirt",
      category: "Camisa",
      originalPrice: 85,
      currentPrice: 65,
      discount: 24,
      image: TENNIS.nikered,
    },
  ];

  const calcaProducts = [
    {
      id: 9,
      name: "Calça Jeans",
      category: "Calça",
      originalPrice: 150,
      currentPrice: 120,
      discount: 20,
      image: TENNIS.nikeyellow,
    },
    {
      id: 10,
      name: "Calça Chino",
      category: "Calça",
      originalPrice: 180,
      currentPrice: 140,
      discount: 22,
      image: TENNIS.nikeyellow,
    },
    {
      id: 11,
      name: "Calça Jogger",
      category: "Calça",
      originalPrice: 160,
      currentPrice: 130,
      discount: 19,
      image: TENNIS.nikeyellow,
    },
    {
      id: 12,
      name: "Calça Carga",
      category: "Calça",
      originalPrice: 170,
      currentPrice: 140,
      discount: 18,
      image: TENNIS.nikeyellow,
    },
    // Novos itens adicionados
    {
      id: 13,
      name: "Calça Skinny",
      category: "Calça",
      originalPrice: 190,
      currentPrice: 150,
      discount: 21,
      image: TENNIS.nikeyellow,
    },
    {
      id: 14,
      name: "Calça Cargo Slim",
      category: "Calça",
      originalPrice: 200,
      currentPrice: 160,
      discount: 20,
      image: TENNIS.nikeyellow,
    },
  ];

  const bermudaProducts = [
    {
      id: 13,
      name: "Bermuda Jeans",
      category: "Bermuda",
      originalPrice: 90,
      currentPrice: 70,
      discount: 22,
      image: TENNIS.nikegreen,
    },
    {
      id: 14,
      name: "Bermuda Sarja",
      category: "Bermuda",
      originalPrice: 85,
      currentPrice: 65,
      discount: 24,
      image: TENNIS.nikegreen,
    },
    {
      id: 15,
      name: "Bermuda de Moletom",
      category: "Bermuda",
      originalPrice: 100,
      currentPrice: 80,
      discount: 20,
      image: TENNIS.nikegreen,
    },
    {
      id: 16,
      name: "Bermuda Esportiva",
      category: "Bermuda",
      originalPrice: 110,
      currentPrice: 90,
      discount: 18,
      image: TENNIS.nikegreen,
    },
    // Novos itens adicionados
    {
      id: 17,
      name: "Bermuda Jeans Desgastada",
      category: "Bermuda",
      originalPrice: 95,
      currentPrice: 75,
      discount: 21,
      image: TENNIS.nikegreen,
    },
    {
      id: 18,
      name: "Bermuda Esportiva Slim",
      category: "Bermuda",
      originalPrice: 115,
      currentPrice: 95,
      discount: 18,
      image: TENNIS.nikegreen,
    },
  ];

  const categories = [
    { name: "Tênis", products: tenisProducts },
    { name: "Camisa", products: camisaProducts },
    { name: "Calça", products: calcaProducts },
    { name: "Bermuda", products: bermudaProducts },
  ];

  return (
    <div>
      {/* Adicionando o DiscountBanner antes das categorias */}
      <DiscountBanner />

      {categories.map((category, index) => (
        <div key={index}>
          <CategoryTitle>{category.name}</CategoryTitle>
          <ProductsContainer>
            {category.products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -50 }} // Começa invisível e deslocado para a esquerda
                whileInView={{ opacity: 1, x: 0 }} // Quando entra na tela, se torna visível e se move para a posição inicial
                viewport={{ once: false }} // Permite que o efeito aconteça várias vezes ao rolar
                transition={{ duration: 1, ease: "easeInOut" }} // Lento e suave
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </ProductsContainer>
        </div>
      ))}
    </div>
  );
}

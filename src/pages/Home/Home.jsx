import { Footer } from "../../Components/Footer/Footer";
import { SectionCarrosel } from "../../Components/SectionCarrosel/SectionCarrosel";
import { SectionColecaoDestaque } from "../../Components/SectionColecaoDestaque/SectionColecaoDestaque";
import { SectionOfertaEspecial } from "../../Components/SectionOfertaEspecial/SectionOfertaEspecial";
import { SectionProdutosAlta } from "../../Components/SectionProdutosAlta/SectionProdutosAlta";
import { Header } from "../../Components/Header/Header";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <body>
        <header>
            <Header />
        </header>
        <main className="mainHome">
            <SectionCarrosel />
            <SectionColecaoDestaque />
            <SectionProdutosAlta />
            <SectionOfertaEspecial />
        </main>
        <footer>
            <Footer />
        </footer>
      </body>
    </>
  );
};

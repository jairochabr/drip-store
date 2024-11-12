import { Loading } from "@/components/Loading";
import { Carousel } from "./Carousel";
import { FeaturedSection } from "./Featured";
import { OfferSection } from "./Offer";
import Input from "@/components/@ui/Input";

export function HomePage() {
  return (
    <>
      <Loading />
      <Carousel />
      <Input
      htmlFor="input"
      labelValue="Nome completo *"
      id="input"
      placeholder="Insira seu nome"
      />
      <FeaturedSection />
      <OfferSection />
    </>
  );
}

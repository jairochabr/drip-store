import { Loading } from "@/components/Loading";
import { Carousel } from "./Carousel";
import { FeaturedSection } from "./Featured";
import { SpecialOffer } from "./SpecialOffer";
import CreateAccountForm from "../CreateAccountForm";

export function HomePage() {
  return (
    <>
      <Loading />
      <Carousel />
      <CreateAccountForm></CreateAccountForm>
      <FeaturedSection />
      <SpecialOffer />
    </>
  );
}

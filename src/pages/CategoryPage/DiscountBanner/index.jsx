import { BannerContainer, BannerText, Button } from "./style";

export const DiscountBanner = () => {
  return (
    <BannerContainer>
      <BannerText>
        Desconto de até <strong>45% OFF</strong> no Pix! Não perca essa
        oportunidade!
      </BannerText>
      <Button>não perca</Button>
    </BannerContainer>
  );
};

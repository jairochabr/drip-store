import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import {
  FooterStyle,
  FooterContent,
  FooterLogo,
  SocialIcons,
  FooterInfoSections,
  InfoSection,
  Divider,
  Copyright,
} from "./style";
import { DripStore } from "../icons";

export function Footer() {
  return (
    <FooterStyle>
      <FooterContent>
        <div>
          <FooterLogo>
            <DripStore color="white" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </FooterLogo>
          <SocialIcons>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </SocialIcons>
        </div>
        <FooterInfoSections>
          <InfoSection>
            <h4>Informação</h4>
            <ul>
              <li>Sobre Drip Store</li>
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe conosco</li>
              <li>Meus Pedidos</li>
            </ul>
          </InfoSection>
          <InfoSection>
            <h4>Categorias</h4>
            <ul>
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>
          </InfoSection>
          <InfoSection>
            <h4>Contato</h4>
            <ul>
              <li>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </li>
              <li>(85) 3051-3411</li>
            </ul>
          </InfoSection>
        </FooterInfoSections>
      </FooterContent>
      <Divider />
      <Copyright>2024 Digital College</Copyright>
    </FooterStyle>
  );
}

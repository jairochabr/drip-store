import "./SectionCarrosel.css";
import { DivFotosCarrosel } from "../DivFotosCarrosel/DivFotosCarrosel";
import { BtnPrimary } from "../../Components/Buotoes/BtnPrimary/BtnPrimary";

import sapatoPadrao from "../../assets/HomeFotos/Sapatocarrosel.png";
import sapatoBlack from "../../assets/HomeFotos/black-sneaker.png";
import sapatoBrow from "../../assets/HomeFotos/brown-sneaker.png";
import sapatoPurple from "../../assets/HomeFotos/purple-sneaker.png";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const SectionCarrosel = () => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <section className="sectionCarrosel">
            <div className="divTextosCarrosel">
              <p className="carroselOferta">Melhores ofertas personalizadas</p>
              <h2 className="carroselTitulo">Queima de stoque Nike 🔥</h2>
              <p className="descricaoCarrosel">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
              <div className="divBtnCarrosel">
                <BtnPrimary texto={"Ver Ofertas"} />
              </div>
            </div>

            <DivFotosCarrosel fotoCarrosel={sapatoPadrao} />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="sectionCarrosel">
            <div className="divTextosCarrosel">
              <p className="carroselOferta">Melhores ofertas personalizadas</p>
              <h2 className="carroselTitulo">Queima de stoque Nike 🔥</h2>
              <p className="descricaoCarrosel">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
              <div className="divBtnCarrosel">
                <BtnPrimary texto={"Ver Ofertas"} />
              </div>
            </div>

            <DivFotosCarrosel fotoCarrosel={sapatoBrow} />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="sectionCarrosel">
            <div className="divTextosCarrosel">
              <p className="carroselOferta">Melhores ofertas personalizadas</p>
              <h2 className="carroselTitulo">Queima de stoque Nike 🔥</h2>
              <p className="descricaoCarrosel">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
              <div className="divBtnCarrosel">
                <BtnPrimary texto={"Ver Ofertas"} />
              </div>
            </div>

            <DivFotosCarrosel fotoCarrosel={sapatoBlack} />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="sectionCarrosel">
            <div className="divTextosCarrosel">
              <p className="carroselOferta">Melhores ofertas personalizadas</p>
              <h2 className="carroselTitulo">Queima de stoque Nike 🔥</h2>
              <p className="descricaoCarrosel">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
              <div className="divBtnCarrosel">
                <BtnPrimary texto={"Ver Ofertas"} />
              </div>
            </div>

            <DivFotosCarrosel fotoCarrosel={sapatoPurple} />
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

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
              <p className="carroselOferta">Melhores ofertas personalizadas!</p>
              <h2 className="carroselTitulo">Queima de Estoque Nike 🔥</h2>
              <p className="descricaoCarrosel">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id rem, illum quas animi repellat sit sequi, provident suscipit iure perferendis tempore numquam qui nisi! Recusandae.
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
              <p className="carroselOferta">Melhores ofertas personalizadas!</p>
              <h2 className="carroselTitulo">Queima de Estoque Nike 🔥</h2>
              <p className="descricaoCarrosel">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ullam deserunt, impedit quod a libero! Eveniet, alias similique dignissimos est nam ullam temporibus sequi provident?
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
              <p className="carroselOferta">Melhores ofertas personalizadas!</p>
              <h2 className="carroselTitulo">Queima de Estoque Nike 🔥</h2>
              <p className="descricaoCarrosel">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi praesentium veniam voluptate deserunt pariatur tenetur nam nihil? Rerum, repellendus voluptate! Id hic nihil optio.
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
              <p className="carroselOferta">Melhores ofertas personalizadas!</p>
              <h2 className="carroselTitulo">Queima de Estoque Nike 🔥</h2>
              <p className="descricaoCarrosel">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aspernatur est ipsum, neque ratione excepturi, aut beatae corrupti nam expedita nobis voluptatem eius praesentium. Hic?
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

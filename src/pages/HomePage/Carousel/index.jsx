import { SLIDES } from "@/constants";
import { useCallback, useEffect, useState } from "react";
import * as Styled from "./style";

const SLIDE_INTERVAL = 5000;
const TOTAL_SLIDES = SLIDES.length;

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const slidesToRender = [...SLIDES, SLIDES[0]];

  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => prevIndex === TOTAL_SLIDES ? 0 : prevIndex + 1);
    setTransition(currentIndex < TOTAL_SLIDES);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <Styled.Carousel>
      <Styled.Container $transition={transition} $currentIndex={currentIndex}>
        {slidesToRender.map((slide, index) => (
          <Styled.Slide key={index}>
            <Styled.Content>
              <Styled.TextContent>
                <p className="Subtitle">{slide.subtitle}</p>
                <h1 className="Title">{slide.title}</h1>
                <p className="Description">{slide.description}</p>
                <Styled.SlideButton>{slide.buttonText}</Styled.SlideButton>
              </Styled.TextContent>
              <Styled.ImageContent>
                <img src={slide.imageSrc} alt={slide.title} />
              </Styled.ImageContent>
            </Styled.Content>
          </Styled.Slide>
        ))}
      </Styled.Container>
      <Styled.Dots>
        {SLIDES.map((_, index) => (
          <Styled.Dot
            key={index}
            $active={index === currentIndex % TOTAL_SLIDES}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Styled.Dots>
    </Styled.Carousel>
  );
}

import { SLIDES } from "@/constants";
import { useCallback, useEffect, useRef, useState } from "react";
import Button, {
  CarouselStyle,
  ContentStyle,
  Description,
  Dot,
  DotsStyles,
  ImageContent,
  SlideContainer,
  SlideStyles,
  Subtitle,
  TextContent,
  Title,
} from "./style";

const TRANSITION_DELAY = 50;
const SLIDE_INTERVAL = 5000;

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const slideRef = useRef(null);
  const totalSlides = SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === totalSlides) {
        setTransition(false);
        return 0;
      } else {
        setTransition(true);
        return prevIndex + 1;
      }
    });
  }, [totalSlides]);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  useEffect(() => {
    if (!transition) {
      const timeout = setTimeout(() => {
        setTransition(true);
        setCurrentIndex(1);
      }, TRANSITION_DELAY);
      return () => clearTimeout(timeout);
    }
  }, [transition]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setTransition(true);
  }, []);

  function renderSlides() {
    const slidesToRender = [...SLIDES, SLIDES[0]];
    return slidesToRender.map((slide, index) => (
      <SlideStyles key={index}>
        <ContentStyle>
          <TextContent>
            <Subtitle>{slide.subtitle}</Subtitle>
            <Title>{slide.title}</Title>
            <Description>{slide.description}</Description>
            <Button>{slide.buttonText}</Button>
          </TextContent>
          <ImageContent>
            <img src={slide.imageSrc} alt={slide.title} />
          </ImageContent>
        </ContentStyle>
      </SlideStyles>
    ));
  }

  return (
    <CarouselStyle>
      <SlideContainer ref={slideRef} $transition={transition} $currentIndex={currentIndex}>
        {renderSlides()}
      </SlideContainer>
      <DotsStyles>
        {SLIDES.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentIndex % totalSlides}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsStyles>
    </CarouselStyle>
  );
}

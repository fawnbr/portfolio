import { useState } from 'react';
import { sliderData } from '../../utils/sliderData';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import './styles.scss'
type SlideProps = {
  image: string;
}

export const Slides = ({ slides }: any) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  function handlePreviousSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }
  function handleNextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  return (
    <div className="slider">
      <RiArrowLeftSLine className="leftArrow" onClick={handlePreviousSlide} />
      <RiArrowRightSLine className="rightArrow" onClick={handleNextSlide} />
      {
        sliderData.map((slide: SlideProps, index: number) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
                <img src={slide.image} alt="Projeto" className="image" />
              )}
            </div>
          );
        })}
    </div>
  );
}
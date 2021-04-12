import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import Slide from './Slide';


const Carrusel = (props) => {
  const items = [
    [
        {
          src: 'ushuaia.jpg',
          header: 'Ushuaia',
          id: 1
        },
        {
          src: 'roma.jpg',
          header: 'Rome',
          id: 2
        },
        {
          src: 'london.jpg',
          header: 'London',
          id: 3
        },
        {
          src: 'paris.jpg',
          header: 'Paris',
          id: 4
        }
      ],
    [
        {
          src: 'newYork.jpg',
          header: 'New York',
          id: 5
        },
        {
          src: 'sydney.jpg',
          header: 'Sydney',
          id: 6
        },
        {
          src: 'Shangai.jpg',
          header: 'Shanghai',
          id: 8
        },
        {
          src: 'seattle.jpg',
          header: 'Seattle',
          id: 7
        }
      ],             
    [
        {
          src: 'berlin.jpg',
          header: 'Berlin',
          id: 5
        },
        {
          src: 'medellin.jpg',
          header: 'Medellin',
          id: 7
        },
        {
          src: 'tokyo.jpg',
          header: 'Tokyo',
          id: 6
        },
        {
          src: 'madrid.jpg',
          header: 'Madrid',
          id: 8
        }
      ]             
];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return; 
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  let keyCities =[]
  const slides = items.map((item, index) => {
    keyCities.push(item[0].src)
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
      <div className="slide-container">
        <Slide item={item} />   
      </div> 
      </CarouselItem>
    );
  });
  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={4000}
    >
      <CarouselIndicators items={keyCities} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}
 export default Carrusel
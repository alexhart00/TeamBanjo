import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Arrow from '@somedaycode/react-carousel/dist/Arrow';

const Carousel = ({
  children,
  ...options
}) => {
  const {
    itemsToShow,
    duration,
    timing,
    arrowSize,
    carouselWidth,
    position: initialPosition // add initial position as a prop
  } = options;
  const [position, setPosition] = useState(initialPosition); // set initial position as state
  const outBoxRef = useRef();
  const [restCardCount, setRestCardCount] = useState(null);

  const handleClickArrowBtn = ({
    currentTarget
  }) => {
    const direction = currentTarget.getAttribute('direction');
    const outBoxWidth = outBoxRef.current.clientWidth;
    if (direction === 'RIGHT') return moveRight(outBoxWidth);
    if (direction === 'LEFT') return moveLeft(outBoxWidth);
  };

  const moveRight = outBoxWidth => {
    if (restCardCount === 0) return;

    if (restCardCount < itemsToShow) {
      setRestCardCount(0);
      return setPosition(position - outBoxWidth / itemsToShow * restCardCount);
    }

    setRestCardCount(cardCount => cardCount - itemsToShow);
    setPosition(position - outBoxWidth);
  };

  const moveLeft = outBoxWidth => {
    if (position >= 0) return;
    const defaultCardCount = children.length - itemsToShow;

    if (restCardCount + itemsToShow > defaultCardCount) {
      setRestCardCount(defaultCardCount);
      return setPosition(0);
    }

    setRestCardCount(cardCount => cardCount + itemsToShow);
    setPosition(position + outBoxWidth);
  };

  useEffect(() => {
    if (restCardCount !== null) return;
    setRestCardCount(children.length - itemsToShow);
  }, [children, itemsToShow, restCardCount]);
  
  useEffect(() => {
    setPosition(initialPosition); // update position when initial position changes
  }, [initialPosition]);

  return (
    <CarouselStyled className="carousel" carouselWidth={carouselWidth}>
      <OutBox ref={outBoxRef}>
        <Items position={position} duration={duration} timing={timing}>
          {children}
        </Items>
      </OutBox>
      <Arrow
        size={arrowSize}
        direction="RIGHT"
        onClick={e => handleClickArrowBtn(e)}
      />
      <Arrow
        size={arrowSize}
        direction="LEFT"
        onClick={e => handleClickArrowBtn(e)}
      />
    </CarouselStyled>
  );
};

export default Carousel;

const CarouselStyled = styled.div`
  width: ${({ carouselWidth }) =>
    carouselWidth ? `${carouselWidth}px` : `100%`};
  position: relative;
`;

const OutBox = styled.div`
  overflow: hidden;
  position: relative;
`;

const Items = styled.div`
  display: flex;
  width: fit-content;
  position: relative;
  transition: ${({ duration, timing }) =>
    `all ${duration}s ${timing}`};
  transform: ${({ position }) => `translateX(${position}px)`};
`;
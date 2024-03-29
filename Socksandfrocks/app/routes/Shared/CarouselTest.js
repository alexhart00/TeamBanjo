import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Arrow from '@somedaycode/react-carousel/dist/Arrow';

const Carousel = ({
  updateLeftFlag,
  leftFlagValue,
  updateRightFlag,
  rightFlagValue,
  children,  
  ...options
}) => {
  const {
    itemsToShow,
    duration,
    timing,
    arrowSize,
    carouselWidth
  } = options;
  const [position, setPosition] = useState(0);
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
    updateRightFlag(rightFlagValue + 1);
    setPosition(position - outBoxWidth);
  };

  const moveLeft = outBoxWidth => {
    if (position >= 0) return;
    const defaultCardCount = children.length - itemsToShow;

    if (restCardCount + itemsToShow > defaultCardCount) {
      setRestCardCount(defaultCardCount);
      updateFlag(position- outBoxWidth / itemsToShow * restCardCount);
      return setPosition(0);
    }

    setRestCardCount(cardCount => cardCount + itemsToShow);
    setPosition(position + outBoxWidth);
    updateLeftFlag(leftFlagValue + 1);
    updateFlag(position);
  };

  useEffect(() => {
    if (restCardCount !== null) return;
    setRestCardCount(children.length - itemsToShow);
  }, [children, itemsToShow, restCardCount]);
  return /*#__PURE__*/React.createElement(CarouselStyled, {
    className: "carousel",
    carouselWidth: carouselWidth
  }, /*#__PURE__*/React.createElement(OutBox, {
    ref: outBoxRef
  }, /*#__PURE__*/React.createElement(Items, {
    position: position,
    duration: duration,
    timing: timing
  }, children)), /*#__PURE__*/React.createElement(Arrow, {
    size: arrowSize,
    direction: 'RIGHT',
    onClick: e => handleClickArrowBtn(e)
  }), /*#__PURE__*/React.createElement(Arrow, {
    size: arrowSize,
    direction: 'LEFT',
    onClick: e => handleClickArrowBtn(e)
  }));
};

export default Carousel;
const CarouselStyled = styled.div`
  width: ${({
  carouselWidth
}) => carouselWidth ? `${carouselWidth}px` : `100%`};
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
  transition: ${({
  duration,
  timing
}) => `all ${duration}s ${timing}`};
  transform: ${({
  position
}) => `translateX(${position}px)`};
`;
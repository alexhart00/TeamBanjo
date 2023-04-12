import React, { useState } from 'react';
//import Carousel from '@somedaycode/react-carousel';
import Carousel from './CarouselComponents/dist/Carousel';
import styled from 'styled-components';

export default function ItemCarousel({imgUrls}){

    const options = {
        carouselWidth: 200,
        itemsToShow: 0,
        duration: 0.5,
        timing: 'ease-in-out',
        arrowSize: 20,
      };

      const Item = styled.div`
      margin: 0 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      background: linear-gradient(to right, #00FFFF, #A020F0);
      border-radius: 10px;
      width: 190px; // 200px - margin(5px + 5px)
      height: 200px;
      `;
      const items = imgUrls.map ((card) => (
        <Item><img src={card}></img></Item>
      ));

      return(
        <div>
            <Carousel {...options}>{items}</Carousel>
        </div>
      )

}
import products from "../../../public/assets/database/products.json"
import ItemCarousel from '../Shared/Carousel.client';
import Carousel from '@somedaycode/react-carousel';
import styled from 'styled-components';
import React, { useState } from "react";

export default function CuratedPageRigout({flag, URlOutfit, style, pattern, dressCode}) {
  const percentageMatch = 90

  const styleOptions = [
    {
      label: "Select",
      value: "Select",
    },
    {
      label: "Professional",
      value: "Professional",
    },
    {
      label: "Casual",
      value: "Casual",
    },
    {
      label: "Cute",
      value: "Cute",
    },
    {
      label: "Classic",
      value: "Classic",
    },
    {
      label: "Goth",
      value: "Goth",
    },
    {
      label: "Punk",
      value: "Punk",
    },
    {
      label: "Cool",
      value: "Cool",
    },
    {
      label: "Dressy",
      value: "Dressy",
    },
  ];

  const patternOptions = [
    {
      label: "Select",
      value: "Select",
    },
    {
      label: "Solid",
      value: "Solid",
    },
    {
      label: "Striped",
      value: "Striped",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];

  const dresscodeOptions = [
    {
      label: "Select",
      value: "Select",
    },
    {
      label: "Casual",
      value: "Casual",
    },
    {
      label: "Dressy",
      value: "Dressy",
    },
    {
      label: "Business Casual",
      value: "Business Casual",
    },
    {
      label: "Business Professional",
      value: "Business Professional",
    },


  ];

  const [selectStyle, setSelectStyle] = useState(styleOptions[0]);

  const[selectPattern, setSelectPattern] = useState(patternOptions[0]);

  const[selectDress, setSelectDress] = useState(dresscodeOptions[0]);

    return(
      <div class="grid grid-cols-2 flex flex-wrap w-6/12 items-center p-8 bg-gray-100 border-gray-200 border-8 content-center centerDiv shadow-lg">
          <div class="row-span-2 flex flex-wrap content-center text-center font-bold content-center bg-gray-100">
              <ul class="m-4 p-2 border-gray-200 border-8 shadow-lg">
                <div class="border-gray-200 border-8">
                    <li>Select Outfit Properties</li>
                </div>
                <div class="border-gray-200 border-8">
                    <li>
                  <label for="Style">Style:</label>
                  <select name="Style"id="Style"
                  value={selectStyle}
                  onChange={e => setSelectStyle(e.target.value)}>
                      {styleOptions.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                   
                </li>
                <li>
                  <label for="Pattern">Pattern:</label>
                  <select name="Pattern" id="Pattern"
                  value={selectPattern}
                  onChange={e => setSelectPattern(e.target.value)}>
                      {patternOptions.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                </li>
                <li>
                  <label for="Dress Code">Dress Code:</label>
                  <select name="Dress Code" id="Dress Code"
                  value={selectDress}
                  onChange={e => setSelectDress(e.target.value)}>
                      {dresscodeOptions.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                </li>
                </div>
                <div class="border-gray-200 border-8">
                <button class="SFbutton"
                onClick={() => {flag(true), style({selectStyle}), pattern(selectPattern), dressCode(selectDress)}}>
                  Pick Out</button>
                </div>
              </ul>
          </div>
      </div>
    );
  }


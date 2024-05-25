"use client";

import { DistrictMapIcon } from "@/components/Icons";
import { DISTRICT_MAP_LIST } from "@/constants";
import { useState } from "react";
import React from "react";

export const AmountAdsDistrict = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (event: any, index: number) => {
    event.preventDefault();
    setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-white dark:bg-[#0F1623] w-[1002px] h-[600px] rounded-lg pl-[26px] flex flex-col space-y-[20px] pt-[12px] justify-center items-center">
      <h1 className="text-black dark:text-white text-[28px] font-medium">
        The amount of your ads in district
      </h1>
      <div className="flex flex-row space-x-[45px]">
        <DistrictMapIcon activeIndex={clickedIndex} />
        <div className="flex flex-col space-y-[10px] mt-[10px]">
          {DISTRICT_MAP_LIST.map(({ title, colorClass }, index) => {
            const isClicked = clickedIndex === index;
            return (
              <React.Fragment key={index}>
                <div
                  className={`flex flex-row space-x-[7px] h-[40px] w-[185px] items-center transition duration-2000 ease-in-out rounded-lg pl-[10px]
                ${isClicked ? "bg-[#D9D9D9] dark:bg-[#182235]" : ""}`}
                  onClick={(event) => handleClick(event, index)}
                >
                  <div
                    className={`rounded-full w-[10px] h-[10px] bg-color-${colorClass}`}
                  ></div>
                  <h2 className="text-[#7A7A7A] dark:text-white text-xl font-normal cursor-pointer">{title}</h2>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

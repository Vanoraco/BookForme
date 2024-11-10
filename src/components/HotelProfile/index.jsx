import { Heading, RatingBar, Img } from "./..";
import React from "react";

export default function HotelProfile({
  hotelImage = "images/img_image_sc_fzoyav_122x180.png",
  hotelName = "NANA Hotel Bangkok",
  ratingScore = "7.8",
  ratingDescription = "Very good",
  currency = "USD",
  price = "42",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center w-[32%] sm:w-full bg-white-a700 rounded-lg`}
    >
      <Img
        src={hotelImage}
        alt="Nana Hotel"
        className="h-[122px] w-full object-cover"
      />

      <div className="flex flex-col items-start gap-[22px] self-stretch px-2 py-1">
        <Heading
          size="headinglg"
          as="p"
          className="mt-1 text-[14px] font-semibold text-blue_gray-900_02"
        >
          {hotelName}
        </Heading>

        <div className="flex flex-col justify-center self-stretch">
          <RatingBar
            value={5}
            isEditable={true}
            color="#ffb200"
            activeColor="#ffb200"
            size={8}
            className="flex gap-2.5"
          />

          <div className="relative z-[26] mt-2 flex flex-wrap">
            <Heading
              size="headinglg"
              as="p"
              className="text-[14px] font-semibold text-amber-600_01"
            >
              {ratingScore}
            </Heading>
            <Heading
              size="headinglg"
              as="p"
              className="text-[14px] font-semibold text-amber-600_01"
            >
              {ratingDescription}
            </Heading>
          </div>

          <div className="relative mt-[-2px] flex flex-wrap items-center justify-end">
            <Heading
              size="headings"
              as="p"
              className="self-end text-[12px] font-semibold text-red-700"
            >
              {currency}
            </Heading>
            <Heading
              as="h6"
              className="text-[16px] font-semibold text-red-700"
            >
              {price}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}

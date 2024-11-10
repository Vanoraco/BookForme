import { Text, Img, Button } from "./..";
import React from "react";

export default function FlightDetails3({
  airlineLogo = "images/img_image_sc_fzoyav.png",
  ecoSaverButtonText = "Eco Saver",
  airlineName = "Emirates Airline",
  operatedByText = "Partially operated by Flydubai",
  departureTime = "23:45",
  departureAirportCode = "KHI",
  stopoverCount = "1",
  flightDuration = "16h 20m",
  arrivalTime = "12:55",
  arrivalDayOffset = "+1",
  arrivalAirportCode = "BKK",
  currency = "USD",
  price = "863",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col justify-center items-center gap-4 px-4 py-6 sm:py-5 bg-white-a700 flex-1 rounded-lg`}
    >
      <Img src={airlineLogo} alt="Emirates" className="h-[48px] w-[48px] object-cover" />
      <div className="flex flex-1 items-center">
        <div className="flex flex-1 gap-3">
          <div className="flex w-[32%] flex-col items-start">
            <Button className="h-[22px] min-w-[72px] rounded-sm border border-solid border-indigo-100 px-[7px] text-[12px] text-gray-900">
              {ecoSaverButtonText}
            </Button>
            <Text className="text-[16px] font-semibold text-gray-900 sm:text-[13px]">{airlineName}</Text>
            <div className="relative z-[6] flex self-stretch">
              <Text className="text-[12px] font-normal text-blue_gray-500">{operatedByText}</Text>
            </div>
            <Img src="images/img_div_a46d6_box_blue_gray_50.svg" alt="Emirates" className="h-[26px] w-full sm:h-auto" />
          </div>
          <div className="flex flex-1 px-3 py-5">
            <div className="flex w-[18%] flex-col items-start">
  <div className="flex justify-center self-stretch">
    <Text className="text-[20px] font-semibold text-gray-900 sm:text-[17px]">{departureTime}</Text>
  </div>
  <Text className="relative mt-[-2px] text-[14px] font-normal text-blue_gray-500">{departureAirportCode}</Text>
</div>
<div className="ml-1.5 flex w-[20%] flex-col items-end justify-center">
  <div className="relative h-[22px] self-stretch">
    <Img
      src="images/img_icon_blue_gray_200.svg"
      alt="Image"
      className="absolute bottom-[7.28px] right-0 m-auto h-[3px] flex-1"
    />
    <Text className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-center justify-center bg-white-a700 px-1 py-0.5 text-[12px]">{stopoverCount}</Text>
  </div>
  <Text className="text-[12px] font-normal text-blue_gray-500">{flightDuration}</Text>
</div>
<div className="ml-3 flex flex-1 flex-col items-start">
  <div className="flex items-start self-stretch">
    <div className="relative z-[7] flex self-center">
      <Text className="text-[20px] font-semibold text-gray-900 sm:text-[17px]">{arrivalTime}</Text>
    </div>
    <div className="flex flex-1 flex-col items-start justify-center">
      <Text className="font-arial text-[12px] font-bold text-orange-900">{arrivalDayOffset}</Text>
    </div>
  </div>
  <Text className="relative z-[8] mt-[-2px] text-[14px] font-normal text-blue_gray-500">{arrivalAirportCode}</Text>
</div>
</div>
<div className="flex w-[26%] justify-center px-[26px] sm:px-5">
  <div className="flex w-full flex-wrap items-center justify-end sm:w-full">
    <Text className="self-end text-[12px] font-normal text-red-800">{currency}</Text>
    <Text className="text-[24px] font-semibold text-red-800 sm:text-[20px]">{price}</Text>
  </div>
</div>
</div>
</div>
</div>
);
}
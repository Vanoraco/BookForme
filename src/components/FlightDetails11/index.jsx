import React from 'react';	
import { Img, Text, Button } from './..';

export default function FlightDetails({
  airlineLogo = 'images/image_sc_fzoyav.png',
  ecoSaverButtonText = 'Eco Saver',
  airlineName = 'Emirates Airline',
  operatedByText = 'Partially operated by Flydubai',
  departureTime = '03:30',
  departureAirportCode = 'KHI',
  iconText = '1',
  flightDuration = '13h 10m',
  arrivalTime = '18:40',
  arrivalAirportCode = 'BKK',
  currency = 'USD',
  price = '863',
  ...props
}) {
  return (
    <div 
    {...props} className={`${props.className} flex sm:flex-col justify-center items-center gap-4 px-4 py-6 sm:py-5 bg-white-a700 flex-1 rounded-lg`}>
      <Img src={airlineLogo} alt="Emirates" className="h-[48px] w-[48px] object-cover" />
      <div className="flex flex-1 items-center">
        <div className="flex flex-1 gap-3">
          <div className="flex w-[32%] flex-col items-start">
            <Button className="h-[22px] min-w-[72px] rounded-sm border border-solid border-indigo-100 px-[7px] font-arial text-[12px] text-gray-900">
              {ecoSaverButtonText}
            </Button>
            <Text className="font-arial text-[16px] font-normal text-gray-900 sm:text-[13px]">
              {airlineName}
            </Text>
            <div className="relative z-[18] flex self-stretch">
              <Text className="font-arial text-[12px] font-normal text-blue_gray-500">
                {operatedByText}
              </Text>
            </div>
            <Img src="images/img_div_a46d6_box_blue_gray_50.svg" alt="Emirates" className="h-[26px] w-full sm:h-auto" />
          </div>
          <div className="flex flex-1 items-center px-3 py-5">           
   <div className="flex w-[18%] flex-col items-start">
    <div className="flex self-stretch">
      <Text className="font-arial text-[20px] font-bold text-gray-900 sm:text-[17px]">{departureTime}</Text>
    </div>
    <Text className="font-arial text-[14px] font-normal text-blue_gray-500">{departureAirportCode}</Text>
  </div>
  <div className="ml-1 flex w-[20%] flex-col items-end justify-center gap-0.5 sm:gap-0.5">
    <div className="relative h-[22px] self-stretch">
      <img src="images/img_icon_blue_gray_200.svg" alt="Image" className="absolute bottom-[7.28px] right-[-0.74px] m-auto h-[3px] flex-1" />
      <Text className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-center justify-center bg-white-a700 p-1 font-arial text-[12px] font-normal text-blue_gray-500">{iconText}</Text>
    </div>
    <Text className="font-arial text-[12px] font-normal text-blue_gray-500">{flightDuration}</Text>
  </div>
  <div className="ml-2.5 flex flex-1 flex-col items-start">
    <div className="flex self-stretch">
      <Text className="font-arial text-[20px] font-bold text-gray-900 sm:text-[17px]">{arrivalTime}</Text>
    </div>
    <Text className="font-arial text-[14px] font-normal text-blue_gray-500">{arrivalAirportCode}</Text>
  </div>
</div>
</div>
<div className="flex w-[26%] justify-center">
  <div className="flex flex-wrap items-center">
    <Text className="self-end font-arial text-[12px] font-bold text-red-800">{currency}</Text>
    <Text className="font-arial text-[24px] font-bold text-red-800 sm:text-[20px]">{price}</Text>
  </div>
</div>
</div>
</div>
);
}
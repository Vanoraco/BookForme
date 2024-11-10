import { Img, Text } from './..';
import React from 'react';	


export default function DepartureSchedule({
  departureText = 'Departure 08:00 - 24:00',
  startTimeText = '08:00',
  endTimeText = '24:00',
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center flex-1`}>
      <div className="mr-1.5 flex flex-col items-start self-stretch">
        <Text as="p" className="text-[14px] font-normal text-gray-900">
          {departureText}
        </Text>
        <Img
          src="images/img_div_a46d6_box.png"
          alt="Image"
          className="relative mt-[-2px] h-[44px] w-full object-cover"
        />
      </div>
      <div className="relative mt-[-8px] flex flex-wrap justify-between gap-5 self-stretch">
        <Text as="p" className="text-[14px] font-normal text-blue_gray-500">
          {startTimeText}
        </Text>
        <Text as="p" className="text-[14px] font-normal text-blue_gray-500">
          {endTimeText}
        </Text>
      </div>
    </div>
  );
}
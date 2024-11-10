import { Text, Img } from "./..";
import React from "react";

export default function NewYorkProfile({
  backgroundImage = "images/img_977436_jpg.png",
  cityName = "New York",
  thingsToDoText = "1819 things to do",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} h-[194px] w-full relative rounded-lg`}>
      <Img
        src={backgroundImage}
        alt="1819 Things To"
        className="mx-auto h-[194px] w-full flex-1 rounded-1g object-cover"
      />
      <div className="absolute bottom-[-0.66px] left-0 right-0 m-auto flex-1">
        <div className="h-[52px] bg-gradient" />
        <div className="bg-gradient1 p-4">
          <div className="flex flex-col items-start">
            <Text size="text3x1" as="p" className="font-segoeui text-[16px] font-normal text-white-a700">
              {cityName}
            </Text>
            <Text size="text" as="p" className="font-segoeui text-[11.81px] font-normal text-white-a700">
              {thingsToDoText}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

import {Img, Text} from "./.."
import React from "react";

export default function CulturalRow({ mainText = "Museums, arts & culture", countText = "(6)", ...props }) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-center flex-1`}>
      <div className="flex w-[60%] items-center gap-2">
        <div className="h-[20px] w-[20px] rounded border border-solid border-blue_gray-400 bg-white-a700" />
        <Text as="p" className="font-roboto text-[14px] font-normal text-gray-900_02">
          {mainText}
        </Text>
      </div>
      <Text size="textlg" as="p" className="font-roboto text-[13.78px] font-normal text-gray-700">
        {countText}
      </Text>
      <Img src="images/img_checkmark.svg" alt="Image" className="h-[24px] w-[24px]" />
    </div>
  );
}
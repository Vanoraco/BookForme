import { Text } from "./..";
import React from "react";

export default function UserProfileRow({
  greetingText = "Morning",
  userCount = "(327)",
  timeText = "Starts before 12:00 PM",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-end flex-1`}>
      <div className="flex items-center self-stretch">
        <div className="h-[20px] w-[20px] rounded border border-solid border-blue_gray-400 bg-white-a700" />
        
        <Text
          size="textlg"
          as="p"
          className="ml-2 self-end font-roboto text-[13.67px] font-normal text-gray-900_02"
        >
          {greetingText}
        </Text>
        
        <Text
          size="textlg"
          as="p"
          className="ml-1 self-end font-roboto text-[13.78px] font-normal text-gray-700"
        >
          {userCount}
        </Text>
        
        <Text
          size="textmd"
          as="p"
          className="ml-1 font-roboto text-[12px] font-normal text-gray-700"
        >
          {timeText}
        </Text>
      </div>
    </div>
  );
}

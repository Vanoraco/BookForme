import { Img, Text } from "./..";
import React from "react";

export default function Header1({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-end items-end mt-6 ml-[-142px] relative bg-red-800 flex-1`}
    >
      <a href="#">
        <Img
          src="images/defaultNoData.png"
          alt="Profile"
          className="mt-[30px] h-[40px] w-[40px]"
        />
      </a>

      <a href="#">
        <Img
          src="images/defaultNoData.png"
          alt="Favorite"
          className="h-[40px] w-[40px]"
        />
      </a>

      <div className="ml-2 flex w-[6%] justify-end gap-2">
        <a href="#">
          <Img
            src="images/img_icon.svg"
            alt="Icon"
            className="h-[24px] w-[24px]"
          />
        </a>

        <div className="flex flex-1 justify-center">
          <Text
            as="p"
            className="font-kantumruypro text-[14.9px] font-medium text-white-a700"
          >
            Log in
          </Text>
        </div>
      </div>

      <a href="#">
        <Img
          src="images/defaultNoData.png"
          alt="Megaphone"
          className="ml-2 h-[40px] w-[40px]"
        />
      </a>
    </header>
  );
}

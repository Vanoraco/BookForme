import { Text, Img, Button } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header {...props} className={`${props.className} flex justify-center items-start px-14 md:px-5 bg-red-800`}>
      
      <div className="mb-[78px] flex w-[96%] flex-col items-start md:w-full">
        
        <div className="mx-auto flex w-full max-w-[1250px] items-start self-stretch md:px-5">
          
          <Img
            src="images/img_bookforme_02_03.png"
            alt="Bookforme02thre"
            className="relative z-[1] h-[124px] w-[12%] self-center object-contain"
          />
          
          <div className="relative ml-[-142px] mt-6 flex flex-1 items-end justify-end bg-red-800">
            
            <a href="#">
              <Img
                src="images/img_profile_white_a700.svg"
                alt="Profile"
                className="mt-[30px] h-[40px] w-[40px]"
              />
            </a>
            
            <a href="#">
              <Img
                src="images/img_favorite_white_a700.svg"
                alt="Favorite"
                className="h-[40px] w-[40px]"
              />
            </a>
            
            <div className="flex w-[8%] justify-center gap-2 p-2">
              <a href="#">
                <Img
                  src="images/img_icon.svg"
                  alt="Icon"
                  className="h-[24px] w-[24px]"
                />
              </a>
              
              <div className="flex flex-1 justify-center py-0.5">
                <Text as="p" className="font-kantumruypro text-[14.9px] font-medium text-white-a700">
                  Log in
                </Text>
              </div>
            </div>
            
            <a href="#">
              <Img
                src="images/img_megaphone_white_a700_1.svg"
                alt="Megaphone"
                className="h-[40px] w-[40px]"
              />
            </a>
            
          </div>
          
        </div>
        
        <div className="ml-[26px] flex w-[16%] gap-1 md:ml-0 md:w-full">
          
          <Button
            leftIcon={
              <Img
                src="images/img_icon_white_a700.svg"
                alt="Icon"
                className="h-[16px] w-[16px]"
              />
            }
            className="min-w-[98px] gap-2 rounded-[10px] px-4 font-kantumruypro font-medium"
          >
            Flights
          </Button>
          
          <div className="flex w-full justify-center gap-2 rounded-[10px] p-2">
            <a href="#">
              <Img
                src="images/img_icon_white_a700_16x16.svg"
                alt="Icon"
                className="h-[16px] w-[16px]"
              />
            </a>
            
            <Text size="textlg" as="p" className="font-kantumruypro text-[13.2px] font-medium text-white-a700">
              Hotels
            </Text>
          </div>
          
        </div>
        
      </div>
      
    </header>
  );
}

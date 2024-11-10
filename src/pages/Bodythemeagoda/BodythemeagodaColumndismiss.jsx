import { Img, Button, Text } from "../../components"; 
import React from "react"; 

export default function BodythemeagodaColumndismiss() { 
  return ( 
    <div className="mb-[70px] flex flex-col items-center gap-4"> 
      <div className="relative h-[96px] content-end self-stretch md:h-auto"> 
        <div className="mx-auto mb-3 flex flex-1 flex-col items-center gap-1 px-14 md:px-5"> 
          <Text 
            as="p" 
            className="font-arial text-[14px] font-normal text-blue_gray-100"
          > 
            All material herein 2005 2024 Agoda Company Pte. Ltd. All Rights Reserved. 
          </Text> 
          <Text 
            as="p" 
            className="font-arial text-[14px] font-normal text-blue_gray-100"
          > 
            Agoda is part of Booking Holdings Inc., the world leader in online travel & related services. 
          </Text> 
          <div 
            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 rounded-[5px] bg-gray-100 p-2.5 shadow-lg"
          > 
          </div> 
          <div className="flex items-center justify-center md:flex-col"> 
            <div className="flex flex-1 flex-col items-start gap-0.5 md:self-stretch"> 
              <Img 
                src="images/img_image.png" 
                alt="Image" 
                className="h-[30px] w-[30px] rounded-lg object-cover" 
              /> 
              <Text 
                size="text3x1" 
                as="p" 
                className="font-arial text-[16px] font-normal text-gray-900"
              > 
                Manage Cookie Preference 
                <Text 
                  as="p" 
                  className="font-arial text-[14px] font-normal text-gray-900" 
                > 
                </Text> 
                <span className="text-gray-900"> 
                  Agoda only uses cookies that are strictly necessary for functionality. 
                  We do not use analytical or marketing cookies. For more details on cookies, click&nbsp; 
                </span> 
              </Text> 
              <span className="text-amber-600_01">here</span> 
            </div> 
            <Button 
              color="white_A700" 
              size="md" 
              className="min-w-[84px] rounded-[10px] border border-solid border-amber-600_01 px-[15px] font-arial text-amber-600_01" 
            > 
              Dismiss 
            </Button> 
          </div> 
        </div> 
      </div> 
      <div className="container-xs md:px-5"> 
        <div className="flex gap-[53px] px-1.5 md:flex-col"> 
          <Img 
            src="images/img_i_sprite_sc_1smlr1d_0.png" 
            alt="Ispritesc" 
            className="h-[48px] w-[16%] object-contain md:w-full" 
          /> 
          <Img 
            src="images/img_i_sprite_sc_1smlr1d_0_48x144.png" 
            alt="Ispritesc" 
            className="h-[48px] w-[16%] object-contain md:w-full" 
          /> 
          <Img 
            src="images/img_i_sprite_sc_1smlr1d_0_1.png" 
            alt="Ispritesc" 
            className="h-[48px] w-[16%] object-contain md:w-full" 
          /> 
          <Img 
            src="images/img_i_sprite_sc_1smlr1d_0_2.png" 
            alt="Ispritesc" 
            className="h-[48px] w-[16%] object-contain md:w-full" 
          /> 
          <Img 
            src="images/img_i_sprite_sc_1smlr1d_0_3.png" 
            alt="Ispritesc" 
            className="h-[48px] w-[16%] object-contain md:w-full" 
          /> 
        </div> 
      </div> 
    </div> 
  ); 
}

import { Img, Text } from "../../components"; 
import React from "react"; 

export default function HotelRowallmaterial() { 
    return ( 
        <div> 
            <div className="flex flex-col items-center bg-blue_gray-900 py-[54px] md:py-5"> 
                <div className="container-xs mb-[22px] flex flex-col items-center gap-8 px-14 md:px-5"> 
                    <div className="ml-44 mr-[148px] flex flex-col items-start gap-1 md:mx-0"> 
                        <Text 
                            as="p" 
                            className="ml-8 font-arial text-[14px] font-normal text-blue_gray-100 md:ml-0"
                        > 
                            All material herein 2005 2024 Bookforme. Ltd. All Rights Reserved.
                        </Text> 
                        <Text 
                            as="p" 
                            className="font-arial text-[14px] font-normal text-blue_gray-100"
                        > 
                            Bookforme is part of Booking Holdings Inc. The world leader in online travel & related services. 
                        </Text> 
                        <div className="ml-[38px] flex w-[88%] justify-center gap-[38px] md:m1-0 md:w-full md:flex-col"> 
                            <Img 
                                src="images/img i sprite sc ismlrid_0.png" 
                                alt="Ispritesc" 
                                className="h-[48px] w-[18%] object-contain md:w-full" 
                            /> 
                            <div className="flex flex-1 justify-between gap-5 md:self-stretch sm:flex-col"> 
                                <Img 
                                    src="images/img_i_sprite_sc_1smlr1d_0_48x144.png" 
                                    alt="Ispritesc" 
                                    className="h-[48px] w-[28%] object-contain sm:w-full" 
                                /> 
                                <Img 
                                    src="images/img_i_sprite_sc_1smlr1d_0_1.png" 
                                    alt="Ispritesc" 
                                    className="h-[48px] w-[28%] object-contain sm:w-full" 
                                /> 
                                <Img 
                                    src="images/img_i_sprite_sc_1smlr1d_0_2.png" 
                                    alt="Ispritesc" 
                                    className="h-[48px] w-[28%] object-contain sm:w-full" 
                                /> 
                            </div> 
                            <Img 
                                src="images/img_i_sprite_sc_1smlr1d_0_48x142.png" 
                                alt="Ispritesc" 
                                className="h-[48px] w-[18%] object-contain md:w-full" 
                            /> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ); 
}

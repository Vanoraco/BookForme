import { Text } from "../../components"; 
import HelpLinks from "../../components/HelpLinks"; 
import React from "react"; 

export default function HotelRow() { 
    return ( 
        <div className="flex justify-center bg-blue_gray-50_01"> 
            <div> 
                <div className="container-xs flex justify-center md:px-5"> 
                    <div className="flex w-full px-[22px] py-6 md:flex-col sm:p-5"> 
                        <div className="flex w-[40%] md:w-full md:flex-row sm:flex-col"> 
                            <HelpLinks 
                                helpLink="Help" 
                                helpCenterLink="Help center" 
                                faqsLink="FAQS" 
                                privacyPolicyLink="Privacy policy" 
                                informationLink="Information" 
                                termsOfUseLink="Terms of use" 
                            /> 
                            <HelpLinks 
                                helpLink="Company" 
                                helpCenterLink="About us" 
                                faqsLink="Careers" 
                                privacyPolicyLink="Press" 
                                informationLink="Blog" 
                                termsOfUseLink="PointsMAX" 
                            /> 
                        </div> 
                        <div className="flex flex-1 flex-col items-start gap-3 py-2.5 md:self-stretch"> 
                            <Text 
                                size="text3x1" 
                                as="p" 
                                className="font-arial text-[16px] font-normal text-blue_gray-900"
                            >
                                Destinations
                            </Text> 
                            <div className="mb-[148px] flex flex-col items-start gap-1 self-stretch"> 
                                <a href="Countries/Territories" target="_blank" rel="noreferrer"> 
                                    <Text 
                                        as="p" 
                                        className="font-arial text-[14px] font-normal text-blue_gray-900"
                                    >
                                        Countries/Territories
                                    </Text> 
                                </a> 
                                <a href="#"> 
                                    <Text 
                                        as="p" 
                                        className="font-arial text-[14px] font-normal text-blue_gray-900"
                                    >
                                        All Flight Routes
                                    </Text> 
                                </a> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ); 
}

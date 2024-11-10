import { Img, Text, Button, Heading } from "../../components";
import React from "react";
export default function BakudiscountColumnTwo() 
{  
  return (  
     <div className="flex flex-col items-center">   
        <div className="container-xs flex flex-col items-start gap-1 px-[26px] md:px-5">     
             <Heading size="heading5xl" as="h2" className="text-[24px] font-bold text-gray-900_02 md:text-[22px]">    
                    Your account, your travel      
                      </Heading>      
                        <div className="self-stretch rounded-lg border border-solid border-gray-200 bg-white-a700 p-4">     
                               <div className="flex items-center md:flex-col">     
                                       <div className="flex flex-1 flex-col items-start gap-1.5 md:self-stretch">         
                                             <Heading size="headingxl" as="h3" className="text-[16px] font-bold text-gray-900_02">         
                                                     All your trip details in one place          
                                                         </Heading>            
                                                           <Text as="p" className="text-[13.89px] font-normal text-gray-900_02">       
                                                                     Sign in to book faster and manage your trip with ease         
                                                                          </Text>        
                                                                                <div className="flex items-center gap-4 self-stretch">       
                                                                                           <Button shape="round" className="min-w-[66px] rounded border border-solid border-red-800 px-[11px]">   
                                                                                                           Sign in  
                                                                                                                         </Button>               
                                                                                                                          <a href="Register" target="_blank" rel="noreferrer" className="mb-1 self-end">     
                                                                                                                                         <Text size="textxl" as="p" className="text-[14px] font-normal text-gray-900_04">          
                                                                                                                                                    Register          
                                                                                                                                                            </Text>         
                                                                                                                                                                   </a>       
                                                                                                                                                                          </div>     
                                                                                                                                                                                 </div>      
                                                                                                                                                                                       <Img src="images/img_picture.png" alt="Picture" className="h-[104px] w-[8%] object-contain md:w-full" />
                                                                                                                                                                                        </div>
                                                                                                                                                                                        </div>   
                                                                                                                                                                                           </div>   
                                                                                                                                                                                            </div> 
                                                                                                                                                                                             )
                                                                                                                      ;}

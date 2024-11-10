import { Button, Text, Img, Input, Heading } from "../../components";
import React from "react";
export default function BakudiscountColumnexplore() 
       {  
        return (    
        <div className="flex flex-col items-center gap-[54px] self-stretch sm:gap-[27px]">    
          <div className="flex h-[558px] w-[86%] items-end justify-center rounded-[12px] bg-[url(/public/images/img_group_4834.png)] bg-cover bg-no-repeat py-8 md:h-auto md:w-full md:px-5 sm:p-5">        <div className="container-xs mt-[470px] flex justify-center px-14 md:px-5">         
             <Button size="xs" className="min-w-[128px] rounded-[10px] px-4 font-kantumruypro font-semibold">          
                Explore Baku       
                   </Button>       
                    </div>      
                    </div>     
                     <div className="container-xs px-5">      
                        <div className="mr-2.5 flex flex-col gap-[60px] md:mr-0 sm:gap-[30px]">     
                               <div className="flex flex-col items-start gap-0.5">        
                                    <Heading size="heading8xl" as="h3" className="text-[48px] font-black text-black-900 md:text-[44px] sm:text-[38px]" >
                                                    Attractions, activities, and experiences           
                                                     </Heading>  
                                                               <Text size="text6xl" as="p" className="text-[24px] font-normal text-black-900 md:text-[22px]"> 
                                                                             Discover new attractions and experiences to match your interests and travel style        
                                                                                 </Text>        
                                                                                   </div>        
                                                                                     <div className="flex rounded-lg bg-amber-600 md:flex-col">        
                                                                                          <Input size="xs"  name="background_one" 
                                                                                            placeholder={`Where are you going?`} 
                                                                                            prefix={<Img src="images/img_cut_black_900_01.svg"
                                                                                             alt="Cut" className="h-[20px] w-[20px]" />}        
                                                                                                   className="w-[44%] gap-3.5 rounded-bl rounded-tl px-3.5 !text-gray-700 md:w-full md:px-5"      
                                                                                                         />           
                                                                                                          <div className="flex flex-1 justify-center gap-1 md:flex-col md:self-stretch md:px-5">             
                                                                                                          <div className="flex-1 rounded-br rounded-tr bg-white-a700 md:self-stretch">            
                                                                                                                <div className="flex items-center gap-[15px] rounded bg-white-a700 px-4 py-3">       
                                                                                                                             <Img src="images/img_calendar_black_900_01_1.svg" alt="Calendar" className="h-[20px] w-[20px]" />             
                                                                                                                                  <Text size="text3xl" as="p" className="self-end text-[16px] font-normal text-gray-700">           
                                                                                                                                             Select your dates                
                                                                                                                                               </Text>               
                                                                                                                                                </div>             
                                                                                                                                                 </div>           
                                                                                                                                                    <Button        
                                                                                                                                                            size="6xl"             
                                                                                                                                                               shape="round"        
                                                                                                                                                                       className="min-w-[126px] rounded border border-solid border-red-900 px-[31px] sm:px-5"    
                                                                                                                                                                                 >           
            Search            
              </Button>         
                 </div>         
                  </div>       
                   </div>     
                    </div>  
                      </div> 
                       );}
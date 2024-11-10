import { Helmet } from "react-helmet"; 
import { Img, Heading, Button, Text, RatingBar, CheckBox, Switch, SelectBox, DatePicker } from "../../components";
import DepartureSchedule from "../../components/DepartureSchedule"; 
import FlightDetails21 from "../../components/FlightDetails21"; 
import FlightDetails3 from "../../components/FlightDetails3";
import HotelRow from "./HotelRow"; 
import HotelRowallmaterial from "./HotelRowallmaterial"; 
import React, { Suspense } from "react"; 
const data = [ 
    { airlineLogo: "images/img_image_sc_fzoyav.png", 
        ecoSaverButtonText: "Eco Saver", 
        airlineName: "Emirates Airline", 
        operatedByText: "Partially operated by Flydubai",
        departureTime: "23:45", 
        departureAirportCode: "KHI", 
        diva46d6box: "1", 
        flightDuration: "11h 10m", 
        arrivalTime: "12:55", 
        arrivalDayOffset: "+1", 
        arrivalAirportCode: "BKK", 
        currency: "USD", 
        price: "863"},
         { airlineLogo: "images/img_image_sc_fzoyav_48x48.png", 
            ecoSaverButtonText: "Eco Saver",
             airlineName: "Emirates Airline", 
             operatedByText: "Partially operated by Flydubai",
              departureTime: "04:40",
               departureAirportCode: "KHI",
                diva46d6box: "1", 
                flightDuration: "11h 55m", arrivalTime: "12:55", arrivalDayOffset: "+1", arrivalAirportCode: "BKK", currency: "USD", price: "707", },{airlineLogo: "images/img_image_sc_fzoyav.png", ecoSaverButtonText: "Eco Saver", airlineName: "Emirates Airline", operatedByText: "Partially operated by Flydubai", departureTime: "03:30", departureAirportCode: "KHI", diva46d6box: "1", flightDuration: "12h 35m", arrivalTime: "12:55", arrivalDayOffset: "+1", currency: "USD", arrivalAirportCode: "BKK", price: "863",},
    { airlineLogo: "images/img_image_sc_fzoyav.png", ecoSaverButtonText: "Eco Saver", airlineName: "Emirates Airline", operatedByText: "Partially operated by Flydubai", departureTime: "03:00", departureAirportCode: "KHI", diva46d6box: "1", flightDuration: "13h 5m", arrivalTime: "12:55", arrivalDayOffset: "+1", arrivalAirportCode: "BKK", currency: "USD", price: "833",},{ airlineLogo: "images/img_image_sc_fzoyav.png", ecoSaverButtonText: "Eco Saver", airlineName: "Emirates Airline", operatedByText: "Partially operated by Flydubai", departureTime: "16:25", departureAirportCode: "KHI", diva46d6box: "1", flightDuration: "13h 10m", arrivalTime: "07:35", arrivalDayOffset: "+1", currency: "USD", arrivalAirportCode: "BKK", price: "863", },{airlineLogo: "images/img_image_sc_fzoyav.png", ecoSaverButtonText: "Eco Saver", airlineName: "Emirates Airline", operatedByText: "Partially operated by Flydubai", departureTime: "03:30", departureAirportCode: "KHI", diva46d6box: "1", flightDuration: "13h 10m", arrivalTime: "12:55", arrivalDayOffset: "+1", arrivalAirportCode: "BKK", currency: "USD", price: "863",},
    {airlineLogo: "images/img_image_sc_fzoyav.png", ecoSaverButtonText: "Eco Saver", airlineName: "Emirates Airline", operatedByText: "Partially operated by Flydubai", departureTime: "03:00", departureAirportCode: "KHI", diva46d6box: "1", flightDuration: "13h 40m", arrivalTime: "12:55", arrivalDayOffset: "+1", arrivalAirportCode: "BKK", currency: "USD", price: "833",},{airlineLogo: "images/img_image_sc_fzoyav_1.png", ecoSaverButtonText: "Eco Saver", airlineName: "Emirates Airline", operatedByText: "Partially operated by Flydubai", departureTime: "04:15", departureAirportCode: "KHI", diva46d6box: "1", flightDuration: "12h 30m", arrivalTime: "12:55", arrivalDayOffset: "+1", arrivalAirportCode: "BKK", currency: "USD", price: "863",},];
    const data1 = [ { airlineLogo: "images/img_image_sc_fzoyav.png", ecoSaverButtonText: "Eco Saver", airlineName: "Emirates Airline", operatedByText: "Partially operated by Flydubai", departureTime: "23:45", departureAirportCode: "KHI", diva46d6box: "1", flightDuration: "11h 10m", arrivalTime: "12:55", arrivalDayOffset: "+1", arrivalAirportCode: "BKK", currency: "USD", price: "863"}, { airlineLogo: "images/img_image_sc_fzoyav_48x48.png", ecoSaverButtonText: "Eco Saver", airlineName: "Emirates Airline", operatedByText: "Partially operated by Flydubai", departureTime: "04:40", departureAirportCode: "KHI", diva46d6box: "1", flightDuration: "11h 55m", arrivalTime: "12:55", arrivalDayOffset: "+1", arrivalAirportCode: "BKK", currency: "USD", price: "707", },{airlineLogo: "images/img_image_sc_fzoyav.png", ecoSaverButtonText: "Eco Saver", airlineName: "Emirates Airline", operatedByText: "Partially operated by Flydubai", departureTime: "03:30", departureAirportCode: "KHI", diva46d6box: "1", flightDuration: "12h 35m", arrivalTime: "12:55", arrivalDayOffset: "+1", currency: "USD", arrivalAirportCode: "BKK", price: "863",},
    { airlineLogo: "images/img_image_sc_fzoyav.png", ecoSaverButtonText: "Eco Saver", airlineName: "Emirates Airline", operatedByText: "Partially operated by Flydubai", departureTime: "03:00", departureAirportCode: "KHI", diva46d6box: "1", flightDuration: "13h 5m", arrivalTime: "12:55", arrivalDayOffset: "+1", arrivalAirportCode: "BKK", currency: "USD", price: "833",},{ airlineLogo: "images/img_image_sc_fzoyav.png", ecoSaverButtonText: "Eco Saver", airlineName: "Emirates Airline", operatedByText: "Partially operated by Flydubai", departureTime: "16:25", departureAirportCode: "KHI", diva46d6box: "1", flightDuration: "13h 10m", arrivalTime: "07:35", arrivalDayOffset: "+1", currency: "USD", arrivalAirportCode: "BKK", price: "863", },{airlineLogo: "images/img_image_sc_fzoyav.png", ecoSaverButtonText: "Eco Saver", airlineName: "Emirates Airline", operatedByText: "Partially operated by Flydubai", departureTime: "03:30", departureAirportCode: "KHI", diva46d6box: "1", flightDuration: "13h 10m", arrivalTime: "12:55", arrivalDayOffset: "+1", arrivalAirportCode: "BKK", currency: "USD", price: "863",},
    {airlineLogo: "images/img_image_sc_fzoyav.png", ecoSaverButtonText: "Eco Saver", airlineName: "Emirates Airline", operatedByText: "Partially operated by Flydubai", departureTime: "03:00", departureAirportCode: "KHI", diva46d6box: "1", flightDuration: "13h 40m", arrivalTime: "12:55", arrivalDayOffset: "+1", arrivalAirportCode: "BKK", currency: "USD", price: "833",},{airlineLogo: "images/img_image_sc_fzoyav_1.png", ecoSaverButtonText: "Eco Saver", airlineName: "Emirates Airline", operatedByText: "Partially operated by Flydubai", departureTime: "04:15", departureAirportCode: "KHI", diva46d6box: "1", flightDuration: "12h 30m", arrivalTime: "12:55", arrivalDayOffset: "+1", arrivalAirportCode: "BKK", currency: "USD", price: "863",},];const dropDownOptions = [ { label: "Option1", value: "option1" }, { label: "Option2", value: "option2" }, { label: "Option3", value: "option3" }, ];
    
    export default function HotelPage() {
         return (
    <> 
    <Helmet>
         <title>BookForme</title> 
         <meta name="description" content="web site created using create-react-app" /> 
         </Helmet> 
    <div className="w-full bg-white-a700">
         <div className="bg-white-a700">
             <div>
                <header>
                 <div className="relative z-[1] flex justify-between gap-5 bg-red-800 px-6 md:flex-col sm:px-5">
                    <div className="ml-[46px] flex w-[36%] items-start justify-center gap-7 md:ml-0 md:w-full sm:flex-col">
                         <Img
                          src="images/img_bookforme_02_03_60x74.png"
                           alt="Bookforme02thre" 
                           className="h-[60px] w-[16%] self-center object-contain sm:w-full" />  

                         <div className="flex flex-1 flex-col items-center sm:self-stretch"> 
                            <div className="relative z-[2] flex w-[32%] justify-center md:w-full"> 
                                <div className="flex w-full flex-col items-start"> 
                                  <div className="flex rounded-sm bg-amber-600_01 p-0.5"> 
                                    <Text size="textxs" as="p" className="font-arial text-[10px] font-normal text-white-a700"> New! </Text>
                                    </div>
                                             <Img src="images/img_div_6x12.png" alt="Div" className="relative mt-[-4px] h-[6px] w-[10%] object-contain" /> 
                                             <Text as="p" className="text-[14px] font-normal text-white-a700"> Coupons & Deals </Text> 
                                             </div>
                                              </div> 
                                              <ul className="relative Imt-[-20px] flex flex-wrap gap-[154px] md:gap-5">
                                                 <li> 
                                                    <Text as="p" className="text-[14px] font-normal text-white-a700">
                                                     <a href="#"> Hotels & Homes </a> 
                                                     </Text>
                                                     </li>
                                                      <li> <a href="#"> 
                                                        <Text as="p" className="text-[14px] font-normal text-white-a700"> Apartments </Text>
                                                         </a> 
                                                         </li> 
                                                         </ul>
                                                          </div>
    <a href="#"> 
        <Img src="images/img_icon_white_a700_20x20.svg" alt="Icon" className="mb-4 h-[20px] w-[20px] self-end sm:w-full sm:self-auto" />
         </a>
          </div> 
          <div className="flex w-[42%] items-center justify-center md:w-full sm:flex-col">
             <div className="flex flex-1 items-center justify-center gap-3.5 sm:flex-col sm:self-stretch">
                 <Button size="4x1" shape="round" className="min-w-[116px] rounded pl-3 pr-2"> List your place </Button>
                  <div className="flex w-[20%] items-center justify-between gap-5 sm:w-full">
                     <a href="#"> 
                        <Img src="images/img_image_flag_st.png" alt="Imageflagst" className="h-[20px] object-cover" /> 
                        </a> 
                        <Heading size="headinglg" as="p" className="text-[14px] font-semibold text-white-a700"> USD </Heading>
                         </div>
                          <div className="flex flex-1 items-center justify-center gap-2 py-1 sm:self-stretch">
                             <Button size="4x1" shape="round" className="min-w-[66px] rounded px-2.5"> Sign in </Button>
                              <Button size="4x1" shape="round" className="min-w-[120px] self-end rounded pl-3 pr-1.5"> Create account </Button>
                               </div>
                                </div>
    <a href="#"> 
        <Img src="images/img_icon_white_a700_24x24.svg" alt="Icon" className="ml-6 h-[24px] w-[24px] sm:m1-0 sm:w-full" /> 
        </a> 
        <Img alt="Megaphone" src="images/img_megaphone_white_a700_2.svg" className="ml-8 h-[54px] w-[8%] object-contain sm:ml-0 sm:w-full" /> 
         </div>
          </div>
           <div className="flex justify-center border-t border-solid border-blue_gray-50 bg-red-800 py-2.5 shadow-md">
             <div className="container-xs flex justify-end px-[34px] md:flex-col md:px-5"> 
                <div className="flex w-[28%] rounded-lg bg-blue_gray-50 px-3.5 md:w-full">
                 <div className="flex w-[42%] items-center gap-2.5 md:w-full"> 
                    <a href="#"> <Img src="images/img_contrast_blue_gray_900_04.svg" alt="Contrast" className="h-[20px] w-[20px]" /> </a> 
                 <div className="flex flex-1 flex-col items-center gap-0.5">
                     <Heading size="headings" as="p" className="text-[12px] font-bold text-gray-900"> Karachi (KHI) </Heading>
                  <Text size="textmd" as="p" className="text-[12px] font-normal text-red-800"> 5,500 choices </Text>
    </div>
     </div>
      </div> 
    <div className="ml-1.5 flex w-[26%] justify-center rounded-[12px] bg-blue_gray-900_02 p-2 md:m1-0 md:w-full"> 
        <div className="flex w-full gap-[22px]"> 
            <DatePicker name="buttona46dsix" placeholder={ `Mon, 18 Nov`} className="flex w-full gap-2.5 bg-transparent pr-1.5 text-[14px] text-white-a700" />
             <DatePicker name="buttona46dsix" placeholder={  `Thu, 21 Nov`} className="flex w-full gap-1.5 bg-transparent px-1 text-[14px] text-white-a700" /> 
             </div>
              </div> 
              <SelectBox shape="round"
               indicator={<img src="images/img_next_1.png" alt="Next 1" className="h-[20px] w-[20px]" />} 
               getoptionLabel={(e) => 
                ( 
               <>
                <div className="flex items-center"> <Img src="images/img_user_blue_gray_900_04_1.svg" alt="User" className="h-[20px] w-[20px]" /> 
               <span>{e.label}

               </span>
                </div> </> )}
              name="roomCounter" 
              placeholder={`1 Room`} 
              options={dropDownOptions} 
                className="ml-1.5 w-[22%] gap-2 rounded-lg md:ml-0 md:w-full" 
                /> 
                <Button size="4x1" className="ml-2.5 min-w-[100px] self-end rounded-[10px] px-6 md:ml-0 md:self-auto sm:px-5"> Search </Button> 
                </div>
                 </div>
                  </header>
                   <div className="flex flex-col items-center bg-gray-50_01"> 
                    <div className="container-xs mb-12 md: px-5"> 
                        <div className="flex items-start gap-[18px] px-3 md:flex-col"> 
                            <div className="mt-3.5 flex w-[22%] flex-col items-start gap-2 md:w-full"> 
                                <Text size="text3x1" as="p" className="text-[16px] font-normal text-gray-900"> Airlines </Text> 
                                <div className="self-stretch"> 
                                    <div> 
                                        <div className="mr-1.5 flex items-center justify-between gap-5 md:mr-0">
                                     <Text as="p" className="text-[14px] font-normal text-blue_gray-900_02"> Select all airlines </Text>
                                      <Switch value={false} /> 
                                      </div>
    <div className="flex flex-col items-start gap-1.5">
         <CheckBox
          name="asianaairlines" 
          label="Asiana Airlines"
           id="asianaairlines" className="gap-2 text-[14px] text-gray-900" />
          <CheckBox name="bangkokairways" label="Bangkok Airways" id="bangkokairways" className="gap-2 text-[14px] text-gray-900" />
           <CheckBox name="emiratesairline" label="Emirates Airline" id="emiratesairline" className="gap-2 text-[14px] text-gray-900" /> 
           </div> 
           <div className="ml-10 mr-[42px] mt-1 md:mx-0"> 
            <div className="flex justify-center"> 
             <Text as="p" className="text-[14px] font-normal text-red-800"> Show all 10 airlines </Text>
              </div>
               </div>
    <div className="mt-3.5">
         <div className="h-px bg-blue_gray-200_01" />
          <div className="relative z-[3] mt-3.5 flex items-start justify-center"> 
            <Heading as="h1" className="mb-2 text-[16px] font-bold text-gray-900"> Stops </Heading>
             <div className="flex flex-1 justify-end"> 
                <Heading size="headinglg" as="h2" className="text-[14px] font-bold text-amber-600_01"> Clear </Heading> 
                </div>
                 </div> 
                 <div className="relative mt-[-2px] flex flex-col items-start gap-1.5">
                     <CheckBox name="direct" label="Direct" id="direct" className="gap-2 text-[14px] text-gray-900" />
                      <CheckBox name="1stop" label="1 Stop" id="stop" className="gap-2 text-[14px] text-gray-900" />
    <CheckBox name="2stops" label="2 Stops+" id="stops" className="gap-2 text-[14px] text-gray-900" /> 
    </div> 
    <div className="mt-3 h-px bg-blue_gray-200_01" />
     </div> 
     <div className="mr-1.5 mt-3 flex items-start justify-center md:mr-0">
         <Heading as="h3" className="mb-2 text-[16px] font-bold text-gray-900"> Times </Heading>
          <div className="flex flex-1 justify-end"> <Heading size="headinglg" as="h4" className="text-[14px] font-bold text-amber-600_01"> Clear 
            </Heading> 
            </div> 
            </div> 
            <div className="flex flex-col gap-2 md:flex-row sm:flex-col"> 
                <DepartureSchedule departureText="Departure 00:00 - 24:00" startTimeText="00:00" endTimeText="24:00" /> 
                <div className="h-px w-[226px] bg-blue_gray-200_01" /> 
                <DepartureSchedule departureText="Arrival 00:00 - 24:00" startTimeText="00:00" endTimeText="24:00" />
    </div>
     <div className="mr-1.5 mt-[42px] flex justify-between gap-5 md:mr-0">
         <Heading as="h5" className="text-[16px] font-bold text-gray-900"> Price per person </Heading>
          <div className="flex"> <Heading size="headinglg" as="h6" className="text-[14px] font-bold text-amber-600_01"> Clear </Heading>
           </div> 
           <div className="mr-1.5 mt-2 flex flex-col items-start md:mr-0"> 
            </div> <Text as="p" className="text-[14px] font-normal text-gray-900"> Up to USD7,800 
                <div className="mt-4 h-[4px] w-full self-stretch rounded-sm bg-gradient3" /> 
                </Text> <div className="mt-7 h-px w-full self-stretch bg-blue_gray-200_01" />
                 <div className="mt-3 flex items-start self-stretch">
                     <Heading as="h6" className="mb-2 text-[16px] font-bold text-gray-900"> Duration </Heading>
                      <div className="flex flex-1 justify-end"> <Heading size="headinglg" as="p" className="text-[14px] font-bold text-amber-600_01"> Clear
                         </Heading> 
                         </div>
                          </div> 
                          <Text as="p" className="text-[14px] font-normal text-gray-900"> Under 72 hours</Text>
    <div className="mt-[18px] h-[4px] w-full self-stretch rounded-sm bg-gradient3" />
     </div> 
     <div className="mr-1.5 mt-7 flex flex-col gap-2.5 md:mr-0"> 
        <div className="h-px bg-blue_gray-200_01" /> 
        <div className="flex justify-center"> 
            <Heading as="h6" className="text-[16px] font-bold text-gray-900"> Cabin class </Heading>
             <div className="flex flex-1 justify-end self-end"> <Heading size="headinglg" as="p" className="text-[14px] font-bold text-amber-600_01"> Clear </Heading> 
             </div> 
             </div> 
             <div className="flex flex-col items-start gap-1.5"> 
                <CheckBox name="economy" label="Economy" id="economy" className="gap-2 text-[14px] text-gray-900" />
                 <CheckBox name="mixed" label="Mixed" id="mixed" className="gap-2 text-[14px] text-gray-900" />
                  </div> 
                  </div>
    </div>
    </div> 
    </div>
     <div className="mt-3.5 flex flex-1 flex-col items-start gap-1.5 self-center md:self-stretch"> 
        <div className="mt-[132px] flex w-[92%] items-end justify-center rounded-1g border border-solid border-indigo-100 bg-white-a700 px-[46px] md:w-full md:px-5 sm:flex-col">
             </div> <Text size="text3x1" as="p" className="self-center text-[16px] font-normal text-black-900_01"> Best match </Text>
                <div className="mt-[22px] flex flex-1 items-start justify-center gap-[22px] px-14 md:px-5 sm:flex-col sm:self-stretch"> 
                     <Text size="text3x1" as="p" className="text-[16px] font-normal text-gray-900"> Lowest price first
                         
                             </Text> 
                             <div className="flex flex-col gap-5"> 
            <div className="mx-[26px] flex items-start justify-center gap-2 md:mx-0">
                 <Text size="text3x1" as="p" className="self-center text-[16px] font-normal text-red-800"> Top reviewed </Text>
                  <Img src="images/img_next_1.png" alt="Nextone" className="h-[14px] w-[14px] object-cover" /> 
                  </div> 
                  <div className="h-[2px] bg-amber-600_01" /> 
                  </div> 
                  </div>
    <Text size="text3x1" as="p" className="text-[16px] font-normal text-gray-900"> Hot Deals! </Text> 
    <Text size="text3x1" as="p" className="mb-5 text-[16px] font-normal text-gray-900"> 
         Sort by
         </Text>
         </div>
          <div className="flex flex-col items-center gap-1 self-stretch"> 
            <div className="self-stretch py-1.5"> 
                <div className="ml-1.5 mr-[62px] flex flex-col gap-3 md:mx-0"> 
                    <Suspense fallback={<div>Loading feed...</div>}> {data.map((d, index) => ( <FlightDetails3 {...d} key={"listemirates" + index} /> ))}
                     </Suspense>
                      </div> 
                      <div className="mt-4 flex flex-col gap-3.5 px-3">
                         <div className="flex flex-col items-start"> 
                            <Heading as="h6" className="text-[16px] font-semibold text-blue_gray-900_02"> Need a hotel for your Bangkok trip? </Heading>
                             <Heading size="headinglg" as="p" className="text-[14px] font-semibold text-blue_gray-900_02"> 18 Nov 21 Nov 1 Adult </Heading>
    </div>
     <div className="flex justify-center gap-[13px] md: flex-col"> 
        <div className="flex w-[70%] gap-3 md:w-full md: flex-row sm: flex-col">
             <div className="flex w-[32%] flex-col justify-center rounded-1g bg-white-a700 sm:w-full">
                 <Img src="images/img_image_sc_fzoyav_122x180.png" alt="Nana Hotel" className="h-[122px] object-cover" />
                  <div className="flex flex-col items-start gap-[22px] px-2 py-1"> 
                    <Text className="mt-1.5 text-[14px] font-semibold text-blue_gray-900_02"> NANA Hotel Bangkok </Text> 
                    <div className="flex flex-col justify-center self-stretch"> <RatingBar value={5} isEditable={true}
                     color="#ffb200" activeColor="#ffb200" size={8} className="flex gap-2.5" />
                     <div className="relative z-[19] mt-2 flex flex-wrap">
                         <Text className="text-[14px] font-semibold text-amber-600_01">7.8</Text>
                      <Text className="text-[14px] font-semibold text-amber-600_01">Very good</Text>
                       </div>
    <div className="relative mt-[-4px] flex flex-wrap items-center justify-end"> 
        <Text className="self-end text-[12px] font-semibold text-red-700">USD</Text> 
        <Text className="text-[16px] font-semibold text-red-700">42</Text> 
        </div> 
        </div> 
        </div> 
        </div>
         <div className="flex w-[32%] flex-col justify-center rounded-1g bg-white-a700 sm:w-full"> 
            <Img src="images/img_image_sc_fzoyav_2.png" alt="Imagescfzoyav" className="h-[122px] object-cover" />
             <div className="flex flex-col gap-1 p-1">
                 <div className="mt-1 flex flex-col items-start">
                 <Text className="text-[14px] font-semibold text-blue_gray-900_02"> Suvarnabhumi Ville{" "}
                     </Text> <Text className="text-[14px] font-semibold text-blue_gray-900_02"> Airport Hotel </Text> 
                     </div>
    <div>
         <Img src="images/img_div_a46d6_box_amber_600_01.svg" alt="Diva46d6box" className="h-[14px] w-full" /> 
         <div className="relative z-20 flex flex-wrap"> 
            <Text className="text-[14px] font-semibold text-amber-600_01">8.3</Text> 
         <Text className="text-[14px] font-semibold text-amber-600_01">Excellent</Text> 
         </div> 
         <div className="relative mt-[-2px] flex flex-wrap items-center justify-end"> 
            <Text className="self-end text-[12px] font-semibold text-red-700">USD</Text>
             <Text className="text-[16px] font-semibold text-red-700">33</Text> 
             </div> 
             </div>
              </div>
               </div>
                <div className="flex w-[32%] flex-col justify-center rounded-1g bg-white-a700 sm:w-full"> 
                    <Img src="images/img_image_sc_fzoyav_3.png" alt="Imagescfzoyav" className="h-[122px] object-cover" />
    <div className="flex flex-col items-start justify-center gap-[22px] p-1.5"> 
        <Text className="mt-1 text-[14px] font-semibold text-blue_gray-900_02"> D&D Inn Khaosan </Text>
         <div className="self-stretch"> <Img src="images/img_div_a46d6_box_amber_600_01.svg" alt="Diva46d6box" className="h-[14px] w-full" />
          <div className="relative z-[21] flex flex-wrap">
             <Text className="text-[14px] font-semibold text-amber-600_01">7.4</Text> 
             <Text className="text-[14px] font-semibold text-amber-600_01">Very good</Text>
              </div> 
              <div className="relative mt-[-4px] flex flex-wrap items-center justify-end">
                 <Text className="self-end text-[12px] font-semibold text-red-700">USD</Text>
                  <Text className="text-[16px] font-semibold text-red-700">26</Text>
                   </div> 
                   </div> 
                   </div>
                    </div>
                     </div>
    <div className="flex w-[22%] flex-col items-center justify-center gap-1 rounded-1g bg-white-a700 px-14 py-[82px] md:w-full md:p-5"> 
        <Button size="3x1" shape="circle" className="w-[44px] rounded-[22px] px-2.5"> <Img src="images/img_group_36.png" /> </Button>
         <a href="#"> <Heading size="headinglg" as="p" className="text-[14px] font-semibold text-amber-600_01"> See all </Heading> 
         </a>
          </div>
           </div>
           </div>
            <div className="ml-1.5 mr-[62px] mt-[30px] flex flex-col gap-2.5 md:mx-0"> 
                
                <Suspense fallback={<div>Loading feed...</div>}> {data1.map((d, index) => 
                    (  
                    <FlightDetails21 {...d} key={"listeighthundre" + index} /> ))}
                 </Suspense> 
                 </div> 
                 </div> 
                 <Img src="images/img_user_gray_400.svg" alt="User" className="mb-3 h-[6px]" /> 
                 </div>
                  </div>
                  </div>
    </div> 
    </div> 
    <div className="relative z-[52]">
         <HotelRow /> <HotelRowallmaterial /> 
    </div> 
    </div> 
    </div> 
     
    </> 
)
;}
    
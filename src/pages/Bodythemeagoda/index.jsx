import { Helmet } from "react-helmet";
import { Text, Button, Img, Input } from "../../components";
import BodythemeagodaColumndismiss from "./BodythemeagodaColumndismiss";
import React from "react";

export default function BodythemeagodaPage() {
  return (
    <>
    <Helmet>
      <title>BookForme</title>
      <meta name="description" content="web site created using create-react-app" />
    </Helmet>
    <div className="w-full bg-white-a700">
      <div>
        <div className="relative z-[1] bg-gray-50">
          <div className="mb-[74px] flex flex-col items-center">
            <header className="flex items-center justify-center self-stretch bg-red-800 py-1.5">
              <div className="container-xs flex justify-center px-[22px] md:px-5">
                <div className="flex w-full items-center md:flex-col">
                  <Img
                    src="images/img_bookforme_02_03_60x74.png"
                    alt="Bookforme02thre"
                    className="relative z-[3] h-[60px] w-[6%] object-contain md:w-full"
                  />
                  <div className="relative ml-[-74px] flex flex-1 items-center justify-end gap-[99px] px-2 md:ml-0 md:flex-col md:self-stretch">
                    <div className="flex w-[74%] justify-center gap-[47px] md:w-full md:flex-col">
                      <div className="flex w-[54%] justify-center md:w-full">
                        <div className="flex w-[28%] flex-col items-center">
                          <Text
                            size="textmd"
                            as="p"
                            className="flex h-[24px] w-[24px] items-center justify-center rounded-[12px] bg-white-a700 text-center font-arial text-[12px] font-normal text-black-900_01"
                          >
                            1
                          </Text>
                          <Text as="p" className="text-[14px] font-normal text-white-a700">
                            Passenger details
                          </Text>
                        </div>
                        <div className="relative ml-[-48px] flex flex-1 flex-col items-start justify-center">
                          <div className="flex w-[80%] items-center justify-center md:w-full">
                            <div className="relative z-[2] h-[4px] flex-1 bg-white-a700" />
                            <Text
                              size="textmd"
                              as="p"
                              className="flex h-[24px] w-[24px] items-center justify-center rounded-[12px] bg-white-a700 text-center font-arial text-[12px] font-normal text-black-900_01"
                            >
                              2
                            </Text>
                          </div>
                          <Text as="p" className="self-end text-[14px] font-normal text-white-a700">
                            Payment information
                          </Text>
                        </div>
                      </div>
                      <div className="flex w-[36%] flex-col items-center justify-center md:w-full">
                        <Img
                          src="images/img_span_spanstyle.svg"
                          alt="Spanspanstyle"
                          className="h-[24px] w-full md:h-auto"
                        />
                        <Text as="p" className="text-[14px] font-normal text-white-a700">
                          Booking is confirmed!
                        </Text>
                      </div>
                    </div>
                    <Button
                      size="5xl"
                      className="min-w-[78px] rounded-[10px] border border-solid border-red-800 px-[11px] font-semibold uppercase"
                    >
                      Sign in
                    </Button>
                  </div>
                </div>
              </div>
            </header>
            <div className="container-xs px-4 md:px-5">
              <div className="flex items-center gap-1 md:flex-col">
                <div className="flex flex-1 flex-col gap-2 md:self-stretch">
                  <div className="mx-2 flex items-start bg-white-a700 p-1.5 md:mx-0 md:flex-col">
                    <Img
                      src="images/img_image_box_sc_kv6pi1_0.svg"
                      className="mt-1.5 h-[50px] w-[8%] object-contain md:w-full"
                      alt="Imageboxsc"
                    />
                    <div className="mb-3.5 flex flex-1 flex-col items-center md:self-stretch">
                      <div className="flex flex-wrap justify-between gap-5 self-stretch">
                        <Text as="p" className="text-[14px] font-normal text-amber-600_01">
                          Sign in for faster booking!
                        </Text>
                        <Text as="p" className="text-[14px] font-normal text-amber-600_01">
                          <a href="#">Sign in</a>
                        </Text>
                      </div>
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[12px] font-normal leading-[18px] text-blue_gray-900_02"
                      >
                        Signing into your Bookforme account lets us pre-fill your forms and saved credit cards, so you can complete your
                        <br />
                        booking with less typing!
                      </Text>
                    </div>
                  </div>
                  <div className="mb-1.5">
                    <div className="mx-2 rounded-[16px] bg-white-a700 px-2.5 py-3.5 md:mx-0">
                      <div className="flex flex-col items-start justify-center">
                        <Text
                          size="textmd"
                          className="ml-1.5 text-[12px] font-normal text-blue_gray-600_01 md:ml-0"
                          as="p"
                        >
                          For all bookings
                        </Text>
                        <div className="flex flex-col items-start self-stretch">
                          <Text
                            size="text4x1"
                            as="p"
                            className="ml-1.5 text-[20px] font-normal text-blue_gray-900_03 md:ml-0"
                          >
                            Contact details
                          </Text>
                          <Text
                            as="p"
                            className="ml-1.5 mt-1.5 text-[14px] font-normal text-blue_gray-900_03 md:ml-0"
                          >
                            This is where your confirmation will be sent
                          </Text>
                          <div className="mt-3 flex flex-col items-start gap-2 self-stretch">
                            <Text as="p" className="ml-1.5 text-[14px] font-normal text-red-800_01 md:ml-0">
                              *Required field
                            </Text>
                            <div className="self-stretch">
                              <div className="mt-1.5">
                                <div className="mx-1.5 flex gap-2.5 md:mx-0 md:flex-col">
                                  <Input
                                    shape="round"
                                    name="fieldseta46dsix"
                                    className="w-full rounded-1g border border-solid border-blue_gray-600_51 px-4"
                                  />
                                  <Input
                                    shape="round"
                                    name="fieldseta46dsix"
                                    className="w-full rounded-1g border border-solid border-blue_gray-600_51 px-4"
                                  />
                                </div>
                                <div className="mx-1.5 mt-3 flex gap-2.5 md:mx-0 md:flex-col">
                                  <Input
                                    shape="round"
                                    name="fieldseta46dsix"
                                    className="w-full rounded-1g border border-solid border-blue_gray-600_51 px-4"
                                  />
                                  <Input
                                    size="md"
                                    shape="round"
                                    name="diva46d6box one"
                                    placeholder="United States"
                                    className="w-full rounded-lg border border-solid border-blue_gray-600_51 px-4"
                                  />
                                </div>
                                <div className="mx-1.5 mt-2.5 flex md:mx-0">
                                  <Text
                                    size="textmd"
                                    as="p"
                                    className="font-arial text-[12px] font-normal text-blue_gray-600_01"
                                  >
                                    Phone number *
                                  </Text>
                                </div>
                                <div className="relative mt-[-2px] flex gap-[13px] px-1.5">
                                  <Input
                                    shape="round"
                                    name="phoneNumber"
                                    className="w-[24%] self-end rounded-1g border border-solid border-blue_gray-600_51 px-4"
                                  />
                                  <div className="h-[58px] w-[24%] self-end rounded-1g border border-solid border-blue_gray-600_51 bg-white-a700" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mx-2 mt-3.5 flex items-center justify-center overflow-auto border border-solid border-gray-300 bg-white-a700 py-3 md:mx-0 md:flex-col" />
                      <div className="flex w-full items-center justify-center px-2 md:flex-col">
                        <div className="flex w-[62%] flex-col justify-start">
                          <Text
                            size="textmd"
                            as="p"
                            className="self-start text-[14px] font-normal text-blue_gray-900_03"
                          >
                            Payment method
                          </Text>
                          <Text
                            size="textmd"
                            as="p"
                            className="self-start mt-1.5 text-[12px] font-normal text-blue_gray-900_02"
                          >
                            1 credit card is required
                          </Text>
                        </div>
                      </div>
                      <div className="mx-1.5 flex flex-col items-start justify-center mt-1.5 self-stretch">
                        <Text as="p" className="text-[12px] font-normal text-red-800_01">
                          *Required field
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <BodythemeagodaColumndismiss />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

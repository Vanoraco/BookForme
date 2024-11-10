import React from "react";
import { Button, Img, Text, Heading } from "./..";

export default function TourDetails1({
  backgroundImage = "images/img_295609969_jpg.png",
  tourTitle = (
    <>
      Gabala & Shamakhi Tour/ All Entrance Fees
      <br />
      Included
    </>
  ),
  location = "Baku",
  bestsellerTag = "#2 Best seller",
  tourDescription = (
    <>
      Are you ready to embark on a journey of discovery? Our group tour of
      <br />
      Gabala and Shamakhi is the perfect opportunity...
    </>
  ),
  ratingScore = "4.1",
  ratingDescription = "Very good",
  reviewCount = "(17 reviews)",
  cancellationPolicy = "Free cancellation available",
  priceLabel = "From",
  priceAmount = "US$41",
  availabilityInfo = "Available starting today",
  availabilityButtonText = "See availability",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col items-start gap-4 p-4 border-gray-200 border border-solid bg-white-a700 flex-1 rounded-lg`}
    >
      <div className="w-[26%] rounded bg-gray-100_02">
        <Img
          src={backgroundImage}
          alt="Tour Image"
          className="h-[174px] w-full rounded object-cover sm:h-auto"
        />
      </div>

      <div className="flex flex-1 flex-col items-end gap-1 self-center sm:gap-1">
        <div className="flex flex-col justify-center gap-1 self-stretch sm:gap-1">
          <Heading
            size="heading3x1"
            className="font-roboto text-[20px] font-bold leading-7 text-gray-900_02 sm:text-[17px]"
            as="h5"
          >
            {tourTitle}
          </Heading>

          <div className="flex flex-wrap items-center gap-[9px]">
            <Text as="p" className="font-roboto text-[14px] font-normal text-gray-700">
              {location}
            </Text>
            <Text
              size="textmd"
              as="p"
              className="flex justify-center rounded bg-blue-900 p-0.5 font-roboto text-[12px] font-normal text-white-a700"
            >
              {bestsellerTag}
            </Text>
          </div>

          <Text as="p" className="font-roboto text-[14px] font-normal leading-5 text-gray-900_02">
            {tourDescription}
          </Text>
        </div>

        <div className="self-stretch">
          <div className="flex justify-end">
            <div className="flex-1">
              <div className="flex flex-wrap items-center">
                <Img src="images/defaultNoData.png" alt="Rating Icon" className="h-[16px] w-[16px]" />
                <Heading size="headingmd" as="p" className="font-roboto text-[13.67px] font-bold text-gray-900_02">
                  {ratingScore}
                </Heading>
                <Heading size="headinglg" as="p" className="ml-1 font-roboto text-[14px] font-bold text-gray-900_02">
                  {ratingDescription}
                </Heading>
                <Text as="p" className="ml-1.5 font-roboto text-[14px] font-normal text-gray-900_02">
                  {reviewCount}
                </Text>
              </div>

              <div className="flex items-center">
                <Img src="images/defaultNoData.png" alt="Cancellation Icon" className="h-[16px] w-[16px]" />
                <Text as="p" className="font-roboto text-[14px] font-normal text-green-800">
                  {cancellationPolicy}
                </Text>
              </div>
            </div>

            <div className="flex w-[42%] flex-col items-end gap-0.5 sm:gap-0.5">
              <div className="flex flex-wrap items-center justify-end self-stretch">
                <Text size="textmd" as="p" className="self-end font-roboto text-[12px] font-normal text-gray-700">
                  {priceLabel}
                </Text>
                <Heading as="h6" className="font-roboto text-[16px] font-bold text-gray-900_02 sm:text-[13px]">
                  {priceAmount}
                </Heading>
              </div>

              <Text size="texts" as="p" className="font-roboto text-[11.81px] font-normal text-gray-700">
                {availabilityInfo}
              </Text>
            </div>
          </div>
        </div>

        <Button
          color="white A700"
          shape="round"
          rightIcon={<Img src="images/img_checkmark.svg" alt="Checkmark" className="mb-0.5 h-[16px] w-[16px]" />}
          className="min-w-[140px] gap-1.5 rounded border border-solid border-blue-700 px-[9px] font-roboto"
        >
          {availabilityButtonText}
        </Button>
      </div>
    </div>
  );
}

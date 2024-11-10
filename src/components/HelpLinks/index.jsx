import { Text } from "./..";
import React from "react";

export default function HelpLinks({
  helpLink = "Help",
  helpCenterLink = "Help center",
  faqsLink = "FAQs",
  privacyPolicyLink = "Privacy policy",
  informationLink = "Information",
  termsOfUseLink = "Terms of use",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[50%] sm:w-full py-2.5`}
    >
      <a href="Help" target="_blank" rel="noreferrer">
        <Text size="text3x1" as="p" className="font-arial text-[16px] font-normal text-blue_gray-900">
          {helpLink}
        </Text>
      </a>
      
      <a href="#" className="mt-3">
        <Text as="p" className="font-arial text-[14px] font-normal text-blue_gray-900">
          {helpCenterLink}
        </Text>
      </a>
      
      <a href="FAQs" target="_blank" rel="noreferrer">
        <Text as="p" className="font-arial text-[14px] font-normal text-blue_gray-900">
          {faqsLink}
        </Text>
      </a>
      
      <a href="#">
        <Text as="p" className="font-arial text-[14px] font-normal text-blue_gray-900">
          {privacyPolicyLink}
        </Text>
      </a>
      
      <a href="Information" target="_blank" rel="noreferrer">
        <Text as="p" className="font-arial text-[14px] font-normal text-blue_gray-900">
          {informationLink}
        </Text>
      </a>
      
      <a href="#" className="mb-[92px]">
        <Text as="p" className="font-arial text-[14px] font-normal text-blue_gray-900">
          {termsOfUseLink}
        </Text>
      </a>
    </div>
  );
}

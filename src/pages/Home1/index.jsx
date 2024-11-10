import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading, Slider } from "../../components";
import CulturalRow from "../../components/CulturalRow";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TourDetails from "../../components/TourDetails";
import TourDetails1 from "../../components/TourDetails1";
import UserProfileRow from "../../components/UserProfileView";
import React, { Suspense } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const data = [
    {
        greetingText: "Morning",
        userCount: "(327)",
        timeText: "Starts before 12:00 PM",
    },
    {
        greetingText: "Morning",
        userCount: "(327)",
        timeText: "Starts before 12:00 PM",
    },
    {
        greetingText: "Morning",
        userCount: "(327)",
        timeText: "Starts before 12:00 PM",
    },
];

export default function Home1Page() {
    const [sliderstate, setSliderState] = React.useState(0);
    const sliderRef = React.useRef(null);

    return (
        <>
            <Helmet>
                <title>BookForme</title>
                <meta
                    name="description"
                    content="web site created using create-react-app"
                />
            </Helmet>

            <div className="w-full bg-white-a700">
                <div className="flex flex-col items-end gap-4">
                    <div className="flex flex-col items-end self-stretch">
                        <div className="self-stretch bg-white-a700">
                            <div className="mb-[94px]">
                                <Header />

                                <div className="ml-[152px] mr-[146px] mt-12 flex items-start md:mx-0 md:flex-col">
                                    <div className="flex w-[30%] flex-col items-start justify-center gap-[34px] rounded-1g border border-solid border-gray-200 px-4 py-5 md:w-full md:px-5">
                                        <Heading
                                            as="h1"
                                            className="font-roboto text-[16px] font-bold text-gray-900_02"
                                        >
                                            Filter by:
                                        </Heading>

                                        <div className="mb-1 flex flex-col gap-6 self-stretch">
                                            <div className="flex flex-col items-start justify-center">
                                                <Text
                                                    as="p"
                                                    className="font-roboto text-[14px] font-medium text-gray-900_02"
                                                >
                                                    Category
                                                </Text>

                                                <div className="flex flex-col gap-2 self-stretch">
                                                    <div className="flex flex-col">
                                                        <CulturalRow />

                                                        <div className="flex flex-1 items-center justify-center">
                                                            <div className="flex flex-1 items-center self-end">
                                                                <div className="flex w-[58%] items-center gap-2">
                                                                    <div className="h-[20px] w-[20px] rounded border border-solid border-blue_gray-400 bg-white-a700" />

                                                                    <Text
                                                                        className="font-roboto text-[13.78px] font-normal text-gray-900_02"
                                                                    >
                                                                        Entertainment & tickets
                                                                    </Text>
                                                                </div>

                                                                <Text
                                                                    className="ml-1 self-end font-roboto text-[13.78px] font-normal text-gray-700"
                                                                >
                                                                    (1)
                                                                </Text>
                                                            </div>

                                                            <Img
                                                                src="images/img_checkmark_black_900_01.svg"
                                                                alt="Checkmark"
                                                                className="h-[24px] w-[24px]"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center">
                                                        <div className="h-[20px] w-[20px] rounded border border-solid border-blue_gray-400 bg-white-a700" />

                                                        <Text
                                                            size="textlg"
                                                            as="p"
                                                            className="ml-2 font-roboto text-[13.56px] font-normal text-gray-900_02"
                                                        >
                                                            Tours
                                                        </Text>

                                                        <Text
                                                            size="textlg"
                                                            as="p"
                                                            className="self-end font-roboto text-[13.78px] font-normal text-gray-700"
                                                        >
                                                            (8)
                                                        </Text>
                                                    </div>

                                                    <div className="flex items-center">
                                                        <div className="h-[20px] w-[20px] rounded border border-solid border-blue_gray-400 bg-white-a700" />
<Text
    as="p"
    className="ml-2 font-roboto text-[14px] font-normal text-gray-900_02"
>
    Nature & outdoor
</Text>

<Text
    size="textlg"
    as="p"
    className="self-end font-roboto text-[13.78px] font-normal text-gray-700"
>
    (3)
</Text>

</div>
</div>
</div>

<div className="flex flex-col items-start justify-center gap-1.5">
    <Text
        size="textlg"
        as="p"
        className="font-roboto text-[13.89px] font-medium text-gray-900_02"
    >
        Price
    </Text>

    <div className="flex items-center self-stretch">
        <div
            className="h-[20px] w-[20px] rounded border border-solid border-blue_gray-400 bg-white-a700"
        />
        <div className="flex flex-1 flex-wrap px-2">
            <Text
                as="p"
                className="font-roboto text-[14px] font-normal text-gray-900_02"
            >
                $0 - $22
            </Text>
            <Text
                size="textlg"
                as="p"
                className="ml-1 font-roboto text-[13.78px] font-normal text-gray-700"
            >
                (18)
            </Text>
        </div>
    </div>

    <div className="flex items-center self-stretch">
        <div
            className="h-[20px] w-[20px] rounded border border-solid border-blue_gray-400 bg-white-a700"
        />
        <Text
            as="p"
            className="ml-2 font-roboto text-[14px] font-normal text-gray-900_02"
        >
            $22 $44
        </Text>
        <Text
            size="textlg"
            as="p"
            className="self-end font-roboto text-[13.78px] font-normal text-gray-700"
        >
            (45)
        </Text>
    </div>

    <div className="flex items-center self-stretch">
        <div
            className="h-[20px] w-[20px] rounded border border-solid border-blue_gray-400 bg-white-a700"
        />
        <div className="flex flex-1 flex-wrap px-2">
            <Text
                as="p"
                className="font-roboto text-[14px] font-normal text-gray-900_02"
            >
                $44 $83
            </Text>
            <Text
                size="textlg"
                as="p"
                className="ml-1 font-roboto text-[13.78px] font-normal text-gray-700"
            >
                (86)
            </Text>
        </div>
    </div>

    <div className="flex items-center self-stretch">
        <div
            className="h-[20px] w-[20px] rounded border border-solid border-blue_gray-400 bg-white-a700"
        />
        <div className="flex flex-1 flex-wrap px-2">
            <Text
                as="p"
                className="font-roboto text-[14px] font-normal text-gray-900_02"
            >
                $83 $138
            </Text>
            <Text
                size="textlg"
                as="p"
                className="ml-1 font-roboto text-[13.78px] font-normal text-gray-700"
            >
                (88)
            </Text>
        </div>
    </div>

    <div className="flex items-center self-stretch">
        <div
            className="h-[20px] w-[20px] rounded border border-solid border-blue_gray-400 bg-white-a700"
        />
        <Text
            as="p"
            className="ml-2 font-roboto text-[14px] font-normal text-gray-900_02"
        >
            $138+
        </Text>
        <Text
            size="textlg"
            as="p"
            className="self-end font-roboto text-[13.78px] font-normal text-gray-700"
        >
            (206)
        </Text>
    </div>
</div>

<div className="flex flex-col items-start justify-center gap-1">
    <Text
        size="textlg"
        as="p"
        className="font-roboto text-[13.78px] font-medium text-gray-900_02"
    >
        Show results with
    </Text>
</div>
<div className="flex items-center self-stretch">
    <div className="h-[20px] w-[20px] rounded border border-solid border-blue_gray-400 bg-white-a700" />
    <Text
        as="p"
        className="ml-2 font-roboto text-[14px] font-normal text-gray-900_02"
    >
        Free cancellation
    </Text>
    <Text
        size="textlg"
        as="p"
        className="self-end font-roboto text-[13.78px] font-normal text-gray-700"
    >
        (433)
    </Text>
</div>

<div className="flex flex-col items-start justify-center gap-1.5">
    <Text
        as="p"
        className="font-roboto text-[14px] font-medium text-gray-900_02"
    >
        Review Score
    </Text>
    <div className="flex items-center self-stretch">
        <div className="h-[20px] w-[20px] rounded border border-solid border-blue_gray-400 bg-white-a700" />
        <Text
            as="p"
            className="ml-2 self-end font-roboto text-[14px] font-normal text-gray-900_02"
        >
            4.5 and up
        </Text>
        <Text
            size="textlg"
            as="p"
            className="self-end font-roboto text-[13.78px] font-normal text-gray-700"
        >
            (4)
        </Text>
    </div>
    <div className="flex items-center self-stretch">
        <div className="h-[20px] w-[20px] rounded border border-solid border-blue_gray-400 bg-white-a700" />
        <Text
            as="p"
            className="ml-2 self-end font-roboto text-[14px] font-normal text-gray-900_02"
        >
            4 and up
        </Text>
        <Text
            size="textlg"
            as="p"
            className="self-end font-roboto text-[13.78px] font-normal text-gray-700"
        >
            (19)
        </Text>
    </div>
</div>

<div className="flex flex-col items-start gap-1">
    <Text
        size="textlg"
        as="p"
        className="font-roboto text-[13.78px] font-medium text-gray-900_02"
    >
        Time of day
    </Text>
    <div className="mr-[150px] flex flex-col gap-2.5 self-stretch md:mr-0">
        <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
                <UserProfileRow
                    {...d}
                    key={"listbackground" + index}
                    className="mr-4 md:mr-0"
                />
            ))}
        </Suspense>
    </div>
</div>
<Button
    rightIcon={
        <Img
            src="images/img_checkmark_black_900_01.svg"
            alt="Checkmark"
            className="h-[16px] w-[16px]"
        />
    }
    className="min-w-[140px] gap-1.5 self-end rounded border border-solid border-blue-700 px-[9px] font-roboto text-[14px] text-blue-700"
>
    See availability
</Button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";
const timeline = [
  {
    Logo: Logo1,
    heading: "Leadership",
    Description: "Fully committed to the success company",
  },

  {
    Logo: Logo2,
    heading: "Leadership",
    Description: "Fully committed to the success company",
  },

  {
    Logo: Logo3,
    heading: "Leadership",
    Description: "Fully committed to the success company",
  },

  {
    Logo: Logo4,
    heading: "Leadership",
    Description: "Fully committed to the success company",
  },
];
const TimelineSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
      {/* left box  */}
      <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
        {timeline.map((element, index) => {
          return (
            // left m logo and right box has heading and sub heading
            <div className="flex flex-col lg:gap-3" key={index}>
              {/* logo div */}
              <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                <img src={element.Logo} alt="" />
              </div>
              {/* right container */}
              <div>
                <h2 className="font-semibold text-[18px]">{element.heading}</h2>
                <p className="text-base">{element.Description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* Right part */}
      <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
        <img src={timelineImage} alt="timelineImage" />
        {/* overlapping section green */}
        <div className="absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7 left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          {/* left div 10 year */}
          <div className="flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7">
            <p className="text-3xl font-bold">10</p>
            <p className="text-caribbeangreen-300 text-sm">
              Years of Experience
            </p>
          </div>
          {/* right div 250  vala*/}
          <div className="flex gap-5 items-center px-7 ">
            <p className="text-3xl font-bold">250</p>
            <p className="text-caribbeangreen-300 text-sm">Types of courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;

import React from "react";
import HighlightText from "../HomePage/HighlightText";
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "../HomePage/Button";
const LearningLanguageSection = () => {
  return (
    <div className="mt-[100px] mb-32">
      {/* parent container */}
      <div className="flex flex-col gap-5 items-center">
        <div className="text-4xl font-semibold text-center">
          Your Swiss knife for
          <HighlightText text={"learning any language"} />
        </div>
        {/* subheading */}
        <div className="text-center text-richblack-600 mx-auto text-base mt-5 lg:w-[70%]">
          Using spin making learning multiple language easy with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more
        </div>
        {/* div for 3 images */}
        <div className="flex lg:flex-row flex-col items-center justify-center mt-5 ">
          <img
            src={Know_your_progress}
            alt="kyp"
            className="object-contain -mr-32"
          />
          <img src={compare_with_others} alt="co" className="object-contain" />
          <img
            src={plan_your_lessons}
            alt="ppl"
            className="object-contain -ml-36"
          />
        </div>
        <div className="w-fit">
          <CTAButton active={true} linkto={"/signup"}>
            <div>Learn More</div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
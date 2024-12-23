import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar/>
      {/* Section 1 */}
      <div className="relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent">
        <Link to={"/signup"}>
          {/* rounded button is div se create hora hai */}
          <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
            {/* Content */}
            <div className=" flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="text-center text-4xl font-semibold mt-8">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        {/* SubHeading */}
        <div className="w-[90%] text-center text-lg font-bold text-richblack-200 mt-4">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        <div className="flex flex-row gap-7 mt-8 ">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>
        {/* Video Div */}
        <div className="shadow-blue-200 mx-3 my-12">
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4"></source>
          </video>
        </div>
        {/* CODE SECTION 1 */}
        {/* side by side rkhe hai so? One big div: side by side they are kept in row */}
        {/* then left div flex-column then for buttons flex row */}
        {/* then right div new part: */}
        <div>
          {/* we will send the data as props in this. */}
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-bold">
                Unlock your <HighlightText text={"coding potential"} />
                with our online coding courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{ btnText: "learn more", linkto: "/login", active: false }}
            codeblock={`<!DOCTYPE html>
            <html>
              <head>
                  <title>My First HTML Page</title>
              </head>
              <body>
                  <h1>My First Heading</h1>
                  <p>My first paragraph.</p>
              </body>
              </html>
              `}
            codeColor={"text-yellow-25"}
          >
            {" "}
          </CodeBlocks>
        </div>
        {/* Code Section 2 */}
        {/* CODE SECTION 1 */}
        {/* side by side rkhe hai so? One big div: side by side they are kept in row */}
        {/* then left div flex-column then for buttons flex row */}
        {/* then right div new part: */}
        <div>
          {/* we will send the data as props in this. */}
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-bold">
                Unlock your <HighlightText text={"coding potential"} />
                with our online coding courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{ btnText: "learn more", linkto: "/login", active: false }}
            codeblock={`<!DOCTYPE html>
            <html>
              <head>
                  <title>My First HTML Page</title>
              </head>
              <body>
                  <h1>My First Heading</h1>
                  <p>My first paragraph.</p>
              </body>
              </html>
              `}
            codeColor={"text-yellow-25"}
          >
            {" "}
          </CodeBlocks>
        </div>
        <ExploreMore />
      </div>
      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        {/* 1st container of section 2 */}
        <div className="homepage_bg h-[333px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
            <div className="h=[150px]"></div>
            <div className="flex flex-row gap-7 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog <FaArrowRight />
                </div>
              </CTAButton>

              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>
        {/* Second container of section 2 */}
        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col  items-center justify-between gap-7">
          {/* Parent container for Get the skills you need for a job in demand */}
          <div className="flex  flex-col lg:flex-row gap-5 mb-10 mt-[95px]  items-center">
            {/* left container */}
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a
              <HighlightText text={"Job that is in demand"} />
            </div>
            <div className=" flex flex-col lg:flex-col gap-10 lg:w-[40%] items-start ">
              {/* text div */}
              <div className="text-[16px] ">
                The modern studynotion is the dictates its own terms
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
          {/* Thirds container of section 2 */}

          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>
      {/* Section 3 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 first-letter:bg-richblack-900">
        {/* Instructor section */}
        <InstructorSection />
        <h2 className="text-center text-4xl font-semibold mt-10">
          review from other learners
        </h2>
        {/* Review Slider */}
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Home;

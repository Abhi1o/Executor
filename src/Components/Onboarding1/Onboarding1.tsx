import React from "react";
import "./Onboarding1.scss";
import aichat from "../../Assets/Image/Ai_Chat-removebg-preview (1).png";
import RetroGrid from "../../magicui/retro-grid";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import ShimmerButton from "../../magicui/shimmer-button";
import AnimatedGridPattern from "../../magicui/animated-grid-pattern";
interface Onboarding1Props {
  onNext: () => void;
}
const Onboarding1:React.FC<Onboarding1Props> = ({ onNext }) => {
  return (
    <>
      <div className=" relative flex  w-full h-screen overflow-hidden bg-clip-padding  onboarding1">
        <div className="flex flex-col md:flex-row h-screen z-10 ">
        <AnimatedGridPattern
        numSquares={130}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(10000px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] w-{200%} skew-y-12 overflow-hidden"
        )}
      />
          <div className=" relative h-screen items-center justify-center">
            {/* Card 1 */}
            <div className="   relative   p-6 w-screen h-screen flex flex-col justify-between items-center ">
              <img
                src={aichat}
                alt="Luggage"
                className="w-60 h-60 m-10  mt-28 drop-shadow-2xl transition-transform transform hover:scale-105"
              />
              <div className="text-center w-[900px]">
                <h2 className="text-2xl text-slate-900 font-semibold mb-8 ">
                Welcome to System Agent Configuration

                </h2>
                <p className=" text-gray-500 mb-16  max-w-[600px] m-auto ">
                Welcome to the first step in setting up your AI-driven system. In this section, you will configure the system agents that are integral to automating and optimizing your workflows. System agents manage background tasks, ensuring your system operates smoothly and efficiently.
                </p>
                <div className="flex justify-between items-center w-full mb-12">
                  <button className="text-black ">
                    Skip
                  </button>
                  <Link to="/onboarding3">
                    {/* <button className=" btn-3d  zoomin-scale-button">
                      Next
                    </button> */}
                    <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Next
        </span>
      </ShimmerButton>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
          </div>
        </div>
          {/* <RetroGrid/> */}
      </div>
    </>
  );
};

export default Onboarding1;

import React from "react";
import "./Onboarding3.scss";
// import RetroGrid from "../../magicui/retro-grid";
import cube from "../../Assets/Image/3D_Cube_Rotation-removebg-preview (1).png";
import data from "../../Assets/Image/Data_Integration-removebg-preview (1).png";
import chatcpt from "../../Assets/Image/Chat_Gpt_Database-removebg-preview.png";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import ShimmerButton from "../../magicui/shimmer-button";
import AnimatedGridPattern from "../../magicui/animated-grid-pattern";
import { BorderBeam } from "../../magicui/border-beam";

interface Onboarding3Props {
  onNext: () => void;
}
const Onboarding3:React.FC<Onboarding3Props> = ({ onNext }) => {
  return (
    <>
      <div className="relative flex  w-full h-screen overflow-hidden bg-clip-padding  onboarding1">
        <div className="flex flex-col md:flex-row h-screen z-10">
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
          <div className=" relative   items-center justify-center">
            {/* Card 1 */}

            {/* Card 3 */}
            <div className="  relative  p-6 w-screen h-screen flex flex-col justify-between items-center ">
              <img
                src={data}
                alt="Calendar"
                className="w-60 h-60 m-10 mt-28  drop-shadow-2xl transition-transform transform hover:scale-105"
              />
              <div className="text-center w-[900px]">
                <h2 className="text-2xl text-slate-900 font-semibold mb-8">
                Configuring Core Agents
                </h2>
                <p className=" text-gray-500 mb-16  max-w-[600px] m-auto ">
                We're now configuring the core agents essential for your AI system's primary operations. These agents are being automatically set up to manage the main functionalities, ensuring your system's core capabilities are ready to use without any manual setup required.


                </p>
                <div className="flex justify-center items-center w-full mb-12">
                  {/* <button className="text-green-600">Skip</button> */}
                  {/* <Link to="/onboarding5"><button className="btn-3d zoomin-scale-button">Get Started</button></Link>  */}
                  <Link to="/onboarding5" className="relative z-10 rounded-3xl">
                    <ShimmerButton className="shadow-2xl">
                      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black from-white dark:to-slate-900/10 lg:text-lg">
                        Get Started
                      </span>
                    </ShimmerButton>
                    <BorderBeam size={50} duration={12} delay={9} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <RetroGrid /> */}
      </div>
    </>
  );
};

export default Onboarding3;

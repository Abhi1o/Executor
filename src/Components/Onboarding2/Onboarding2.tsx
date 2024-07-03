import React from "react";
import "./Onboarding2.scss";
import { cn } from "../../lib/utils";
import aichat from "../../Assets/Image/Ai_Chat-removebg-preview (1).png";
import safebox from "../../Assets/Image/Safe_Box-removebg-preview (1).png";
import cube from "../../Assets/Image/3D_Cube_Rotation-removebg-preview (1).png";
import data from "../../Assets/Image/Data_Integration-removebg-preview (1).png";
import chatcpt from "../../Assets/Image/Chat_Gpt_Database-removebg-preview.png";
import { Link } from "react-router-dom";
import ShimmerButton from "../../magicui/shimmer-button";
import AnimatedGridPattern from "../../magicui/animated-grid-pattern";
interface Onboarding1Props {
  onNext: () => void;
}
// import RetroGrid from "../../magicui/retro-grid";
const Onboarding1:React.FC<Onboarding1Props> = ({ onNext }) => {
  return (
    <>
      <div className=" relative flex  w-full h-screen overflow-hidden bg-clip-padding onboarding1">
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
      />          <div className=" relative h-screen items-center justify-center">
            <div className=" relative   p-6 w-screen h-screen flex flex-col justify-between items-center ">
              <img
                src={safebox}
                alt="Payment"
                className="w-60 h-60 m-10  mt-28 drop-shadow-2xl transition-transform transform hover:scale-105"
              />
              <div className="text-center w-[900px]">
                <h2 className="text-2xl text-slate-900 font-semibold mb-8 ">
                Create and Secure Your Wallet


                </h2>
                <p className="text-gray-500 mb-16  max-w-[600px] m-auto ">
                 Set up your digital wallet, a vital tool for managing your assets securely. You will be guided through the process of creating a new wallet, which is essential for handling transactions, storing cryptocurrencies, and more.


                </p>
                <div className="flex justify-between items-center w-full mb-12">
                  <button className="text-black ">
                    Skip
                  </button>
                  <Link to="/onboarding4">
                    {/* <button className="btn-3d  zoomin-scale-button">
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
            {/* Card 3 */}
          </div>
        </div>
        {/* <RetroGrid/> */}
      </div>
    </>
  );
};

export default Onboarding1;

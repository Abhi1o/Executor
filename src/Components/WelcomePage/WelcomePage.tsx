import React, { useState, useEffect } from "react";
import "./WelcomePage.scss";
import {FlipWords} from "../../magicui/flip-words";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import ShimmerButton from "../../magicui/shimmer-button";
import {BorderBeam} from "../../magicui/border-beam";
import AnimatedGridPattern from "../../magicui/animated-grid-pattern";
type WelcomePageProps = {
  onNext: () => void

};

const WelcomePage = ({onNext }:WelcomePageProps) => {
  const words = [
    "Workflow",
    "Process",
    "Tasks",
    "Projects",
    "Productivity",
    "Efficiency",
    "Routine",
    "Operations",
    "Schedule",
    "Procedures",
    "System"
  ];

  const prompts = [
    "Generating your AI experience...",
    "Setting up your blockchain transactions...",
    "Initializing smart agents...",
    "Securing your data with blockchain...",
    "Optimizing your crypto portfolio...",
    "Analyzing market trends...",
    "Processing your request...",
    "Connecting to decentralized networks...",
    "Verifying transaction details...",
    "Enhancing your digital security...",
    "Creating custom AI solutions...",
    "Deploying smart contracts...",
    "Synchronizing with the blockchain...",
    "Retrieving your data...",
    "Updating your dashboard...",
  ];

  const [promptIndex, setPromptIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);

  const changePrompt = () => {
    setFade(true);
    setTimeout(() => {
      setPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
      setFade(false);
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(changePrompt, 2000);
    return () => clearInterval(interval);
  }, []);

  const handlePromptChange = () => {
    changePrompt();
  };

  return (
    <div>
      <div className="bg-gradient-to-tr from-green-300 via-blue-300 to-orange-300 bg-clip-padding welcome overflow-hidden">
        <div className="flex flex-col md:flex-row h-screen glass-effect text-slate-900">
          <div className="relative w-[55%] text-black flex flex-col justify-center py-10 items-start pl-28 pr-60">
            <div className="absolute top-10 left-28 w-14 h-14 bg-purple-400/85 rounded-full flex items-center justify-center">
              <span className="text-black text-3xl font-bold">🤖</span>
            </div>
            
            <h1 className="text-5xl text-black font-bold mb-8 line leading-snug x-text-content-text-subheadline">
              Revolutionize Your <br /> <FlipWords words={words} duration={3000} /> with <br /> AI Agent
            </h1>
            <p className="text-base font mb-11 text-slate-600 leading-7 x-text-content-text-primary">
              Enhance your blockchain transactions with our AI agent, automating
              routine tasks and providing insightful data analysis for optimal
              efficiency. Focus on what matters while our AI streamlines your
              workflow.
            </p>
            <Link to="/onboarding2" className="relative z-10 rounded-3xl">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Get started
                </span>
              </ShimmerButton>
              <BorderBeam size={90} duration={12} delay={9} />
            </Link>
          </div>
          <AnimatedGridPattern
            numSquares={130}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(10000px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] w-{200%} skew-y-12"
            )}
          />

          <div className="relative p-6 w-[45%] fade-in-right">
            <div className="absolute top-5 right-5 mt-4 mr-4"></div>

            <div className="absolute bottom-9 left-0 right-0 mb-4 mx-4 flex items-center justify-center">
              <div className="relative p-1 w-[88%] bg-white/80 rounded-xl shadow-lg flex items-center">
                <div className="p-2">
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m0-4h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className={`w-full py-2 px-3 text-gray-500 rounded-lg bg-transparent transition-opacity duration-300 ${
                    fade ? "opacity-0" : "opacity-100"
                  }`}
                  value={prompts[promptIndex]}
                  readOnly
                />
                <button
                  onClick={handlePromptChange}
                  className="absolute right-0 py-2 px-5 bg-gray-200/60 mr-2 text-slate-700 font-semibold text-sm rounded-xl"
                >
                  Prompt
                </button>
                <BorderBeam size={90} duration={12} delay={9} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

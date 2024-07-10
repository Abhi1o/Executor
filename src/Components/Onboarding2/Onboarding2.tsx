import React, { useEffect, useState } from "react";
import "./Onboarding2.scss";
import { cn } from "../../lib/utils";
// import aichat from "../../Assets/Image/Ai_Chat-removebg-preview (1).png";
import safebox from "../../Assets/Image/Safe_Box-removebg-preview (1).png";
// import cube from "../../Assets/Image/3D_Cube_Rotation-removebg-preview (1).png";
// import data from "../../Assets/Image/Data_Integration-removebg-preview (1).png";
// import chatcpt from "../../Assets/Image/Chat_Gpt_Database-removebg-preview.png";
import { Link } from "react-router-dom";
import ShimmerButton from "../../magicui/shimmer-button";
import AnimatedGridPattern from "../../magicui/animated-grid-pattern";
import { BorderBeam } from "../../magicui/border-beam";
import { Wallet, HDNodeWallet, Mnemonic } from "ethers";
import CryptoJS from "crypto-js";
import { Toaster, toast } from "sonner";

interface Onboarding1Props {
  onNext: (mnemonic: string) => void;
}
// import RetroGrid from "../../magicui/retro-grid";
const Onboarding1: React.FC<Onboarding1Props> = ({ onNext }) => {
  const [mnemonic, setMnemonic] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [nextEnabled, setNextEnabled] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      generateMnemonic();
    }, 4000);
    // toast.success('Wallet created successfully, write down your the prase')
    return () => clearTimeout(timeout);
  }, []);

  const generateMnemonic = () => {
    const randomMnemonic = Wallet.createRandom().mnemonic?.phrase;
    if (randomMnemonic) {
      console.log(randomMnemonic);
      setMnemonic(randomMnemonic);
      setNextEnabled(true);
      localStorage.setItem("mnemonic", randomMnemonic); // Save to local storage
      toast.success("Mnemonic phrase created!");
    } else {
      toast.error("Failed to create mnemonic phrase.");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mnemonic).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // Reset the copied state after 3 seconds
        toast.success("Mnemonic phrase copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
        toast.error("Failed to copy mnemonic phrase.");
      }
    );
  };

  const handleNext = () => {
    onNext(mnemonic);
    
  };

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
          />{" "}
          <div className=" relative h-screen items-center justify-center">
            <div className=" relative   p-6 w-screen h-screen flex flex-col justify-between items-center ">
              <img
                src={safebox}
                alt="Payment"
                className="w-60 h-60 m-10  mt-28 drop-shadow-2xl transition-transform transform hover:scale-105"
              />
              <div className="text-center w-[900px]">
                <h2 className="text-2xl text-slate-900 font-semibold mb-8 ">
                  Creating and Securing Your Wallet
                </h2>
                <p className="text-gray-500 mb-16  max-w-[600px] m-auto ">
                  We're in the process of creating a secure digital wallet for
                  you. This vital tool for managing your assets is being set up
                  automatically. The system is handling the entire process, from
                  wallet creation to implementing security measures, ensuring a
                  safe environment for your transactions and cryptocurrency
                  storage.
                </p>
                <div className="relative flex justify-between items-center w-full mb-12">
                  <button className="text-black ">Skip</button>

                  {mnemonic && (
                    <div className="absolute bg-white p-4 rounded-xl w-[65%] shadow-md left-1/2 top-[50%] transform -translate-x-1/2 -translate-y-1/2">
                      <p className="mnemonic-phrase px-6 py-2 rounded-xl shadow-inner bg-gray-50 ">
                        {mnemonic}
                      </p>
                      <button
                        onClick={copyToClipboard}
                        className="copy-btn mt-2 p-1 min-w-16 rounded-lg shadow-lg"
                      >
                        {copied ? "Copied✅" : "Copy"}
                      </button>
                    </div>
                  )}

                  <Link to="/onboarding4" className="relative z-10 rounded-3xl">
                    {/* <button className="btn-3d  zoomin-scale-button">
                      Next
                    </button> */}
                    <ShimmerButton
                      className="shadow-2xl "
                      disabled={!nextEnabled}
                      onClick={handleNext}
                      style={{
                        backgroundColor: !nextEnabled ? "gray" : "",
                        cursor: !nextEnabled ? "not-allowed" : "pointer",
                        opacity:!nextEnabled? 0.5 : 1,
                        transition: "background-color 0.3s ease",
                        color:!nextEnabled? "gray" : "white",
                        borderRadius:!nextEnabled? "20px" : "20px",
                        lineHeight:!nextEnabled? "1.5" : "1.7",
                        
                        

                      }}
                    >
                      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black from-white dark:to-slate-900/10 lg:text-lg">
                        Next
                      </span>
                    </ShimmerButton>
                    <BorderBeam size={50} duration={12} delay={9} />
                  </Link>
                </div>
              </div>
            </div>
            {/* Card 3 */}
          </div>
        </div>
        {/* <RetroGrid/> */}
        <Toaster richColors position="top-right" />
      </div>
    </>
  );
};

export default Onboarding1;

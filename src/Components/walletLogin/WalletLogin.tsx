import React, { useState } from "react";
import "./WalletLogin.scss";
import { cn } from "../../lib/utils";
import CryptoJS from "crypto-js";
// import office from "../../Assets/Image/Business_team_doing_discussion-removebg-preview.png";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'
import { BorderBeam } from "../../magicui/border-beam";
import AnimatedGridPattern from "../../magicui/animated-grid-pattern";
interface WalletLoginProps {
  onLogin: () => void;
}

const WalletLogin: React.FC<WalletLoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    if(password){
      e.preventDefault();
    // handle wallet login
    onLogin();
    }
    else{
      toast.error("Please enter a password")
    }
    
  };

  const handleLogin = () => {
    const storedPrivateKey = localStorage.getItem("encryptedPrivateKey");
    if (storedPrivateKey) {
      try {
        const decrypted = CryptoJS.AES.decrypt(
          storedPrivateKey,
          password
        ).toString(CryptoJS.enc.Utf8);
        if (decrypted) {
          alert("Login successful!");
          navigate("/home");
        } else {
          alert("Incorrect password.");
        }
      } catch (error) {
        alert("Incorrect password.");
      }
    } else {
      alert("No wallet found. Please complete the onboarding process.");
    }
  };

  return (
    <>
    <div className="flex h-screen bg-gradient-to-tr from-green-300 via-blue-300 to-orange-300 bg-clip-padding userinfo overflow-hidden">
      <div className="flex flex-row h-screen glass-effect text-slate-900 w-screen">
        {/* Left side box */}
        <div className="relative w-[55%] bg-cover bg-center flex flex-col items-center justify-center p-4 ">
          {/* <div>
            <img
              src={blue}
              alt="profile"
              className="w-200 h-140 x-text-content-text-subheadline"
            />
          </div> */}
        </div>
        <AnimatedGridPattern
          numSquares={230}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(10000px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] w-{200%} skew-y-12 overflow-hidden"
          )}
        />

        {/* Right side box */}
        <div className="flex justify-center items-center p-6 w-[45%] h-screen">
          <div className="bg-gray-100 relative rounded-3xl shadow-lg px-32 w-full h-[100%] flex fade-in-right">
            <form onClick={(handleSubmit)} className="flex justify-center flex-col w-[100%] ">
              <h1 className="text-4xl text-gray-900 font-semibold mb-2">
                Login
              </h1>
              <p className="text-sm text-gray-500 mb-16">
                Please enter your password:
              </p>

              {/* First Name */}
              

              {/* Last Name */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="lastName"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded-lg w-full py-4 px-6 text-gray-900 text-base leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  id=" Password"
                  type="Password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Address */}
              {/* <div className="mb-6">
                <label
                  className="block text-gray-200 text-sm font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="shadow appearance-none border rounded-lg w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  id="address"
                  type="text"
                  placeholder="Address"
                />
              </div> */}

              {/* Contact Number */}
              {/* <div className="mb-6">
                <label
                  className="block text-gray-200 text-sm font-bold mb-2"
                  htmlFor="contactNumber"
                >
                  Contact Number
                </label>
                <input
                  className="shadow appearance-none border rounded-lg w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  id="contactNumber"
                  type="text"
                  placeholder="Contact Number"
                />
              </div> */}

              {/* Security Question Dropdown */}
              {/* <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="securityQuestion"
                >
                  Security Question
                </label>
                <select
                  className="shadow appearance-none border rounded-lg w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  id="securityQuestion"
                  value={selectedQuestion}
                  onChange={(e)=>{setSelectedQuestion(e.target.value)}}
                >
                  <option value="">Select a security question</option>
                  <option value="mother">
                    What is your mother's maiden name?
                  </option>
                  <option value="pet">
                    What was the name of your first pet?
                  </option>
                  <option value="city">In what city were you born?</option>
                  <option value="movie">What is your favorite movie?</option>
                  <option value="teacher">
                    What is the name of your favorite teacher?
                  </option>
                </select>
              </div> */}

              {/* Answer Input */}
              {/* <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm  mb-2"
                  htmlFor="answer"
                >
                  Answer
                </label>
                <input
                  className="shadow appearance-none border rounded-lg w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  id="answer"
                  type="text"
                  placeholder="Enter your answer"
                  value={answer}
                  onChange={(e)=>setAnswer(e.target.value)}
                />
              </div> */}

              {/* Continue Button */}
              <div
                className="shadow-md py-2 mt-12 relative z-10 rounded-xl text-center cursor-pointer flex items-center justify-center"
               
              >
                <button
                  className="py-1 px-5 focus:outline-none focus:shadow-outline text-center text-sm font-medium leading-none tracking-tight text-black dark:from-white dark:to-slate-900/10 lg:text-lg"
                  type="button"
                >
                  Login
                </button>
                <BorderBeam size={90} duration={12} delay={9} />
              </div>
              {/* <Link to="" className="relative z-10 rounded-2xl "onClick={handleContinue}>
                <button className=" " >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Next
                  </span>
                </button>
                
                </Link> */}
            </form>
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
      </div>{" "}
      <Toaster richColors position="top-right"  />
    </div>
  </>
  );
};

export default WalletLogin;
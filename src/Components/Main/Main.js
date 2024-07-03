
import React,{useState} from 'react'
import bannerAI from "../../Assets/Image/Ai_Server-removebg-preview.png";
import ai_brain from "../../Assets/Image/02_ai_brain_chip-removebg-preview.png";
import ConsortiumI from "../../Assets/Image/Consortium_Blockchain-removebg-preview.png";
import Blockchain__1 from "../../Assets/Image/Blockchain__1_-removebg-preview.png";
import Ai from "../../Assets/Image/Ai-removebg-preview.png";
import Ai_Processor from "../../Assets/Image/Ai_Processor-removebg-preview.png";
import Neural_Network from "../../Assets/Image/Neural_Network-removebg-preview.png";
import Blockchain__4 from "../../Assets/Image/Blockchain__4_-removebg-preview.png";
import Ethereum from "../../Assets/Image/Blockchain__2_-removebg-preview.png";
import profile from "../../Assets/Image/Young_Person-removebg-preview.png";
import { SiCardano } from "react-icons/si";
import { TbDots } from "react-icons/tb";
import { LuSendToBack } from "react-icons/lu";
import { TbCreditCardRefund } from "react-icons/tb";
import { PiInvoiceLight } from "react-icons/pi";
import { TbTableOptions } from "react-icons/tb";


const Main = () => {
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };
  return (
    <>
    <div className='px-6 pt-6'>

<header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <button>
              <i className="fas fa-search"></i>
            </button>
            <button>
              <i className="fas fa-bell"></i>
            </button>
            <div className="relative">
              <button onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
                <img src={profile} alt="Profile" className="w-8 h-8 rounded-full" />
              </button>
              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                  <div className="p-4">
                    <img src={profile} alt="Profile" className="w-12 h-12 rounded-full mb-2" />
                    <p className="font-bold">Alesio K.</p>
                  </div>
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Log out</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>
        </div>
    <div className='flex'>
        <div className="w-4/6 p-6">
        

        {/* Banner */}
        <div className="relative bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-10 rounded-2xl flex justify-between items-center mb-9 pb-12">
          <div>
            <h3 className="text-3xl font-bold pb-3">Diverse AI Agents</h3>
            <p className="text-sm text-slate-200">Agents for Seamless Blockchain Operations</p>
          </div>
          <img src={ConsortiumI} alt="Deal" className="w-52 h-52  absolute -bottom-14 right-10" />
        </div>

        {/* Choices */}
        <div className="flex space-x-4 mb-8 mt-4 pt-5">
          <button className="bg-yellow-200 py-2 px-4 rounded-full">Blockchain 🔗</button>
          <button className="bg-red-200 py-2 px-4 rounded-full">ChatAI 🤖</button>
          <button className="bg-green-200 py-2 px-4 rounded-full">Crypto 🪙</button>
          <button className="bg-blue-200 py-2 px-4 rounded-full">Transaction 💸</button>
          <button className="bg-teal-200 py-2 px-4 rounded-full">Cosmos 🔮</button>
        </div>

        {/* Nearby Restaurants */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-xl font-bold">Treading</h4>
            <button className="text-blue-500">View All</button>
          </div>
          <div className="grid  grid-cols-4 gap-4 grid-flow-col ">
            <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
              <img src={ai_brain} alt="Restaurant" className="w-full h-36 rounded-lg mb-4" />
              <h5 className="font-bold">Perplexica</h5>
              <p className="text-sm text-gray-500">4.5 Stars</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
              <img src={bannerAI} alt="Restaurant" className="w-full h-36 rounded-lg mb-4" />
              <h5 className="font-bold">Cosmos </h5>
              <p className="text-sm text-gray-500">4.6 Stars</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
              <img src={Blockchain__1} alt="Restaurant" className="w-full h-36 rounded-lg mb-4" />
              <h5 className="font-bold">EchoBot</h5>
              <p className="text-sm text-gray-500">4.0 Stars</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
              <img src={Ai_Processor} alt="Restaurant" className="w-full h-32 rounded-lg mb-4" />
              <h5 className="font-bold">ChatterBot</h5>
              <p className="text-sm text-gray-500">4.0 Stars</p>
            </div>
          </div>
        </section>

        {/* Most Popular */}
        {/* <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-bold">Most Popular</h4>
            <button className="text-blue-500">View All</button>
          </div>
          <div className="flex space-x-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <img src={Ai} alt="Popular Dish" className="w-full h-24 rounded-lg mb-4" />
              <h5 className="font-bold">ChatMatic</h5>
              <p className="text-sm text-gray-500">4.2 Stars</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src={Ai_Processor} alt="Popular Dish" className="w-full h-24 rounded-lg mb-4" />
              <h5 className="font-bold">EchoBot</h5>
              <p className="text-sm text-gray-500">4.2 Stars</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src={Neural_Network} alt="Popular Dish" className="w-full h-24 rounded-lg mb-4" />
              <h5 className="font-bold">OmniChat</h5>
              <p className="text-sm text-gray-500">4.2 Stars</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src={Blockchain__4} alt="Popular Dish" className="w-full h-24 rounded-lg mb-4" />
              <h5 className="font-bold">SynthAI</h5>
              <p className="text-sm text-gray-500">4.2 Stars</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src={Ethereum} alt="Popular Dish" className="w-full h-24 rounded-lg mb-4" />
              <h5 className="font-bold">AssistBot</h5>
              <p className="text-sm text-gray-500">4.2 Stars</p>
            </div>
          </div>
        </section> */}
      </div>

      {/* Right Section */}
      <div className="w-2/6 p-6">
          <h4 className="text-lg font-bold mb-4">Wallet</h4>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className='shadow-2xl'>
                      <div className='bg-gradient-to-r from-sky-500 to-indigo-500 h-14 rounded-tl-2xl rounded-tr-2xl flex justify-between p-4 items-center'>
          <SiCardano color='white'  fontSize="20px"/>
          <TbDots color='white'  fontSize="20px"/>
          </div>
          <div className="bg-gray-700 p-4 rounded-br-2xl rounded-bl-2xl flex flex-col  justify-between mb-4">
            <div className=" mb-5">
              <p className="text-white font-bold text-lg">5598 6524 6786 9879</p>
            </div>
              
              <div className='flex justify-between items-center'> <p className="text-sm text-gray-200">Agent AI</p>
            <img src={Ai} alt="Card" className="w-16 h-16" />

              </div>
               
          </div>
          </div>


          <div className="flex justify-between mb-2">
            <button className="bg-white-500 border-violet-500 border-2 text-slate-400 p-2 rounded-lg font-light"><LuSendToBack fontSize="29px" color="violet"/>Send</button>
            <button className="bg-white-500 border-green-500 border-2 text-slate-400 p-2 rounded-lg font-light"><TbCreditCardRefund fontSize="29px" color='green'/>Receive</button>
            <button className="bg-white-500 border-yellow-500 border-2 text-slate-400 p-2 rounded-lg font-light"><PiInvoiceLight fontSize="29px" color='yellow'/>Invoice</button>
            <button className="bg-white-500 border-sky-500 border-2 text-slate-400 p-2 rounded-lg font-light"><TbTableOptions fontSize="29px" color='blue'/>Options</button>
          </div>
        </div>

        {/* Recommended Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-bold mb-4">Recommended</h4>
          <div className="flex items-center mb-4">
            <img src={Neural_Network} alt="Recommended" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">AIden</p>
              <p className="text-sm text-gray-500">Your AI Companion</p>
              <p className="text-xs text-gray-400">4.6 Stars</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <img src={Blockchain__1} alt="Recommended" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">TalkBuddy</p>
              <p className="text-sm text-gray-500">Your Talkative Friend</p>
              <p className="text-xs text-gray-400">4.3 Stars</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <img src={Ai_Processor} alt="Recommended" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">QuikChat</p>
              <p className="text-sm text-gray-500">Instant Answers, Anytime</p>
              <p className="text-xs text-gray-400">4.3 Stars</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Main
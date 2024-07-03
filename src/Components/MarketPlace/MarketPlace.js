import React,{useEffect,useRef} from 'react';
import market from "../../Assets/Image/marketplace.png"
import coins from "../../Assets/Image/Cosmos__1_-removebg-preview.png";
import cosmos from "../../Assets/Image/Consortium_Blockchain-removebg-preview.png";
import Ai from "../../Assets/Image/Ai-removebg-preview.png"
import process from '../../Assets/Image/Ai_Processor-removebg-preview.png';
import "./MarketPlace.css"
const DiscoveryPage = () => {
  const apps = [
    { name: 'Preplexica', type: 'Productivity', action: 'GET', icon: cosmos },
    { name: 'Cosmos', type: 'Productivity', action: 'GET', icon: coins },
    { name: 'Teams', type: 'Productivity', action: 'GET', icon: Ai },
    { name: 'Zoom', type: 'Business', action: 'GET', icon: process },
    { name: 'Google Meet', type: 'Business', action: 'GET', icon: process },
    { name: 'Video', type: 'Entertainment', action: 'PAUSE', icon: process },
    { name: 'Swiggy', type: 'Business', action: 'UPDATE', icon:coins },
    { name: 'Figma', type: 'Creativity', action: 'GET', icon: Ai  },
    { name: 'Figma', type: 'Creativity', action: 'GET', icon: process },
    { name: 'Figma', type: 'Creativity', action: 'GET', icon: coins },
    { name: 'Figma', type: 'Creativity', action: 'GET', icon: cosmos },
    { name: 'Figma', type: 'Creativity', action: 'GET', icon: process },
    { name: 'Figma', type: 'Creativity', action: 'GET', icon: Ai },
    { name: 'Figma', type: 'Creativity', action: 'GET', icon: cosmos },
    { name: 'Figma', type: 'Creativity', action: 'GET', icon: coins },
    { name: 'Figma', type: 'Creativity', action: 'GET', icon: process },
    { name: 'Figma', type: 'Creativity', action: 'GET', icon: Ai  },
    { name: 'Figma', type: 'Creativity', action: 'GET', icon: cosmos},
    // Add more apps as needed
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollTo({
          left: container.scrollLeft + e.deltaY,
          behavior: 'smooth',
        });
      }
    };

    container.addEventListener('wheel', onWheel);
    return () => container.removeEventListener('wheel', onWheel);
  }, []);

  const getButtonClass = (action) => {
    switch(action) {
      case 'GET':
        return '';
      case '⬜':
        return '';
      case 'UPDATE':
        return 'bg-yellow-500 hover:bg-yellow-400';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen  p-5 pt-8 marketplace">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl pt-3 pl-6 pr-40 mb-8 shadow-lg min-h-52">
          <div className="flex items-center bg-contain object-contain bg-no-repeat bg-right" style={{ backgroundImage: `url('${market}')` }}>
            {/* <img src="path_to_banner_image" alt="Zoom Banner" className="w-1/3 rounded-xl" /> */}
            <div className="ml-6 w-96 pt-6 gap-3">
              <h1 className="text-base text-slate-50 font-bold">Get started</h1>
              <h2 className="text-4xl text-white font-bold mt-2">AI Agents</h2>
              <p className="mt-2 text-base text-slate-200 pb-6">
              Advanced software programs designed to perform tasks or solve problems autonomously, often with the help of machine learning algorithms. 
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-7 mt-9">Apps just for you</h2>
          <div className="space-y-4">
           
              <div className="grid w-[2900px] grid-flow-row grid-cols-6 grid-rows-3 overflow-x  gap-6 ">
                {apps.map((app, index) => (
                  <div key={index} className="bg-gray-100 bg-transparent border border-gradient-to-r from-gray-700 to-gray-300 rounded-xl p-4 min-w-[300px]  flex-shrink flex items-center content-center justify-between space-x-4 transition transform hover:scale-105 hover:shadow-md" ref={containerRef}>
                    <div className='flex items-center gap-6'>
                    <img src={app.icon} alt={`${app.name} Icon`} className="w-16 h-16" />
                    <div>
                      <h3 className="text-xl font-semibold">{app.name}</h3>
                      <p className="text-gray-400 text-base font-normal">{app.type}</p>

                    </div>
                    </div>
                                          <button className={` btn-3d text-base font-semibold ${getButtonClass(app.action)}`}>
                        {app.action}
                      </button>
                  </div>
                ))}
              </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryPage;

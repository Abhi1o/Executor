import React, { useRef,useState } from 'react';
import coins from "../../Assets/Image/Cosmos__1_-removebg-preview.png";
import cosmos from "../../Assets/Image/Consortium_Blockchain-removebg-preview.png";
import solana from '../../Assets/Image/solana-logo.png';
import comdex from '../../Assets/Image/comdex.png';
import market from "../../Assets/Image/marketplace.png";
import "./MarketPlace.css";

interface Agent {
  id:string;
  name: string;
  type: string;
  action: string;
  icon: string;
}

interface MarketplaceProps {
  onSelectAgent: (agent: Agent) => void;
  selectedAgents: Agent[];
}

const apps: Agent[] = [
  {  id: '1', name: 'Cosmos', type: 'Productivity', action: 'Added', icon: coins },
  { id: '2',name: 'Blockchain', type: 'Productivity', action: 'Coming Soon', icon: cosmos },
  { id: '3',name: 'Comdex', type: 'Productivity', action: 'Coming Soon', icon: comdex },
  { id: '4',name: 'Solana', type: 'Productivity', action: 'Coming Soon', icon: solana },
  // Add more apps as needed
];

const Marketplace:React.FC<MarketplaceProps> = ({ onSelectAgent, selectedAgents }) => {
  const isAgentSelected = (agent: Agent) => {
    return selectedAgents.some(selected => selected.id === agent.id);
  };
  // const [selectedAgents, setSelectedAgents] = useState<Agent[]>([]);

  // const isAgentSelected = (agent: Agent) => {
  //   return selectedAgents.some(selected => selected.id === agent.id);
  // };
  // const toggleAgentSelection = (agent: Agent) => {
  //   const agentIndex = selectedAgents.findIndex(selected => selected.name === agent.name);
  //   if (agentIndex === -1) {
  //     setSelectedAgents([...selectedAgents, agent]);
  //   } else {
  //     const updatedAgents = [...selectedAgents];
  //     updatedAgents.splice(agentIndex, 1);
  //     setSelectedAgents(updatedAgents);
  //   }
  // };
  const containerRef = useRef<HTMLDivElement>(null);

  const getButtonClass = (action: string) => {
    switch(action) {
      case 'Added':
        return 'bg-green-500 hover:bg-green-400';
      case 'Coming Soon':
        return 'bg-gray-500 hover:bg-gray-400';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen p-5 pt-8 marketplace">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl pt-3 pl-6 pr-40 mb-8 shadow-lg min-h-52">
          <div className="flex items-center bg-contain object-contain bg-no-repeat bg-right" style={{ backgroundImage: `url(${market})` }}>
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
            <div className="grid grid-flow-col grid-cols-2 grid-rows-2 overflow-x gap-8">
              {apps.map((app, index) => (
                <div
                  key={index}
                  className="bg-gray-100 bg-transparent border border-gradient-to-r from-gray-700 to-gray-300 rounded-xl p-4 min-w-[300px] flex-shrink flex items-center content-center justify-between space-x-4 transition transform hover:scale-105 hover:shadow-md"
                  ref={containerRef}
                >
                  <div className="flex items-center gap-6">
                    <img src={app.icon} alt={`${app.name} Icon`} className="w-16 h-16" />
                    <div>
                      <h3 className="text-xl font-semibold">{app.name}</h3>
                      <p className="text-gray-400 text-base font-normal">{app.type}</p>
                    </div>
                  </div>
                  <button
                className={`btn-3d text-base font-semibold ${getButtonClass(app.action)}`}
                onClick={() => onSelectAgent(app)}
                disabled={isAgentSelected(app)}
              >
                {isAgentSelected(app) ? 'Added' : 'Add'}
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

export default Marketplace;

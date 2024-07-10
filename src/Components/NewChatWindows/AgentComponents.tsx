import React from 'react';

interface Agent {
    name: string;
    type: string;
    action: string;
    icon: string;
  }
interface AgentComponentProps {
  selectedAgents: Agent[];
  removeAgent: (agent: Agent) => void;
}
const AgentComponent: React.FC<AgentComponentProps> = ({ selectedAgents, removeAgent }) => {
    return (
      <div className="min-h-screen p-5 pt-8">
        <h2 className="text-2xl font-bold mb-7 mt-9">Chat Page</h2>
        <div className="space-y-4">
          {selectedAgents.map((agent, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-xl flex items-center justify-between">
              <img src={agent.icon} alt={`${agent.name} Icon`} className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">{agent.name}</h3>
                <p className="text-gray-400 text-base font-normal">{agent.type}</p>
              </div>
              <button
                className="btn-3d bg-red-500 hover:bg-red-400 text-base font-semibold"
                onClick={() => removeAgent(agent)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default AgentComponent;

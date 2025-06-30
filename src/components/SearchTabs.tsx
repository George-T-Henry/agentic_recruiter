import React, { useState } from 'react';
import { Users, List, Mail } from 'lucide-react';

const SearchTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('candidates');
  
  const tabs = [
    { id: 'candidates', label: 'All Candidates', icon: Users },
    { id: 'contacts', label: 'Contacts List', count: 6, icon: List },
    { id: 'campaigns', label: 'Campaigns', icon: Mail },
  ];
  
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="px-6">
        <nav className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
                {tab.count && (
                  <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default SearchTabs;
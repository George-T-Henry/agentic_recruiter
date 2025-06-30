import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';
import SearchTabs from './components/SearchTabs';
import SearchControls from './components/SearchControls';
import CandidateCard from './components/CandidateCard';
import { mockCandidates } from './data/mockData';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const openChat = () => {
    setChatOpen(true);
    setSidebarCollapsed(false); // Ensure sidebar is expanded when chat opens
  };

  const closeChat = () => {
    setChatOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {chatOpen ? (
        <ChatInterface onClose={closeChat} />
      ) : (
        <Sidebar 
          isCollapsed={sidebarCollapsed} 
          onToggle={toggleSidebar}
          onChatOpen={openChat}
        />
      )}
      
      <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
        chatOpen ? 'ml-64' : sidebarCollapsed ? 'ml-16' : 'ml-64'
      }`}>
        <Header />
        <SearchTabs />
        <SearchControls />
        
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-4">
            {mockCandidates.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                {...candidate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
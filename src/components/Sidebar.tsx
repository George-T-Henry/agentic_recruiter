import React from 'react';
import { Users, Search, MapPin, BarChart3, Settings, Home, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  onChatOpen: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle, onChatOpen }) => {
  return (
    <div className={`bg-slate-900 text-white h-screen flex flex-col transition-all duration-300 ease-in-out ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-6 flex items-center justify-between">
        <div className={`w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold text-lg transition-opacity duration-200 ${
          isCollapsed ? 'opacity-100' : 'opacity-100'
        }`}>
          P
        </div>
        <button
          onClick={onToggle}
          className={`p-1 rounded-lg hover:bg-slate-800 transition-colors ${
            isCollapsed ? 'hidden' : 'block'
          }`}
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      
      {isCollapsed && (
        <div className="px-4 mb-4">
          <button
            onClick={onToggle}
            className="w-full p-2 rounded-lg hover:bg-slate-800 transition-colors flex justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
      
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <Home size={20} />
              <span className={`transition-opacity duration-200 ${
                isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
              }`}>Dashboard</span>
              {isCollapsed && (
                <div className="absolute left-16 bg-slate-800 text-white px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  Dashboard
                </div>
              )}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800 text-blue-400 group">
              <Search size={20} />
              <span className={`transition-opacity duration-200 ${
                isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
              }`}>Searches</span>
              {isCollapsed && (
                <div className="absolute left-16 bg-slate-800 text-white px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  Searches
                </div>
              )}
            </a>
          </li>
          <li>
            <button 
              onClick={onChatOpen}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group text-left"
            >
              <MessageCircle size={20} />
              <span className={`transition-opacity duration-200 ${
                isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
              }`}>AI Assistant</span>
              {isCollapsed && (
                <div className="absolute left-16 bg-slate-800 text-white px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  AI Assistant
                </div>
              )}
            </button>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <Users size={20} />
              <span className={`transition-opacity duration-200 ${
                isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
              }`}>Candidates</span>
              {isCollapsed && (
                <div className="absolute left-16 bg-slate-800 text-white px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  Candidates
                </div>
              )}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <MapPin size={20} />
              <span className={`transition-opacity duration-200 ${
                isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
              }`}>Locations</span>
              {isCollapsed && (
                <div className="absolute left-16 bg-slate-800 text-white px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  Locations
                </div>
              )}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <BarChart3 size={20} />
              <span className={`transition-opacity duration-200 ${
                isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
              }`}>Analytics</span>
              {isCollapsed && (
                <div className="absolute left-16 bg-slate-800 text-white px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  Analytics
                </div>
              )}
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-slate-800">
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
          <Settings size={20} />
          <span className={`transition-opacity duration-200 ${
            isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
          }`}>Settings</span>
          {isCollapsed && (
            <div className="absolute left-16 bg-slate-800 text-white px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Settings
            </div>
          )}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
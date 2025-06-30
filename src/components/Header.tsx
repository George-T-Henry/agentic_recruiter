import React from 'react';
import { ChevronLeft, BarChart3, Save, MoreHorizontal } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ChevronLeft size={20} />
            <span>Searches</span>
          </button>
          <span className="text-gray-400">/</span>
          <span className="font-medium text-gray-900">Product Person TEST TEST</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <BarChart3 size={16} />
            <span>ATS last synced 31 minutes ago</span>
          </div>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <MoreHorizontal size={20} />
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

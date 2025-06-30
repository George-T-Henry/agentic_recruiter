import React from 'react';
import { Search, MapPin, SlidersHorizontal, BarChart3 } from 'lucide-react';

const SearchControls: React.FC = () => {
  return (
    <div className="bg-white px-6 py-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Generate a new search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <MapPin size={16} />
            <span>All Locations</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <SlidersHorizontal size={16} />
            <span>Advanced</span>
          </button>
        </div>
        
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
          <BarChart3 size={16} />
          <span className="font-medium">Insights Report</span>
        </button>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <span className="font-medium">53</span> candidates sourced by Copilot (10 viewed)
      </div>
    </div>
  );
};

export default SearchControls;
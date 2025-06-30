import React from 'react';
import { MessageCircle, CheckCircle, Building, Calendar } from 'lucide-react';

interface Experience {
  role: string;
  company: string;
  period: string;
}

interface CandidateCardProps {
  id: string;
  name: string;
  avatar: string;
  currentRole: string;
  currentCompany: string;
  totalExperience: string;
  experiences: Experience[];
  status: string;
  context: string[];
  inATS?: boolean;
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  name,
  avatar,
  currentRole,
  currentCompany,
  totalExperience,
  experiences,
  status,
  context,
  inATS
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex space-x-4 flex-1">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-gray-900">{name}</h3>
              {inATS && (
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  In your ATS
                </span>
              )}
            </div>
            
            <p className="text-gray-600 mt-1">{currentRole} at {currentCompany}</p>
            <p className="text-sm text-gray-500 mt-2">{totalExperience}</p>
            
            <div className="mt-3 space-y-1">
              {experiences.map((exp, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <Building size={14} className="text-gray-400" />
                  <span className="text-gray-600">{exp.role} at</span>
                  <span className="text-blue-600 hover:underline cursor-pointer">{exp.company}</span>
                  <span className="text-gray-500">{exp.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-end space-y-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium">
            Message
          </button>
          
          <div className="text-right">
            <p className="text-sm font-medium text-gray-700 mb-2">Context</p>
            <div className="space-y-1">
              {context.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <CheckCircle size={14} className="text-green-500" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
              <div className="flex items-center space-x-2 text-sm mt-2">
                <div className="w-4 h-4 bg-green-100 rounded flex items-center justify-center">
                  <span className="text-green-600 text-xs font-bold">A</span>
                </div>
                <span className="text-blue-600 hover:underline cursor-pointer">View profile in your ATS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
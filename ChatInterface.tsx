import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  type: 'system' | 'user';
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  onClose: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'system',
      content: 'Hello! I\'m your AI recruitment assistant. I can help you find candidates, analyze profiles, and optimize your search strategies. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Focus input when chat opens
    inputRef.current?.focus();
  }, []);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const systemMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'system',
        content: getAIResponse(userMessage.content),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, systemMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (userInput: string): string => {
    const responses = [
      "I can help you refine your search criteria. What specific skills or experience are you looking for?",
      "Based on your current search, I've found several promising candidates. Would you like me to prioritize them by specific criteria?",
      "I can analyze the candidate profiles you're viewing and suggest similar candidates from our database.",
      "Let me help you optimize your outreach strategy. What's your current response rate?",
      "I can provide insights on market trends for the roles you're recruiting. Which positions are you focusing on?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="w-64 sm:w-80 md:w-96 lg:w-[33vw] xl:w-[33vw] min-w-64 max-w-[40vw] bg-white h-screen flex flex-col border-r border-gray-200 fixed left-0 top-0 z-10">
      {/* Fixed Chat Header */}
      <div className="bg-slate-900 text-white p-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center space-x-3 min-w-0">
          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center flex-shrink-0">
            <Bot size={16} />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-sm truncate">AI Assistant</h3>
            <p className="text-xs text-slate-300">Online</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-slate-800 transition-colors flex-shrink-0"
        >
          <X size={16} />
        </button>
      </div>

      {/* Scrollable Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
              <div
                className={`rounded-lg px-3 py-2 text-sm break-words ${
                  message.type === 'user'
                    ? 'bg-blue-500 text-white rounded-br-sm'
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm shadow-sm'
                }`}
              >
                {message.content}
              </div>
              <div className={`text-xs text-gray-500 mt-1 ${
                message.type === 'user' ? 'text-right' : 'text-left'
              }`}>
                {formatTime(message.timestamp)}
              </div>
            </div>
            <div className={`flex-shrink-0 ${
              message.type === 'user' ? 'order-1 ml-2' : 'order-2 mr-2'
            }`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                message.type === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-900 text-white'
              }`}>
                {message.type === 'user' ? <User size={12} /> : <Bot size={12} />}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-[85%]">
              <div className="bg-white text-gray-800 border border-gray-200 rounded-lg rounded-bl-sm shadow-sm px-3 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 mr-2">
              <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">
                <Bot size={12} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Fixed Input Area */}
      <div className="p-4 bg-white border-t border-gray-200 flex-shrink-0">
        <div className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm min-w-0"
            disabled={isTyping}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
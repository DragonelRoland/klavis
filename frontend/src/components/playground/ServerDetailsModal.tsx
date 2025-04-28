'use client';

import { X, LightbulbIcon, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type ServerTool = {
  id: string;
  name: string;
  description: string;
};

type ServerDetailsProps = {
  isOpen: boolean;
  onClose: () => void;
  server: {
    name: string;
    description: string;
    iconColor?: string;
    tools?: ServerTool[];
  };
};

export function ServerDetailsModal({ isOpen, onClose, server }: ServerDetailsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const tools = server.tools || [];
  
  // Filter tools based on search term
  const filteredTools = searchTerm
    ? tools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        tool.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : tools;

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close on escape key
  useEffect(() => {
    function handleEscKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getIconBg = () => {
    if (server.iconColor) return server.iconColor;
    return 'bg-blue-100';
  };
  
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
      <div 
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[85vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 ${getIconBg()} rounded-md flex items-center justify-center text-lg font-semibold`}>
              {server.name.charAt(0)}
            </div>
            <h2 className="text-xl font-semibold">{server.name}</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          <p className="text-gray-600">{server.description}</p>
          
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Available Tools</h3>
              <div className="text-xs text-gray-500">
                {filteredTools.length} of {tools.length}
              </div>
            </div>
            
            {/* Search */}
            <div className="relative mb-4">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Search size={16} />
              </div>
              <input
                type="text"
                placeholder="Search tools..."
                className="w-full rounded-md border border-gray-200 pl-9 pr-4 py-2 text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Tools List */}
            <div className="space-y-3">
              {filteredTools.length > 0 ? (
                filteredTools.map((tool) => (
                  <div key={tool.id} className="border border-gray-100 rounded-lg p-4 bg-gray-50">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 rounded-md p-1">
                        <LightbulbIcon size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{tool.name}</h4>
                        <p className="text-xs text-gray-600 mt-1">{tool.description}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500 py-6">
                  No tools match your search
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
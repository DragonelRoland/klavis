import { ChevronDown, Plus, Search, X, RefreshCw, ArrowLeft, ArrowRight, Bookmark } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-[#E5E7EB] bg-white flex flex-col">
      {/* URL Bar */}
      <div className="h-10 border-b border-[#E5E7EB] flex items-center px-3 gap-2 text-gray-500">
        <div className="flex items-center gap-1.5">
          <ArrowLeft size={16} className="hover:text-gray-800 cursor-pointer" />
          <ArrowRight size={16} className="hover:text-gray-800 cursor-pointer" />
          <RefreshCw size={16} className="hover:text-gray-800 cursor-pointer" />
        </div>
        <div className="flex items-center flex-1 mx-2 bg-gray-100 rounded-md px-3 py-1.5 text-sm">
          <Search size={14} className="mr-2 text-gray-400" />
          <span className="text-gray-800">klavis.ai/playground</span>
          <X size={14} className="ml-auto hover:text-gray-800 cursor-pointer" />
        </div>
        <Bookmark size={16} className="hover:text-gray-800 cursor-pointer" />
      </div>
      
      {/* Main Header */}
      <div className="h-14 flex items-center px-6">
        <div className="flex-1 flex items-center gap-4">
          <h2 className="text-xl font-semibold tracking-tight">Playground</h2>
          <div className="ml-6 flex items-center gap-2">
            <span className="text-sm text-gray-500 font-medium">LLM Model</span>
            <button className="flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-gray-50">
              GPT-4o <ChevronDown size={16} />
            </button>
          </div>
        </div>
        <button className="flex items-center gap-2 rounded-md bg-[#181C23] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#232834] transition-colors">
          <Plus size={18} /> New Chat
        </button>
      </div>
    </header>
  );
} 
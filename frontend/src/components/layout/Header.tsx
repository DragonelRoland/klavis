import { ChevronDown, Plus } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 border-b border-[#E5E7EB] bg-white z-10 flex items-center px-8">
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
    </header>
  );
} 
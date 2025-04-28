import { ChatInterface } from '@/components/playground/ChatInterface';
import { MCPPanel } from '@/components/playground/MCPPanel';

export default function Playground() {
  return (
    <div className="flex h-[calc(100vh-4rem)] gap-6 px-8 py-8 bg-[#F7F8FA]">
      <div className="flex-1 flex flex-col">
        <div className="mb-4">
          <span className="text-xs text-gray-400 font-semibold uppercase">Playground</span>
        </div>
        <ChatInterface />
      </div>
      <div className="w-[420px] flex flex-col">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs text-gray-400 font-semibold uppercase">Your MCP Panel</span>
          <input
            type="text"
            placeholder="Search servers..."
            className="rounded-md border border-gray-300 px-3 py-2 text-sm w-48"
          />
        </div>
        <MCPPanel />
      </div>
    </div>
  );
} 
import { ChatInterface } from '@/components/playground/ChatInterface';
import { MCPPanel } from '@/components/playground/MCPPanel';

export default function Playground() {
  return (
    <div className="flex h-[calc(100vh-4rem)] gap-8 px-8 py-6 bg-[#F7F8FA]">
      <div className="flex-1 flex flex-col">
        <ChatInterface />
      </div>
      <div className="w-[420px] flex flex-col">
        <MCPPanel />
      </div>
    </div>
  );
} 
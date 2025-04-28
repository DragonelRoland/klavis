export default function Playground() {
  return (
    <div className="grid h-[calc(100vh-8rem)] grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Chat Interface</h2>
          <select className="rounded-md border border-gray-300 px-3 py-2 text-sm">
            <option>GPT-4</option>
            <option>GPT-3.5</option>
            <option>Claude</option>
          </select>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto">
          {/* Message list will go here */}
        </div>
        <div className="mt-4">
          <textarea
            className="w-full rounded-md border border-gray-300 p-3"
            placeholder="Type your message..."
            rows={3}
          />
          <button className="mt-2 w-full rounded-md bg-primary-500 px-4 py-2 text-white hover:bg-primary-600">
            Send Message
          </button>
        </div>
      </div>
      <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">MCP Panel</h2>
          <input
            type="text"
            placeholder="Search servers..."
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          {/* Server list will go here */}
        </div>
      </div>
    </div>
  );
} 
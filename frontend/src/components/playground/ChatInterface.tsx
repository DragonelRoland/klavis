export function ChatInterface() {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 h-full min-h-[500px]">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Chat Interface</h2>
        <select className="rounded-md border border-gray-300 px-3 py-2 text-sm">
          <option>GPT-4o</option>
          <option>GPT-4o-mini</option>
          <option>Claude 3.7 Sonnet</option>
          <option>Claude 3.5 Sonnet</option>
          <option>Gemini 2.5 Pro</option>
          <option>Gemini 2.0 Flash</option>
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
  );
} 
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Klavis AI</h1>
      <p className="text-gray-600">
        Your AI-powered development platform for building and deploying applications.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="mb-2 text-xl font-semibold">Playground</h2>
          <p className="text-gray-600">
            Experiment with AI models and build your applications in our interactive playground.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="mb-2 text-xl font-semibold">MCP Panel</h2>
          <p className="text-gray-600">
            Manage your servers and monitor their performance in real-time.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="mb-2 text-xl font-semibold">API Integration</h2>
          <p className="text-gray-600">
            Seamlessly integrate AI capabilities into your applications.
          </p>
        </div>
      </div>
    </div>
  );
}

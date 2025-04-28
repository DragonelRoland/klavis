export function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 border-b border-gray-200 bg-white">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold">Dashboard</h2>
        </div>
        <div className="flex items-center space-x-4">
          <button className="rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600">
            New Chat
          </button>
        </div>
      </div>
    </header>
  );
} 
import { tokens } from '@/theme/tokens';

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white">
      <div className="flex h-full flex-col">
        <div className="p-4">
          <h1 className="text-xl font-bold">Klavis AI</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a href="/" className="block rounded-md px-4 py-2 hover:bg-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="/playground" className="block rounded-md px-4 py-2 hover:bg-gray-700">
                Playground
              </a>
            </li>
          </ul>
        </nav>
        <div className="border-t border-gray-700 p-4">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-gray-600"></div>
            <div>
              <p className="text-sm font-medium">User Name</p>
              <p className="text-xs text-gray-400">user@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
} 
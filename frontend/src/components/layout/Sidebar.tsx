import { Home, Terminal, Key, User, CreditCard, Settings } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#181C23] text-white shadow-lg z-20">
      <div className="flex h-full flex-col">
        <div className="p-6 pb-4 border-b border-[#232834]">
          <h1 className="text-2xl font-bold tracking-tight">KlavisAI</h1>
        </div>
        <nav className="flex-1 px-2 py-4 overflow-y-auto">
          <div className="mb-2 text-xs font-semibold uppercase text-gray-400 px-2">Application</div>
          <ul className="space-y-1">
            <li>
              <a href="/" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#232834] transition-colors">
                <Home size={18} /> Home
              </a>
            </li>
            <li>
              <a href="/playground" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#232834] transition-colors">
                <Terminal size={18} /> Playground
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#232834] transition-colors">
                <Key size={18} /> API Keys
              </a>
            </li>
          </ul>
          <div className="mt-6 mb-2 text-xs font-semibold uppercase text-gray-400 px-2">Settings</div>
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#232834] transition-colors">
                <User size={18} /> Profile
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#232834] transition-colors">
                <CreditCard size={18} /> Billing
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#232834] transition-colors">
                <Settings size={18} /> Settings
              </a>
            </li>
          </ul>
        </nav>
        <div className="border-t border-[#232834] p-4 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gray-600 flex items-center justify-center font-bold text-lg">K</div>
          <div>
            <p className="text-sm font-medium leading-tight">r.graser99</p>
            <p className="text-xs text-gray-400 leading-tight">r.graser99...</p>
          </div>
        </div>
      </div>
    </aside>
  );
} 
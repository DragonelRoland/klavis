import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 pl-64">
        <Header />
        <main className="mt-16 p-6">{children}</main>
      </div>
    </div>
  );
} 
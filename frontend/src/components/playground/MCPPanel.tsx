'use client';

import { useState } from 'react';
import { ServerDetailsModal } from './ServerDetailsModal';
import { Search, Plus, Zap, ChevronDown } from 'lucide-react';

// Define a more complete type for servers with tools
type Server = {
  name: string;
  description: string;
  enabled: boolean;
  iconColor?: string;
  icon?: React.ReactNode;
  usageCount?: number;
  tools?: Array<{
    id: string;
    name: string;
    description: string;
  }>;
};

// Server icons (can be replaced with actual SVG components for production)
const ServerIcons = {
  KlavisReportGen: () => (
    <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center text-lg font-semibold text-purple-600">K</div>
  ),
  WebSearch: () => (
    <div className="w-8 h-8 flex items-center justify-center">
      <span className="text-orange-500 text-xl">🔥</span>
    </div>
  ),
  YouTube: () => (
    <div className="w-8 h-8 flex items-center justify-center">
      <span className="text-red-500 text-xl">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      </span>
    </div>
  ),
  GitHub: () => (
    <div className="w-8 h-8 flex items-center justify-center">
      <span className="text-gray-800 text-xl">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </span>
    </div>
  ),
  Markdown2doc: () => (
    <div className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100">
      <span className="text-gray-800 text-sm font-bold">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 3v4a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 17V10h1l1.5 3 1.5-3h1v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </span>
    </div>
  ),
  DeepResearch: () => (
    <div className="w-8 h-8 flex items-center justify-center">
      <span className="text-orange-500 text-xl">🔥</span>
    </div>
  ),
};

const INITIAL_SERVERS: Server[] = [
  {
    name: 'Klavis ReportGen',
    description: 'Generate visually appealing JavaScript web reports from search queries with Klavis AI.',
    enabled: true,
    iconColor: 'bg-purple-100',
    icon: ServerIcons.KlavisReportGen(),
    usageCount: 1331,
    tools: [
      {
        id: 'generate_web_reports',
        name: 'generate_web_reports',
        description: 'Generate visually appealing JavaScript web reports based on search queries',
      },
      {
        id: 'export_report',
        name: 'export_report',
        description: 'Export generated reports to PDF, HTML, or other formats',
      }
    ]
  },
  {
    name: 'Web Search',
    description: 'Advanced web crawling, scraping, and search tools.',
    enabled: true,
    iconColor: 'bg-orange-100',
    icon: ServerIcons.WebSearch(),
    usageCount: 1278,
    tools: [
      {
        id: 'search_web',
        name: 'search_web',
        description: 'Perform semantic search across the web',
      },
      {
        id: 'extract_content',
        name: 'extract_content',
        description: 'Extract and summarize content from a web page',
      }
    ]
  },
  {
    name: 'YouTube',
    description: 'Extract and convert YouTube video transcripts.',
    enabled: true,
    iconColor: 'bg-red-100',
    icon: ServerIcons.YouTube(),
    usageCount: 1149,
    tools: [
      {
        id: 'extract_transcript',
        name: 'extract_transcript',
        description: 'Extract transcript from a YouTube video URL',
      },
      {
        id: 'summarize_video',
        name: 'summarize_video',
        description: 'Generate a summary of a YouTube video based on its transcript',
      }
    ]
  },
  {
    name: 'GitHub',
    description: 'GitHub official MCP Server',
    enabled: false,
    iconColor: 'bg-gray-100',
    icon: ServerIcons.GitHub(),
    usageCount: 1128,
    tools: [
      {
        id: 'search_repos',
        name: 'search_repos',
        description: 'Search GitHub repositories',
      },
      {
        id: 'get_file',
        name: 'get_file',
        description: 'Get file content from a GitHub repository',
      }
    ]
  },
  {
    name: 'Markdown2doc',
    description: 'Convert markdown text to different file formats (pdf, docx, etc).',
    enabled: false,
    icon: ServerIcons.Markdown2doc(),
    usageCount: 912,
    tools: [
      {
        id: 'convert_markdown',
        name: 'convert_markdown',
        description: 'Convert markdown to various document formats',
      }
    ]
  },
  {
    name: 'Deep Research',
    description: 'A personal research assistant that analyzes and summarizes web content.',
    enabled: true,
    iconColor: 'bg-orange-100',
    icon: ServerIcons.DeepResearch(),
    usageCount: 872,
    tools: [
      {
        id: 'research_topic',
        name: 'research_topic',
        description: 'Perform in-depth research on a specific topic',
      },
      {
        id: 'analyze_content',
        name: 'analyze_content',
        description: 'Analyze and extract insights from web content',
      }
    ]
  },
  {
    name: 'Supabase',
    description: 'Interact with your Supabase projects and databases.',
    enabled: false,
  },
  {
    name: 'Postgres',
    description: 'Read-only access to PostgreSQL databases.',
    enabled: false,
  },
  {
    name: 'Discord',
    description: 'Integrate with Discord for chat and automation.',
    enabled: false,
  },
  {
    name: 'Slack',
    description: 'Integrate with Slack for chat and automation.',
    enabled: false,
  },
  {
    name: 'Firecrawl',
    description: 'Web crawling and scraping tools.',
    enabled: false,
  },
  {
    name: 'Firecrawl Deep Research',
    description: 'Advanced research and crawling tools.',
    enabled: false,
  },
  {
    name: 'Report Generation',
    description: 'Generate reports and documents from data.',
    enabled: false,
  },
  {
    name: 'Resend',
    description: 'Send transactional emails via Resend.',
    enabled: false,
  },
  {
    name: 'Pandoc',
    description: 'Convert documents between different formats.',
    enabled: false,
  },
  {
    name: 'Markitdown',
    description: 'Convert markdown to other formats.',
    enabled: false,
  },
];

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={enabled}
      onClick={onChange}
      className={`relative w-11 h-6 flex items-center rounded-full border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${enabled ? 'bg-blue-500 border-blue-500' : 'bg-gray-200 border-gray-300'}`}
    >
      <span
        className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-200 ${enabled ? 'translate-x-5' : ''}`}
      />
    </button>
  );
}

export function MCPPanel() {
  const [servers, setServers] = useState<Server[]>(INITIAL_SERVERS);
  const [selectedServer, setSelectedServer] = useState<Server | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = (idx: number) => {
    setServers((prev) =>
      prev.map((s, i) => (i === idx ? { ...s, enabled: !s.enabled } : s))
    );
  };

  const handleOpenDetails = (server: Server) => {
    setSelectedServer(server);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
  };

  // Show only first 6 servers for the grid
  const displayedServers = servers.slice(0, 6);
  const otherServers = servers.slice(6);

  return (
    <>
      <div className="flex-1 flex flex-col min-h-[500px]">
        {/* Header with title, search and actions */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Your MCP Panel</h3>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Search size={16} />
              </div>
              <input
                type="text"
                placeholder="Search servers..."
                className="w-full md:w-64 rounded-md border border-gray-200 pl-9 pr-4 py-2 text-sm"
              />
            </div>
            <div className="relative">
              <button className="flex items-center gap-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm">
                Popular <ChevronDown size={16} />
              </button>
            </div>
            <button className="flex items-center gap-1 rounded-md bg-blue-500 text-white px-4 py-2 text-sm">
              <Plus size={16} /> Add External Server
            </button>
          </div>
        </div>

        {/* Server grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto">
          {displayedServers.map((server, idx) => (
            <div key={server.name} className="rounded-xl border border-gray-100 bg-white p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                {/* Server icon */}
                {server.icon || (
                  <div className={`w-8 h-8 ${server.iconColor || 'bg-gray-100'} rounded-md flex items-center justify-center text-lg font-semibold`}>
                    {server.name.charAt(0)}
                  </div>
                )}
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{server.name}</h4>
                    <Toggle enabled={server.enabled} onChange={() => handleToggle(idx)} />
                  </div>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{server.description}</p>
                </div>
              </div>
              
              {/* Usage stats and details */}
              <div className="flex items-center justify-between mt-4">
                {server.usageCount ? (
                  <div className="flex items-center gap-1 text-xs text-amber-500">
                    <Zap size={14} className="fill-amber-500" /> {server.usageCount}
                    {server.name === 'GitHub' && !server.enabled && (
                      <span className="ml-2 text-orange-500 px-2 py-0.5 bg-orange-50 rounded-full text-xs font-medium">Not Authenticated</span>
                    )}
                  </div>
                ) : (
                  <div />
                )}
                <button 
                  className="text-xs text-blue-600 hover:underline py-1 px-2"
                  onClick={() => handleOpenDetails(server)}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedServer && (
        <ServerDetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseDetails}
          server={selectedServer}
        />
      )}
    </>
  );
} 
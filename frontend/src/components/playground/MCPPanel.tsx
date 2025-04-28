'use client';

import { useState } from 'react';
import { ServerDetailsModal } from './ServerDetailsModal';

// Define a more complete type for servers with tools
type Server = {
  name: string;
  description: string;
  enabled: boolean;
  iconColor?: string;
  tools?: Array<{
    id: string;
    name: string;
    description: string;
  }>;
};

const INITIAL_SERVERS: Server[] = [
  {
    name: 'Klavis ReportGen',
    description: 'Generate visually appealing JavaScript web reports and documents from search queries with Klavis AI.',
    enabled: true,
    iconColor: 'bg-red-100',
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

  return (
    <>
      <div className="flex-1 overflow-y-auto rounded-lg border border-gray-200 bg-white p-6 min-h-[500px]">
        <div className="flex flex-col gap-y-4">
          {servers.map((server, idx) => (
            <div key={server.name} className="rounded-xl border border-gray-100 bg-[#FAFAFB] p-4 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-base text-gray-900">{server.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{server.description}</div>
                </div>
                <Toggle enabled={server.enabled} onChange={() => handleToggle(idx)} />
              </div>
              <button 
                className="mt-2 text-xs text-blue-600 hover:underline self-start"
                onClick={() => handleOpenDetails(server)}
              >
                Details
              </button>
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
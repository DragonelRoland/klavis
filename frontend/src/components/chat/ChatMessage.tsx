import React from 'react';
import { User, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { cn } from '@/lib/utils';

// Add type declarations for external modules
declare module 'react-markdown';
declare module 'react-syntax-highlighter';
declare module 'react-syntax-highlighter/dist/esm/styles/prism';

export interface ChatMessageProps {
  message: {
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp?: string;
  };
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  // Define types for the custom components used in ReactMarkdown
  const components: Record<string, React.ComponentType<any>> = {
    code({ node, inline, className, children, ...props }: {
      node: any;
      inline?: boolean;
      className?: string;
      children: React.ReactNode;
    }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
  };

  return (
    <div className={cn(
      'flex w-full items-start gap-4 p-4',
      isUser ? 'justify-end' : 'justify-start',
    )}>
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-background shadow">
          <Bot className="h-4 w-4" />
        </div>
      )}
      <div className={cn(
        'flex flex-col gap-2 rounded-lg px-4 py-3 max-w-[80%]',
        isUser ? 'bg-primary text-primary-foreground' : 'bg-muted',
      )}>
        <ReactMarkdown components={components} className="prose dark:prose-invert break-words">
          {message.content}
        </ReactMarkdown>
        {message.timestamp && (
          <div className={cn(
            'text-xs opacity-60',
            isUser ? 'text-right' : 'text-left'
          )}>
            {message.timestamp}
          </div>
        )}
      </div>
      {isUser && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-background shadow">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}; 
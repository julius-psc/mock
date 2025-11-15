'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FolderKanban, ChevronDown, ChevronRight, Settings, Search, Briefcase, TrendingUp, Building2 } from 'lucide-react';
import {
  Sidebar as SidebarUI,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarNav,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import logo from "../../../../public/assets/brand/verdyct-logo.svg";

interface Project {
  id: string;
  name: string;
}

interface Agent {
  name: string;
  href: string;
  icon: typeof Search;
}

const projects: Project[] = [
  { id: '1', name: 'AI eLearning Platform' },
  { id: '2', name: 'SaaS Analytics Tool' },
  { id: '3', name: 'Mobile Health App' },
];

const agents: Agent[] = [
  { name: 'The Analyst', href: '/dashboard/projects/analyst', icon: Search },
  { name: 'The Spy', href: '/dashboard/projects/spy', icon: Briefcase },
  { name: 'The Architect', href: '/dashboard/projects/architect', icon: Building2 },
  { name: 'The Financier', href: '/dashboard/projects/financier', icon: TrendingUp },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [expandedProject, setExpandedProject] = useState<string | null>('1');

  return (
    <SidebarUI>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="Verdyct" width={32} height={32} className="w-8 h-8" />
          <h1 className="text-xl font-bold text-white">Verdyct</h1>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarNav>
          {/* Projects Section */}
          <div className="space-y-1">
            <button
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              className="w-full flex items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm font-medium text-white/40 hover:bg-white/5 hover:text-white/70 transition-all"
            >
              <div className="flex items-center gap-3">
                <FolderKanban className="w-5 h-5" />
                Projects
              </div>
              {isProjectsOpen ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>

            {/* Projects List */}
            {isProjectsOpen && (
              <div className="ml-4 space-y-1">
                {projects.map((project) => (
                  <div key={project.id} className="space-y-1">
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="w-full flex items-center justify-between gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white/40 hover:bg-white/5 hover:text-white/70 transition-all"
                    >
                      <span className="truncate">{project.name}</span>
                      {expandedProject === project.id ? (
                        <ChevronDown className="w-4 h-4 shrink-0" />
                      ) : (
                        <ChevronRight className="w-4 h-4 shrink-0" />
                      )}
                    </button>

                    {/* Agents */}
                    {expandedProject === project.id && (
                      <div className="ml-4 space-y-1">
                        {agents.map((agent) => {
                          const Icon = agent.icon;
                          const isActive = pathname === agent.href;

                          return (
                            <Link
                              key={agent.name}
                              href={agent.href}
                              className={cn(
                                "flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium transition-all",
                                isActive
                                  ? "bg-red-600/20 text-red-300"
                                  : "text-white/40 hover:bg-white/5 hover:text-white/70"
                              )}
                            >
                              <Icon className="w-4 h-4" />
                              {agent.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </SidebarNav>
      </SidebarContent>

      <SidebarFooter>
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-white/40 hover:text-white/70 hover:bg-white/5 transition-all"
        >
          <Settings className="w-5 h-5" />
          Settings
        </Link>
      </SidebarFooter>
    </SidebarUI>
  );
}

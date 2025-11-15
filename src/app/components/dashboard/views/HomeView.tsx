'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, FolderKanban, TrendingUp, Clock } from 'lucide-react';
import Link from 'next/link';

const recentProjects = [
  {
    id: '1',
    name: 'AI eLearning Platform',
    lastUpdated: '2 hours ago',
    status: 'Active',
  },
  {
    id: '2',
    name: 'SaaS Analytics Tool',
    lastUpdated: '1 day ago',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Mobile Health App',
    lastUpdated: '3 days ago',
    status: 'Draft',
  },
];

export default function HomeView() {
  return (
    <div className="min-h-screen bg-neutral-950 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-white/60 mt-1">Welcome back! Here's an overview of your projects.</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardDescription className="flex items-center gap-2">
                <FolderKanban className="w-4 h-4" />
                Total Projects
              </CardDescription>
              <CardTitle className="text-3xl">3</CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardDescription className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Active Projects
              </CardDescription>
              <CardTitle className="text-3xl">2</CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardDescription className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Analyses Complete
              </CardDescription>
              <CardTitle className="text-3xl">12</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Recent Projects */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
            <CardDescription>Your most recently accessed projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-neutral-800 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FolderKanban className="w-5 h-5 text-red-600" />
                    <div>
                      <h3 className="font-medium text-white">{project.name}</h3>
                      <p className="text-sm text-white/60">Updated {project.lastUpdated}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Active'
                          ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                          : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                      }`}
                    >
                      {project.status}
                    </span>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Start</CardTitle>
              <CardDescription>Get started with a new project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Project
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Learn how to use Verdyct</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-white/70">
                <p>1. Create a new project or select an existing one</p>
                <p>2. Use The Analyst to analyze your market</p>
                <p>3. Run The Spy to check competition</p>
                <p>4. Let The Architect design your system</p>
                <p>5. Review financials with The Financier</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

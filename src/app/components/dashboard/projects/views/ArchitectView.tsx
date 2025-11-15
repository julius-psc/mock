'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Figma, Palette, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

export default function ArchitectView() {
  const [isDataMoatActive, setIsDataMoatActive] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const previewImages = [
    '/assets/images/elearning-preview-1.png',
    '/assets/images/elearning-preview-2.png',
    '/assets/images/elearning-preview-3.png',
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % previewImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [previewImages.length]);

  return (
    <div className="min-h-screen bg-neutral-950 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Main Content Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">The Architect</h1>
            <p className="text-md text-neutral-400 mt-1">Generating assets for: AI eLearning Captioning Tool</p>
          </div>
        </div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Live MVP Showcase - Spans 2 columns */}
          <Card className="lg:col-span-2 border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    Your MVP is Live
                    <Badge variant="success">Active</Badge>
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Your AI-generated MVP is now live and accessible. Share the link below with stakeholders and early users.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Preview and Stats Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* MVP Preview Thumbnail - Carousel */}
                  <div className="lg:col-span-2 w-full h-[400px] bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={previewImages[currentImageIndex]}
                          alt={`AI eLearning Captioning Tool Preview ${currentImageIndex + 1}`}
                          fill
                          className="object-contain"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* MVP Stats */}
                  <div className="flex flex-col justify-center gap-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white">48h</p>
                      <p className="text-sm text-neutral-500 mt-1">Build Time</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white">12</p>
                      <p className="text-sm text-neutral-500 mt-1">Core Features</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white">99.9%</p>
                      <p className="text-sm text-neutral-500 mt-1">Uptime</p>
                    </div>
                  </div>
                </div>

                {/* MVP Link and CTA */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-neutral-900 rounded-lg px-4 py-3 border border-neutral-800">
                    <p className="text-sm text-neutral-400 font-mono">
                      https://verdyct.lovable.app/dashboard
                    </p>
                  </div>
                  <Button 
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.open('https://verdyct.lovable.app/dashboard', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live MVP
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI-Generated User Flow */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Figma className="w-5 h-5 text-red-500" />
                AI-Generated User Flow
              </CardTitle>
              <CardDescription>
                Interactive user journey and wireframes generated by AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Figma Embed Placeholder */}
                <div className="w-full h-64 bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Figma className="w-12 h-12 mx-auto text-neutral-600" />
                      <p className="text-sm text-neutral-500">Figma Flow Preview</p>
                    </div>
                  </div>
                </div>

                {/* Flow Steps */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-bold">1</div>
                    <span className="text-white/70">User uploads video content</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-bold">2</div>
                    <span className="text-white/70">AI processes and generates captions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-bold">3</div>
                    <span className="text-white/70">Review and edit captions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-bold">4</div>
                    <span className="text-white/70">Export final video with captions</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <Figma className="w-4 h-4 mr-2" />
                  Open in Figma
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AI-Selected Tech Stack */}
          <Card>
            <CardHeader>
              <CardTitle>Recommended Tech Stack</CardTitle>
              <CardDescription>
                Optimized technology choices for your MVP
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Frontend */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Frontend</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      Next.js 14 (React Framework)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      Tailwind CSS
                    </li>
                  </ul>
                </div>

                {/* Backend */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Backend</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      Node.js with Express
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      PostgreSQL (Database)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      Prisma (ORM)
                    </li>
                  </ul>
                </div>

                {/* AI/ML */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">AI/ML</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      OpenAI Whisper (Speech-to-Text)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      GPT-4 (Caption Enhancement)
                    </li>
                  </ul>
                </div>

                {/* Infrastructure */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Infrastructure</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      Vercel (Hosting)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      AWS S3 (File Storage)
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Generated Brand Kit */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-red-500" />
                Generated Brand Kit
              </CardTitle>
              <CardDescription>
                AI-crafted brand identity for your project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Project Name */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Project Name</h4>
                  <p className="text-lg font-bold text-white">CaptionAI</p>
                  <p className="text-xs text-neutral-500">AI-Powered eLearning Captions</p>
                </div>

                {/* Color Palette */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Color Palette</h4>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <div className="w-full h-12 bg-[#2563EB] rounded-lg border border-neutral-800"></div>
                      <p className="text-xs text-neutral-500 mt-1 text-center">#2563EB</p>
                    </div>
                    <div className="flex-1">
                      <div className="w-full h-12 bg-[#10B981] rounded-lg border border-neutral-800"></div>
                      <p className="text-xs text-neutral-500 mt-1 text-center">#10B981</p>
                    </div>
                    <div className="flex-1">
                      <div className="w-full h-12 bg-[#F59E0B] rounded-lg border border-neutral-800"></div>
                      <p className="text-xs text-neutral-500 mt-1 text-center">#F59E0B</p>
                    </div>
                    <div className="flex-1">
                      <div className="w-full h-12 bg-[#0F172A] rounded-lg border border-neutral-800"></div>
                      <p className="text-xs text-neutral-500 mt-1 text-center">#0F172A</p>
                    </div>
                  </div>
                </div>

                {/* Typography */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Typography</h4>
                  <div className="space-y-1 text-sm text-white/70">
                    <p><strong className="text-white">Headings:</strong> Inter Bold</p>
                    <p><strong className="text-white">Body:</strong> Inter Regular</p>
                    <p><strong className="text-white">Monospace:</strong> JetBrains Mono</p>
                  </div>
                </div>

                {/* Logo Preview */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Logo</h4>
                  <div className="w-full h-24 bg-neutral-900 rounded-lg border border-neutral-800 flex items-center justify-center">
                    <p className="text-2xl font-bold text-white">CaptionAI</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <Palette className="w-4 h-4 mr-2" />
                  Download Brand Assets
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Activate Data Moat - Spans 2 columns */}
          <Card className="lg:col-span-2 border-purple-500/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Lock className="w-6 h-6 text-purple-500" />
                    Activate Your Data Moat
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Enable proprietary data collection to build competitive advantages. Your MVP will capture user interactions, feedback, and usage patterns to train custom AI models unique to your business.
                  </CardDescription>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-neutral-400">
                    {isDataMoatActive ? 'Active' : 'Inactive'}
                  </span>
                  <button
                    onClick={() => setIsDataMoatActive(!isDataMoatActive)}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                      isDataMoatActive ? 'bg-purple-600' : 'bg-neutral-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        isDataMoatActive ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Data Point 1 */}
                <div className="bg-neutral-900 rounded-lg p-4 border border-neutral-800">
                  <h4 className="text-sm font-semibold text-white mb-2">User Behavior Tracking</h4>
                  <p className="text-xs text-neutral-500">
                    Capture how users interact with your captioning tool to improve UX and AI accuracy
                  </p>
                </div>

                {/* Data Point 2 */}
                <div className="bg-neutral-900 rounded-lg p-4 border border-neutral-800">
                  <h4 className="text-sm font-semibold text-white mb-2">Custom AI Training</h4>
                  <p className="text-xs text-neutral-500">
                    Build proprietary models trained on your unique dataset for better performance
                  </p>
                </div>

                {/* Data Point 3 */}
                <div className="bg-neutral-900 rounded-lg p-4 border border-neutral-800">
                  <h4 className="text-sm font-semibold text-white mb-2">Competitive Edge</h4>
                  <p className="text-xs text-neutral-500">
                    Create defensible advantages through proprietary data that competitors can't replicate
                  </p>
                </div>
              </div>

              {isDataMoatActive && (
                <div className="mt-4 bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <p className="text-sm text-purple-300">
                    <strong>Data Moat Active:</strong> Your MVP is now collecting anonymized user data to build proprietary AI models. All data is encrypted and GDPR-compliant.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

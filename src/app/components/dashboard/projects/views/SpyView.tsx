'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UploadCloud, Target, Quote, MessageSquare, Sparkles } from 'lucide-react';

export default function SpyView() {
  return (
    <div className="min-h-screen bg-neutral-950 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Main Content Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">The Spy</h1>
            <p className="text-md text-neutral-400 mt-1">Competitive landscape for: AI eLearning Captioning Tool</p>
          </div>
          <Button variant="outline">
            <UploadCloud className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        {/* The Competitive Battlefield - 2x2 Matrix */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Target className="w-6 h-6 text-red-500" />
              The Competitive Battlefield
            </CardTitle>
            <CardDescription>
              Market positioning analysis - Identify your strategic opening
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-[600px] bg-neutral-900 rounded-lg border border-neutral-800 p-8">
              {/* Axis Labels */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-sm font-semibold text-white/60">
                Product Scope
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 text-xs text-white/40">
                <span>Creator / B2C</span>
                <span className="text-white/20">←</span>
                <span className="font-semibold text-white/60">Target Audience</span>
                <span className="text-white/20">→</span>
                <span>Enterprise / B2B</span>
              </div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-semibold text-white/60">
                Target Audience
              </div>

              {/* Y-axis scale labels */}
              <div className="absolute left-4 top-16 text-xs text-white/40">All-in-One Platform</div>
              <div className="absolute left-4 bottom-16 text-xs text-white/40">Simple Tool</div>

              {/* Grid Lines */}
              <div className="absolute inset-8 grid grid-cols-2 grid-rows-2">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-700"></div>
                {/* Horizontal Line */}
                <div className="absolute left-0 right-0 top-1/2 h-px bg-neutral-700"></div>
              </div>

              {/* Quadrant Content */}
              <div className="absolute inset-8 grid grid-cols-2 grid-rows-2 gap-4">
                {/* Top-Left Quadrant: All-in-One + B2C (CROWDED) */}
                <div className="relative flex flex-col items-center justify-center gap-4 p-4">
                  {/* Competitor Logos/Names */}
                  <div className="flex flex-col gap-3">
                    <div className="bg-neutral-800 border border-neutral-700 rounded-lg px-6 py-3 text-center">
                      <p className="text-white font-bold">Descript</p>
                      <p className="text-xs text-neutral-500">All-in-One Audio/Video</p>
                    </div>
                    <div className="bg-neutral-800 border border-neutral-700 rounded-lg px-6 py-3 text-center">
                      <p className="text-white font-bold">Podcastle</p>
                      <p className="text-xs text-neutral-500">Podcast Platform</p>
                    </div>
                    <div className="bg-neutral-800 border border-neutral-700 rounded-lg px-6 py-3 text-center">
                      <p className="text-white font-bold">Riverside.fm</p>
                      <p className="text-xs text-neutral-500">Creator Studio</p>
                    </div>
                  </div>
                  <Badge variant="destructive" className="absolute top-2 right-2">Crowded</Badge>
                </div>

                {/* Top-Right Quadrant: All-in-One + B2B */}
                <div className="relative flex items-center justify-center p-4">
                  <div className="flex flex-col gap-3">
                    <div className="bg-neutral-800 border border-neutral-700 rounded-lg px-6 py-3 text-center">
                      <p className="text-white font-bold">Kaltura</p>
                      <p className="text-xs text-neutral-500">Enterprise Video Platform</p>
                    </div>
                    <div className="bg-neutral-800 border border-neutral-700 rounded-lg px-6 py-3 text-center">
                      <p className="text-white font-bold">Panopto</p>
                      <p className="text-xs text-neutral-500">LMS Integration</p>
                    </div>
                  </div>
                </div>

                {/* Bottom-Left Quadrant: Simple Tool + B2C */}
                <div className="relative flex items-center justify-center p-4">
                  <div className="flex flex-col gap-3">
                    <div className="bg-neutral-800 border border-neutral-700 rounded-lg px-6 py-3 text-center">
                      <p className="text-white font-bold">Kapwing</p>
                      <p className="text-xs text-neutral-500">Simple Video Editor</p>
                    </div>
                    <div className="bg-neutral-800 border border-neutral-700 rounded-lg px-6 py-3 text-center">
                      <p className="text-white font-bold">SubMagic</p>
                      <p className="text-xs text-neutral-500">Auto Captions</p>
                    </div>
                  </div>
                </div>

                {/* Bottom-Right Quadrant: Simple Tool + B2B (YOUR OPENING!) */}
                <div className="relative flex items-center justify-center p-4">
                  <div className="relative">
                    {/* Flashing Green Circle with Animation */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 animate-ping"></div>
                      <div className="relative bg-green-500 rounded-full w-40 h-40 flex items-center justify-center border-4 border-green-400 shadow-lg shadow-green-500/50">
                        <div className="text-center">
                          <Sparkles className="w-8 h-8 mx-auto mb-2 text-white" />
                          <p className="text-white font-bold text-sm">YOUR</p>
                          <p className="text-white font-bold text-sm">STRATEGIC</p>
                          <p className="text-white font-bold text-sm">OPENING</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant="success" className="absolute bottom-2 right-2 text-xs">Empty Space</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI-Sourced Customer Intel */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-red-500" />
              AI-Sourced Customer Intel
            </CardTitle>
            <CardDescription>
              The Spy's analysis of G2, Capterra, and Reddit threads for "Descript" and "Podcastle"
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Column 1: Top Customer Complaints */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Quote className="w-5 h-5 text-red-500" />
                  Top Customer Complaints (The "Pain")
                </h3>

                <div className="space-y-3">
                  {/* Complaint 1 */}
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Quote className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-white/80 italic mb-2">
                          "I love Descript, but the UI is way too complex. I just want to add captions, not edit a movie."
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">Descript</Badge>
                          <span className="text-xs text-neutral-500">- G2 Review, Nov 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Complaint 2 */}
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Quote className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-white/80 italic mb-2">
                          "Podcastle is great for audio, but its video tools feel like an afterthought. Not enterprise-ready."
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">Podcastle</Badge>
                          <span className="text-xs text-neutral-500">- Capterra Review, Oct 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Complaint 3 */}
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Quote className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-white/80 italic mb-2">
                          "The pricing is insane for what we need. We only want automated captions, not a full production suite."
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">Descript</Badge>
                          <span className="text-xs text-neutral-500">- Reddit r/elearning, Dec 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Complaint 4 */}
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Quote className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-white/80 italic mb-2">
                          "Slow rendering times and no API access. Can't integrate with our LMS. Deal-breaker for enterprise."
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">Kapwing</Badge>
                          <span className="text-xs text-neutral-500">- G2 Review, Nov 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Feature & Pricing Word Cloud */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Feature & Pricing Word Cloud (The "Data")
                </h3>

                <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 h-[500px] flex items-center justify-center">
                  {/* Word Cloud Simulation */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-red-600 opacity-90">
                      Confusing
                    </div>
                    <div className="absolute top-[20%] left-[25%] text-5xl font-bold text-red-500 opacity-80">
                      Expensive
                    </div>
                    <div className="absolute bottom-[25%] right-[20%] text-4xl font-bold text-red-500 opacity-75">
                      Slow
                    </div>
                    <div className="absolute top-[35%] right-[15%] text-5xl font-bold text-red-600 opacity-85">
                      Complex UI
                    </div>
                    <div className="absolute bottom-[15%] left-[15%] text-3xl font-semibold text-white/40">
                      Feature-rich
                    </div>
                    <div className="absolute top-[15%] left-[45%] text-2xl font-medium text-white/30">
                      Bloated
                    </div>
                    <div className="absolute bottom-[40%] left-[30%] text-2xl font-medium text-white/30">
                      Overpriced
                    </div>
                    <div className="absolute top-[60%] right-[35%] text-xl text-white/25">
                      No API
                    </div>
                    <div className="absolute top-[25%] right-[40%] text-xl text-white/25">
                      Learning curve
                    </div>
                    <div className="absolute bottom-[35%] right-[45%] text-lg text-white/20">
                      Overkill
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                  <p className="text-xs text-neutral-500 mb-2">
                    <strong className="text-white">AI Analysis Summary:</strong>
                  </p>
                  <p className="text-sm text-white/70">
                    Most frequent negative terms: "Confusing" (47 mentions), "Expensive" (39 mentions), "Complex UI" (34 mentions), "Slow" (28 mentions).
                    Positive terms like "Feature-rich" are often paired with qualifiers like "but too complicated."
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Spy's Verdyct */}
        <Card className="border-red-500/20 bg-red-500/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Target className="w-6 h-6 text-red-500" />
              The Spy's Verdyct: Your Strategic Opening
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/90 leading-relaxed text-lg">
              As the "Battlefield" shows, the market is crowded with complex, "all-in-one" tools for B2C creators.
              Customer complaints confirm they are frustrated by this complexity, high pricing, and lack of enterprise features like API access.
              <strong className="text-red-400"> Your opening is a simple, API-first tool for the B2B enterprise (eLearning) market.</strong>
              This segment is underserved, and competitors like Descript and Podcastle are positioned too far from this need.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-neutral-900 rounded-lg p-4 border border-neutral-800 text-center">
                <p className="text-2xl font-bold text-green-400">Empty</p>
                <p className="text-xs text-neutral-500 mt-1">Bottom-Right Quadrant</p>
              </div>
              <div className="bg-neutral-900 rounded-lg p-4 border border-neutral-800 text-center">
                <p className="text-2xl font-bold text-red-400">47</p>
                <p className="text-xs text-neutral-500 mt-1">"Confusing" Mentions</p>
              </div>
              <div className="bg-neutral-900 rounded-lg p-4 border border-neutral-800 text-center">
                <p className="text-2xl font-bold text-white">B2B eLearning</p>
                <p className="text-xs text-neutral-500 mt-1">Your Target Market</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

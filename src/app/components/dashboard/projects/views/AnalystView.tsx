'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UploadCloud, TrendingUp, User, Briefcase, MapPin, Target, Sparkles } from 'lucide-react';

export default function AnalystView() {
  return (
    <div className="min-h-screen bg-neutral-950 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Main Content Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">The Analyst</h1>
            <p className="text-md text-neutral-400 mt-1">Analysis for: AI eLearning Captioning Tool</p>
          </div>
          <Button variant="outline">
            <UploadCloud className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Overall Score Card */}
        <Card className="border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-400 mb-2">Overall Product Score</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-7xl font-bold text-green-400">87</span>
                  <span className="text-3xl text-neutral-500">/ 100</span>
                </div>
                <p className="text-lg text-green-400/80 mt-3 font-medium">Excellent Product Potential</p>
              </div>
              <div className="text-right">
                <Badge variant="success" className="text-lg px-4 py-2">Great Product</Badge>
                <p className="text-sm text-neutral-400 mt-3 max-w-xs">
                  Strong market fundamentals, clear customer need, and exceptional growth potential make this an outstanding opportunity.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Core Numbers - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* TAM */}
          <Card>
            <CardHeader>
              <CardDescription>Total Addressable Market (TAM)</CardDescription>
              <CardTitle className="text-4xl">$1.2B</CardTitle>
              <p className="text-sm text-green-400 flex items-center gap-1 mt-2">
                <TrendingUp className="w-4 h-4" />
                +5.1% vs last period
              </p>
            </CardHeader>
          </Card>

          {/* SAM */}
          <Card>
            <CardHeader>
              <CardDescription>Serviceable Available Market (SAM)</CardDescription>
              <CardTitle className="text-4xl">$450M</CardTitle>
              <p className="text-sm text-green-400 flex items-center gap-1 mt-2">
                <TrendingUp className="w-4 h-4" />
                +7.3% vs last period
              </p>
            </CardHeader>
          </Card>

          {/* CAGR */}
          <Card>
            <CardHeader>
              <CardDescription>Market Growth (CAGR)</CardDescription>
              <CardTitle className="text-4xl">15.2%</CardTitle>
              <p className="text-sm text-green-400 flex items-center gap-1 mt-2">
                <TrendingUp className="w-4 h-4" />
                +1.2% point increase
              </p>
            </CardHeader>
          </Card>
        </div>

        {/* AI-Generated Customer Persona */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <User className="w-6 h-6 text-red-500" />
              AI-Generated Ideal Customer Persona
            </CardTitle>
            <CardDescription>
              Meet your ideal customer - built from market research and behavioral data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Column 1: The "Human" */}
              <div className="space-y-4">
                {/* Persona Card */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                  {/* Avatar Circle */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Instructional Designer Ian</h3>
                      <p className="text-sm text-neutral-400 flex items-center gap-1 mt-1">
                        <Briefcase className="w-3 h-3" />
                        Corporate Trainer
                      </p>
                      <p className="text-sm text-neutral-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Enterprise L&D Department
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4 relative">
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">"</span>
                    </div>
                    <p className="text-white/80 italic pl-4">
                      I spend 5 hours a week manually fixing captions. I just want a tool that works.
                    </p>
                  </div>
                </div>

                {/* Demographics Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-center">
                    <p className="text-xs text-neutral-500">Age Range</p>
                    <p className="text-lg font-bold text-white">32-48</p>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-center">
                    <p className="text-xs text-neutral-500">Income</p>
                    <p className="text-lg font-bold text-white">$65k-$95k</p>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-center">
                    <p className="text-xs text-neutral-500">Education</p>
                    <p className="text-lg font-bold text-white">Bachelor's+</p>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-center">
                    <p className="text-xs text-neutral-500">Team Size</p>
                    <p className="text-lg font-bold text-white">5-20</p>
                  </div>
                </div>
              </div>

              {/* Column 2: The "Data" */}
              <div className="space-y-6">
                {/* Pain Points */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Pain Points
                  </h4>
                  <div className="space-y-2">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
                      <p className="text-sm text-white/80">Manual captioning is slow and tedious</p>
                      <p className="text-xs text-neutral-500 mt-1">5+ hours/week lost to manual work</p>
                    </div>
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
                      <p className="text-sm text-white/80">Transcription errors hurt credibility</p>
                      <p className="text-xs text-neutral-500 mt-1">Especially with technical terms</p>
                    </div>
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
                      <p className="text-sm text-white/80">WCAG compliance is stressful</p>
                      <p className="text-xs text-neutral-500 mt-1">Legal risk for non-compliance</p>
                    </div>
                  </div>
                </div>

                {/* Jobs-to-be-Done */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Jobs-to-be-Done (JTBD)
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Make training videos accessible to all employees
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Save time on post-production workflow
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Avoid legal compliance issues (ADA/WCAG)
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Integrate seamlessly with existing LMS
                    </div>
                  </div>
                </div>

                {/* Where to Find Them */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Where to Find Them
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">LinkedIn Groups</Badge>
                    <Badge variant="outline" className="text-xs">eLearning Guild Forum</Badge>
                    <Badge variant="outline" className="text-xs">ATD Conferences</Badge>
                    <Badge variant="outline" className="text-xs">r/instructionaldesign</Badge>
                    <Badge variant="outline" className="text-xs">L&D Slack Communities</Badge>
                    <Badge variant="outline" className="text-xs">DevLearn Events</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SEO & Content Opportunity Heatmap */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Target className="w-6 h-6 text-red-500" />
              SEO & Content Opportunity
            </CardTitle>
            <CardDescription>
              Keyword difficulty vs. search volume analysis - Find your content sweet spot
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-[500px] bg-neutral-900 rounded-lg border border-neutral-800 p-8">
              {/* Axis Labels */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-semibold text-white/60">
                Keyword Difficulty →
              </div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-semibold text-white/60">
                Monthly Search Volume →
              </div>

              {/* Scale Labels */}
              <div className="absolute bottom-4 left-16 text-xs text-white/40">Easy</div>
              <div className="absolute bottom-4 right-16 text-xs text-white/40">Hard</div>
              <div className="absolute left-4 top-16 text-xs text-white/40">High</div>
              <div className="absolute left-4 bottom-16 text-xs text-white/40">Low</div>

              {/* Heatmap Grid */}
              <div className="absolute inset-16 grid grid-cols-10 grid-rows-10 gap-2">
                {/* Most squares are red/orange (Hard, Low-Volume) */}
                {Array.from({ length: 100 }).map((_, index) => {
                  const row = Math.floor(index / 10);
                  const col = index % 10;

                  // Top-Left corner (High-Volume, Easy) - GREEN (Opportunity!)
                  if (row <= 2 && col <= 2) {
                    return (
                      <div
                        key={index}
                        className="bg-green-500 rounded opacity-80 hover:opacity-100 transition-opacity"
                      />
                    );
                  }

                  // Top-Right (High-Volume, Hard) - ORANGE
                  if (row <= 2 && col >= 7) {
                    return (
                      <div
                        key={index}
                        className="bg-orange-500 rounded opacity-50"
                      />
                    );
                  }

                  // Bottom-Left (Low-Volume, Easy) - YELLOW
                  if (row >= 7 && col <= 2) {
                    return (
                      <div
                        key={index}
                        className="bg-yellow-600 rounded opacity-40"
                      />
                    );
                  }

                  // Everything else - RED (Hard, Low-Volume - avoid)
                  return (
                    <div
                      key={index}
                      className="bg-red-600 rounded opacity-30"
                    />
                  );
                })}
              </div>

              {/* Flashing Green Highlight in Top-Left */}
              <div className="absolute top-16 left-16 w-32 h-32">
                <div className="absolute inset-0 bg-green-500 rounded-lg opacity-20 animate-ping"></div>
                <div className="relative bg-green-500/20 border-2 border-green-400 rounded-lg w-full h-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-green-400" />
                </div>
              </div>

              {/* Legend */}
              <div className="absolute top-4 right-4 bg-neutral-800 border border-neutral-700 rounded-lg p-3 space-y-2">
                <p className="text-xs font-semibold text-white mb-2">Opportunity Level</p>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-xs text-white/70">High Opportunity</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-xs text-white/70">Competitive</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-600 rounded"></div>
                  <span className="text-xs text-white/70">Low Volume</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-600 rounded"></div>
                  <span className="text-xs text-white/70">Avoid</span>
                </div>
              </div>
            </div>

            {/* High-Opportunity Keywords */}
            <div className="mt-6 bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                High-Opportunity Keywords Found (Top-Left Quadrant)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
                  <p className="text-white font-medium">"WCAG captioning tool"</p>
                  <div className="flex items-center gap-4 mt-2 text-xs">
                    <span className="text-green-400">18,000/mo searches</span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-blue-400">Difficulty: 32/100</span>
                  </div>
                </div>
                <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
                  <p className="text-white font-medium">"corporate elearning accessibility"</p>
                  <div className="flex items-center gap-4 mt-2 text-xs">
                    <span className="text-green-400">12,500/mo searches</span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-blue-400">Difficulty: 28/100</span>
                  </div>
                </div>
                <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
                  <p className="text-white font-medium">"automated video captions API"</p>
                  <div className="flex items-center gap-4 mt-2 text-xs">
                    <span className="text-green-400">9,200/mo searches</span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-blue-400">Difficulty: 35/100</span>
                  </div>
                </div>
                <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
                  <p className="text-white font-medium">"LMS caption integration"</p>
                  <div className="flex items-center gap-4 mt-2 text-xs">
                    <span className="text-green-400">7,800/mo searches</span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-blue-400">Difficulty: 24/100</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Analyst's Verdyct */}
        <Card className="border-green-500/20 bg-green-500/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Target className="w-6 h-6 text-green-500" />
              The Analyst's Verdyct: Your Market
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-white/90 leading-relaxed text-lg">
                The market is <strong className="text-green-400">large ($1.2B TAM)</strong> and <strong className="text-green-400">growing (15.2% CAGR)</strong>.
                Your ideal customer ("Instructional Designer Ian") is actively searching for a solution and is frustrated by existing tools that are too complex and expensive.
                The SEO opportunity is exceptional - you have access to high-volume, low-competition keywords that competitors are ignoring.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex-1 bg-neutral-900 rounded-lg p-6 border border-neutral-800 text-center">
                  <p className="text-5xl font-bold text-green-400">9/10</p>
                  <p className="text-sm text-neutral-400 mt-2">Market Score</p>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Market Size</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: '90%' }}></div>
                      </div>
                      <span className="text-green-400 w-12 text-right">9/10</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Growth Rate</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-green-400 w-12 text-right">8.5/10</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Customer Need</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: '95%' }}></div>
                      </div>
                      <span className="text-green-400 w-12 text-right">9.5/10</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">SEO Opportunity</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: '90%' }}></div>
                      </div>
                      <span className="text-green-400 w-12 text-right">9/10</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                <p className="text-sm text-white/70">
                  <strong className="text-white">The Analyst's Recommendation:</strong> This is an excellent market to enter.
                  Strong fundamentals, clear customer pain, and defensible SEO positioning. Proceed with high confidence.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, CornerUpRight, Sparkles } from 'lucide-react';

interface PivotEnhanceProps {
  score: number;
  marketStatus: string;
  analysisMessage: string;
  enhanceSuggestion: string;
  pivotSuggestion: string;
  onEnhance: () => void;
  onPivot: () => void;
}

export default function PivotEnhance({
  score,
  marketStatus,
  analysisMessage,
  enhanceSuggestion,
  pivotSuggestion,
  onEnhance,
  onPivot,
}: PivotEnhanceProps) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-neutral-950 p-8">
      <div className="max-w-5xl w-full space-y-12">
        {/* The "Verdyct" - Negative Result */}
        <div className="flex flex-col items-center text-center">
          {/* Score */}
          <div className="text-8xl font-bold text-primary-red mb-4">
            {score} / 100
          </div>

          {/* Title */}
          <h1 className="text-3xl font-semibold text-white mt-4">
            Market: {marketStatus}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-neutral-400 max-w-xl text-center mt-2">
            {analysisMessage}
          </p>
        </div>

        {/* The "Co-Founder" Suggestion */}
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <p className="text-purple-300 font-medium text-center">
            This idea is a dead end... but our agents found two potential paths forward.
          </p>
        </div>

        {/* The 2-Choice Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl w-full mx-auto">
          {/* Option 1: Enhance Card */}
          <Card className="bg-neutral-900 border-neutral-800 rounded-xl p-8 space-y-6 hover:border-neutral-700 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-purple-400/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Enhance</h3>
            </div>

            <p className="text-neutral-400 leading-relaxed">
              Find a profitable, unserved niche within this saturated market.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium text-purple-300">AI-Suggested Niche:</p>
              <div className="bg-neutral-800 border border-neutral-700 p-4 rounded-lg">
                <p className="text-white text-sm">
                  {enhanceSuggestion}
                </p>
              </div>
            </div>

            <Button
              onClick={onEnhance}
              variant="outline"
              className="w-full bg-neutral-800 border-neutral-700 hover:bg-neutral-700 text-white"
            >
              Analyze Niche
            </Button>
          </Card>

          {/* Option 2: Pivot Card - Highlighted */}
          <Card className="bg-neutral-900 border-2 border-purple-500 rounded-xl p-8 space-y-6 relative overflow-hidden hover:border-purple-400 transition-all">
            {/* Recommended Badge */}
            <div className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              RECOMMENDED
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 gradient-to-br from-purple-500/5 to-transparent pointer-events-none"></div>

            <div className="flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 rounded-lg bg-purple-400/20 flex items-center justify-center">
                <CornerUpRight className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Pivot</h3>
            </div>

            <p className="text-neutral-300 leading-relaxed relative z-10">
              Explore an adjacent market that our agents have detected with high potential.
            </p>
            <div className="space-y-2 relative z-10">
              <p className="text-sm font-medium text-purple-300">AI-Suggested Pivot:</p>
              <div className="bg-neutral-800 border border-purple-500/30 p-4 rounded-lg">
                <p className="text-white text-sm font-medium">
                  {pivotSuggestion}
                </p>
              </div>
            </div>

            <Button
              onClick={onPivot}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white relative z-10"
            >
              Analyze Pivot
            </Button>
          </Card>
        </div>

        {/* Additional Context */}
        <div className="flex justify-center">
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 max-w-2xl">
            <p className="text-xs text-neutral-500 text-center">
              <strong className="text-white">How it works:</strong> The &#39;Enhance&#39; option narrows your focus to find white space within the current market.
              The &#39;Pivot&#39; option explores a completely different market segment with better fundamentals.
              Our AI recommends the pivot based on your initial analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
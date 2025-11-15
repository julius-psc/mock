'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, CornerUpRight, Sparkles, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

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
    <div className="flex flex-col justify-center items-center min-h-screen bg-neutral-950 p-6 md:p-8">
      <div className="max-w-6xl w-full space-y-8 md:space-y-12">
        {/* The "Verdyct" - Negative Result */}
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Score with animated background */}
          <div className="relative mb-6">
            <div className="absolute inset-0 blur-3xl bg-primary-red/20 rounded-full"></div>
            <div className="relative text-7xl md:text-8xl font-bold text-primary-red">
              {score} / 100
            </div>
          </div>

          {/* Title with icon */}
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-primary-red" />
            <h1 className="text-2xl md:text-3xl font-semibold text-white">
              Market: {marketStatus}
            </h1>
          </div>

          {/* Subtitle */}
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 max-w-2xl">
            <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
              {analysisMessage}
            </p>
          </div>
        </motion.div>

        {/* The "Co-Founder" Suggestion */}
        <motion.div 
          className="flex items-center justify-center gap-3 bg-primary-red/10 border border-primary-red/20 rounded-xl p-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Sparkles className="w-5 h-5 text-primary-red" />
          <p className="text-primary-red font-medium text-center text-sm md:text-base">
            This idea is a dead end... but our agents found two potential paths forward.
          </p>
        </motion.div>

        {/* The 2-Choice Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl w-full mx-auto">
          {/* Option 1: Enhance Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 space-y-6 hover:border-primary-red/30 hover:shadow-lg hover:shadow-primary-red/10 transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-primary-red/10 flex items-center justify-center border border-primary-red/20">
                  <Target className="w-7 h-7 text-primary-red" />
                </div>
                <h3 className="text-2xl font-bold text-white">Enhance</h3>
              </div>

              <p className="text-neutral-300 leading-relaxed text-base">
                Find a profitable, unserved niche within this saturated market.
              </p>
              
              <div className="space-y-3 grow">
                <p className="text-sm font-semibold text-primary-red/90 uppercase tracking-wide">AI-Suggested Niche:</p>
                <div className="bg-neutral-800/50 border border-primary-red/20 p-5 rounded-xl backdrop-blur-sm">
                  <p className="text-white text-base leading-relaxed">
                    {enhanceSuggestion}
                  </p>
                </div>
              </div>

              <Button
                onClick={onEnhance}
                variant="outline"
                className="w-full bg-neutral-800/50 border-neutral-700 hover:bg-neutral-700 hover:border-primary-red/50 text-white h-12 text-base font-medium transition-all"
              >
                Analyze Niche
              </Button>
            </Card>
          </motion.div>

          {/* Option 2: Pivot Card - Highlighted */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-neutral-900 to-neutral-900/80 border-2 border-primary-red rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden hover:border-primary-red hover:shadow-2xl hover:shadow-primary-red/20 transition-all duration-300 h-full flex flex-col">
              {/* Recommended Badge */}
              <div className="absolute -top-3 -right-3 bg-primary-red text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg z-20">
                RECOMMENDED
              </div>

              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-red/10 via-primary-red/5 to-transparent pointer-events-none"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-red/5 to-transparent pointer-events-none"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="flex items-center gap-3 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary-red/20 flex items-center justify-center border-2 border-primary-red/40">
                  <CornerUpRight className="w-7 h-7 text-primary-red" />
                </div>
                <h3 className="text-2xl font-bold text-white">Pivot</h3>
              </div>

              <p className="text-neutral-200 leading-relaxed text-base relative z-10">
                Explore an adjacent market that our agents have detected with high potential.
              </p>
              
              <div className="space-y-3 relative z-10 grow">
                <p className="text-sm font-semibold text-primary-red uppercase tracking-wide">AI-Suggested Pivot:</p>
                <div className="bg-neutral-800/70 border-2 border-primary-red/40 p-5 rounded-xl backdrop-blur-sm">
                  <p className="text-white text-base font-medium leading-relaxed">
                    {pivotSuggestion}
                  </p>
                </div>
              </div>

              <Button
                onClick={onPivot}
                className="w-full bg-primary-red hover:bg-primary-red/90 text-white relative z-10 h-12 text-base font-semibold shadow-lg shadow-primary-red/30 hover:shadow-xl hover:shadow-primary-red/40 transition-all"
              >
                Analyze Pivot
              </Button>
            </Card>
          </motion.div>
        </div>

        {/* Additional Context */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-5 md:p-6 max-w-3xl backdrop-blur-sm">
            <p className="text-xs md:text-sm text-neutral-400 text-center leading-relaxed">
              <strong className="text-white font-semibold">How it works:</strong> The <span className="text-primary-red/80">'Enhance'</span> option narrows your focus to find white space within the current market.
              The <span className="text-primary-red/80">'Pivot'</span> option explores a completely different market segment with better fundamentals.
              Our AI recommends the pivot based on your initial analysis.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
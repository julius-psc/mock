'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Wand2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PotentialScoreProps {
  score: number;
  confidence?: 'High' | 'Medium' | 'Low';
}

type BadgeVariant = 'success' | 'warning' | 'danger';

export default function PotentialScore({ score, confidence = 'High' }: PotentialScoreProps) {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayScore(score);
    }, 200);
    return () => clearTimeout(timer);
  }, [score]);

  const circumference = 2 * Math.PI * 120;
  const strokeDashoffset = circumference - (displayScore / 100) * circumference;

  const getConfidenceVariant = (): BadgeVariant => {
    switch (confidence) {
      case 'High':
        return 'success';
      case 'Medium':
        return 'warning';
      case 'Low':
        return 'danger';
    }
  };

  const getScoreColor = () => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <Card className="h-full">
      <CardHeader className="text-center">
        <CardTitle>Potential Score</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        {/* Circular Progress */}
        <div className="relative w-64 h-64 flex items-center justify-center mb-6">
          <svg className="transform -rotate-90 w-full h-full">
            {/* Background circle */}
            <circle
              cx="128"
              cy="128"
              r="120"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              className="text-neutral-800"
            />
            {/* Progress circle */}
            <motion.circle
              cx="128"
              cy="128"
              r="120"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              className={getScoreColor()}
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </svg>

          {/* Score Display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <span className={`text-6xl font-bold ${getScoreColor()}`}>
                {displayScore}
              </span>
              <span className="text-2xl text-white/40">/ 100</span>
            </motion.div>
          </div>
        </div>

        {/* Confidence Badge */}
        <Badge variant={getConfidenceVariant()} className="flex items-center gap-2">
          <Wand2 className="w-4 h-4" />
          <span className="text-sm font-medium">{confidence} Confidence</span>
        </Badge>
      </CardContent>
    </Card>
  );
}

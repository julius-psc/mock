'use client';

import { TrendingUp, Users, DollarSign } from 'lucide-react';
import PotentialScore from '../widgets/PotentialScore';
import SmallStatCard from '../widgets/SmallStatCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function OverviewView() {
  return (
    <div className="min-h-screen bg-neutral-950 p-8">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {/* Box 1: Potential Score - Spans 2 columns */}
        <div className="lg:col-span-2">
          <PotentialScore score={88} confidence="High" />
        </div>

        {/* Box 2: Executive Summary - Spans 1 column */}
        <Card>
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-white/70 leading-relaxed">
            <p>
              Your AI eLearning Captioning Tool addresses a significant market opportunity
              in the rapidly growing EdTech sector. The combination of AI-powered automation
              and accessibility features positions this product well for both B2B and B2C markets.
            </p>
            <p>
              With medium competition and high funding potential, this venture shows strong
              promise for growth. The market size of $2.5B indicates substantial room for
              expansion and market capture.
            </p>
          </CardContent>
        </Card>

        {/* Box 3: Market Size */}
        <div>
          <SmallStatCard
            icon={TrendingUp}
            title="Market Size"
            value="$2.5B"
            iconColor="border-red-600 text-red-600"
          />
        </div>

        {/* Box 4: Competition */}
        <div>
          <SmallStatCard
            icon={Users}
            title="Competition"
            value="Medium"
            iconColor="border-red-600 text-red-600"
          />
        </div>

        {/* Box 5: Funding Potential */}
        <div>
          <SmallStatCard
            icon={DollarSign}
            title="Funding Potential"
            value="High"
            iconColor="border-red-600 text-red-600"
          />
        </div>

        {/* Box 6: Risk vs. Reward - Spans 2 columns */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Risk vs. Reward</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Risk Bar */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/60">Risk</span>
                <span className="text-sm font-medium text-red-600">80%</span>
              </div>
              <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-600 rounded-full transition-all duration-1000"
                  style={{ width: '80%' }}
                />
              </div>
            </div>

            {/* Reward Bar */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/60">Reward</span>
                <span className="text-sm font-medium text-green-500">50%</span>
              </div>
              <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full transition-all duration-1000"
                  style={{ width: '50%' }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Box 7: Generate Full Report - Spans 1 column */}
        <Card className="flex items-center justify-center">
          <Button className="w-full h-full min-h-[200px] text-lg">
            Generate Full Report
          </Button>
        </Card>
      </div>
    </div>
  );
}

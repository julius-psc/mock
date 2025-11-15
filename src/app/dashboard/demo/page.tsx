'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingModal from '@/app/components/landing-page/LoadingModal';
import PivotEnhance from '@/app/components/dashboard/PivotEnhance';
import { Button } from '@/components/ui/button';

export default function DemoPage() {
  const router = useRouter();
  const [showLoading, setShowLoading] = useState(false);
  const [showPivot, setShowPivot] = useState(false);

  const handleLoadingComplete = () => {
    // After loading completes, redirect to analyst page
    setShowLoading(false);
    router.push('/dashboard/projects/analyst');
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-8">
      {!showPivot ? (
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-8">UI Demo</h1>

          <div className="space-y-4">
            <Button
              onClick={() => setShowLoading(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
            >
              Show Loading Modal (redirects to Analyst)
            </Button>

            <br />

            <Button
              onClick={() => setShowPivot(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
            >
              Show Pivot/Enhance Screen
            </Button>
          </div>

          <p className="text-sm text-neutral-500 mt-8">
            Note: Close the loading modal with the X button, or wait - it will redirect to /dashboard/projects/analyst
          </p>

          {showLoading && <LoadingModal onComplete={handleLoadingComplete} />}
        </div>
      ) : (
        <PivotEnhance
          score={27}
          marketStatus="Saturated"
          analysisMessage="The Analyst has stopped the process. This market is highly competitive with low profit potential."
          enhanceSuggestion="AI captioning for true-crime podcasters"
          pivotSuggestion="AI captioning for eLearning"
          onEnhance={() => {
            alert('Enhance clicked - would reanalyze with niche focus');
            setShowPivot(false);
          }}
          onPivot={() => {
            alert('Pivot clicked - would reanalyze with new market');
            setShowPivot(false);
          }}
        />
      )}
    </div>
  );
}

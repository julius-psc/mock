'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PivotEnhance from '@/app/components/dashboard/PivotEnhance';
import LoadingModal from '@/app/components/landing-page/LoadingModal';

export default function PivotEnhancePage() {
  const router = useRouter();
  const [showLoading, setShowLoading] = useState(false);

  const handlePivot = () => {
    // Show full loading modal (all agents)
    setShowLoading(true);
  };

  const handleEnhance = () => {
    // For demo purposes, we can just do nothing or show a message
    // You can customize this behavior if needed
  };

  const handleLoadingComplete = () => {
    setShowLoading(false);
    // Navigate to dashboard after full loading completes
    setTimeout(() => {
      router.push('/dashboard');
    }, 500);
  };

  return (
    <>
      <PivotEnhance
        score={27}
        marketStatus="Saturated"
        analysisMessage="The Analyst has stopped the process. This market is highly competitive with low profit potential."
        enhanceSuggestion="AI captioning for true-crime podcasters"
        pivotSuggestion="AI captioning tool for podcasters"
        onEnhance={handleEnhance}
        onPivot={handlePivot}
      />
      {showLoading && <LoadingModal onComplete={handleLoadingComplete} />}
    </>
  );
}


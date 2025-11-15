import React from 'react';
import Header from '../Header';
import StatCard from '../widgets/StatCard';
import ChartCard from '../widgets/ChartCard';
import AudienceAnalysis from '../widgets/AudienceAnalysis';
import ConfidenceScore from '../widgets/ConfidenceScore';

export default function AnalystView() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="The Analyst"
        subtitle="Market analysis and insights"
        actions={
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Export Report
          </button>
        }
      />

      <div className="p-8 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="TAM" value="$0.00" />
          <StatCard title="SAM" value="$0.00" />
          <StatCard title="CAGR" value="0%" />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Market Growth" />
          <ChartCard title="Revenue Forecast" />
        </div>

        {/* Audience Analysis */}
        <AudienceAnalysis />

        {/* Confidence Score */}
        <ConfidenceScore score={0} />
      </div>
    </div>
  );
}

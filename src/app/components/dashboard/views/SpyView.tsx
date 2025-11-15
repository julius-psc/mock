import React from 'react';
import Header from '../Header';

export default function SpyView() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="The Spy"
        subtitle="Competitive intelligence and market monitoring"
      />

      <div className="p-8">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500">Spy view content coming soon...</p>
        </div>
      </div>
    </div>
  );
}

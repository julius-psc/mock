import React from 'react';

interface ConfidenceScoreProps {
  score: number; // 0-100
  label?: string;
  details?: string;
}

export default function ConfidenceScore({
  score,
  label = 'AI Confidence Score',
  details
}: ConfidenceScoreProps) {
  const getScoreColor = () => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    if (score >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getScoreTextColor = () => {
    if (score >= 80) return 'text-green-700';
    if (score >= 60) return 'text-yellow-700';
    if (score >= 40) return 'text-orange-700';
    return 'text-red-700';
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{label}</h3>
          {details && (
            <p className="text-sm text-gray-600 mb-4">{details}</p>
          )}

          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getScoreColor()} transition-all duration-500`}
                  style={{ width: `${score}%` }}
                />
              </div>
            </div>
            <div className={`text-2xl font-bold ${getScoreTextColor()}`}>
              {score}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

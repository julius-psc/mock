import React from 'react';

interface AudienceSegment {
  title: string;
  description: string;
  items: string[];
}

const defaultSegments: AudienceSegment[] = [
  {
    title: 'Demographics',
    description: 'Target audience characteristics',
    items: ['Age range', 'Income level', 'Location', 'Education'],
  },
  {
    title: 'Psychographics',
    description: 'Behavioral and lifestyle traits',
    items: ['Interests', 'Values', 'Pain points', 'Motivations'],
  },
  {
    title: 'Channels',
    description: 'Where to reach them',
    items: ['Social media', 'Email', 'Events', 'Partnerships'],
  },
];

interface AudienceAnalysisProps {
  segments?: AudienceSegment[];
}

export default function AudienceAnalysis({ segments = defaultSegments }: AudienceAnalysisProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Target Audience Analysis</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {segments.map((segment, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">{segment.title}</h4>
            <p className="text-sm text-gray-500 mb-4">{segment.description}</p>
            <ul className="space-y-2">
              {segment.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

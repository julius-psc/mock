'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconPlus, IconArrowNarrowUp, IconLink } from '@tabler/icons-react';
import { AudioLines } from 'lucide-react';
import LoadingModal from './LoadingModal';

export default function Input() {
  const [inputValue, setInputValue] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setShowLoading(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleLoadingComplete = () => {
    setShowLoading(false);
    // Navigate to pivot-enhance page
    router.push('/pivot-enhance');
  };

  return (
    <>
    <div className="w-full max-w-3xl rounded-3xl bg-neutral-900/50 border border-white/10 p-5 flex flex-col gap-3 hover:bg-neutral-900/60 hover:border-white/20 transition-all duration-200">
      {/* Text Area */}
      <textarea
        className="w-full bg-transparent border-none outline-none text-white/90 text-base resize-none placeholder:text-white/40 min-h-[120px]"
        placeholder="A SaaS to help local florists manage inventory and..."
        rows={4}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* Bottom Row - Controls */}
      <div className="flex items-center justify-between">
        {/* Bottom Left - Attach Controls */}
        <div className="flex items-center gap-2">
          <button className="rounded-full bg-neutral-800 text-white/70 p-2 hover:bg-neutral-700 hover:text-white hover:scale-110 transition-all duration-200 active:scale-95">
            <IconPlus className="w-5 h-5" />
          </button>
          <button className="rounded-full bg-neutral-800 text-white/70 text-sm px-4 py-2 flex items-center gap-2 hover:bg-neutral-700 hover:text-white hover:scale-105 transition-all duration-200 active:scale-95">
            <IconLink className="w-4 h-4" />
            <span>Attach</span>
          </button>
        </div>

        {/* Bottom Right - Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Voice Button */}
          <button className="rounded-full bg-neutral-800 text-white/70 p-2.5 hover:bg-neutral-700 hover:text-white hover:scale-110 transition-all duration-200 active:scale-95">
            <AudioLines className="w-5 h-5" />
          </button>

          {/* Submit Button */}
          <button
            className="rounded-full bg-white text-black p-2.5 hover:bg-white hover:shadow-lg hover:shadow-white/20 hover:scale-110 transition-all duration-200 active:scale-95"
            onClick={handleSubmit}
          >
            <IconArrowNarrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

      {/* Loading Modal - stops after Analyst (step 0) */}
      {showLoading && <LoadingModal onComplete={handleLoadingComplete} stopAfterStep={0} />}
    </>
  );
}

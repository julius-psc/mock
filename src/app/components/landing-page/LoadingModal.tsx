'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PieChart, Eye, Hammer, TrendingUp, Gavel, LucideIcon, CheckCircle } from 'lucide-react';

// --- CONSTANTS ---
const STEP_DURATION_MS = 4000; // 4 seconds per agent
const TOTAL_AGENTS = 5;
const FINAL_SCREEN_DURATION_MS = 3000; // 3 seconds on final completion screen

// --- Compact Agent Card ---
// This component shows agents that are 'QUEUED' or 'COMPLETE'
interface CompactAgentCardProps {
  icon: LucideIcon;
  title: string;
  status: 'QUEUED' | 'COMPLETE';
  onClick: () => void;
}

function CompactAgentCard({ icon: Icon, title, status, onClick }: CompactAgentCardProps) {
  const isComplete = status === 'COMPLETE';

  return (
    <motion.button
      onClick={onClick}
      className="relative w-full overflow-hidden transition-colors bg-neutral-900 rounded-lg p-4 border border-neutral-800 hover:bg-neutral-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isComplete ? 1 : 0.4, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.02 }}
      layout
    >
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div
          className={`shrink-0 p-2 rounded-lg ${
            isComplete ? 'bg-primary-red/10' : 'bg-neutral-800'
          }`}
        >
          <Icon
            className={`w-5 h-5 ${
              isComplete ? 'text-primary-red' : 'text-neutral-500'
            }`}
          />
        </div>
        {/* Title */}
        <span
          className={`text-sm font-medium ${
            isComplete ? 'text-neutral-100' : 'text-neutral-500'
          }`}
        >
          {title}
        </span>
        {/* Status Badge */}
        <div className="grow" />
        <div
          className={`text-xs px-2.5 py-1 rounded-full ${
            isComplete
              ? 'bg-primary-red/10 text-primary-red'
              : 'bg-neutral-800 text-neutral-500'
          }`}
        >
          {isComplete ? 'Complete' : 'Queued'}
        </div>
      </div>
    </motion.button>
  );
}

// --- Expanded Active Agent View ---
// This component is the main focus, showing the agent *currently* at work
interface ActiveAgentProps {
  icon: LucideIcon;
  title: string;
  description: string;
  duration: number; // The duration this step will take in MS
}

function ActiveAgentView({ icon: Icon, title, description, duration }: ActiveAgentProps) {
  const [progress, setProgress] = useState(0);

  // Animate progress from 0 to 100 over the *entire* step duration
  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
      }
    }, 33); // Update ~30fps

    return () => clearInterval(interval);
  }, [duration]); // Reruns when the component changes (new duration)

  return (
    <motion.div
      className="relative w-full overflow-hidden bg-neutral-900 rounded-2xl p-6 lg:p-8 border border-primary-red/30"
      // Using 'key' in AnimatePresence makes this fade in/out on change
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -30 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      layout
    >
      {/* Subtle background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 blur-[60px] opacity-50"
        style={{ backgroundColor: 'var(--color-primary-red)', opacity: 0.2 }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Header: Icon, Title, and Status Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <motion.div
              className="inline-flex p-3 rounded-xl bg-primary-red/10"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Icon className="w-8 h-8 text-primary-red" />
            </motion.div>
            <div>
              <motion.h2
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {title}
              </motion.h2>
              <motion.p
                className="text-primary-red/80 text-sm font-medium"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Agent is now active...
              </motion.p>
            </div>
          </div>
        </div>

        {/* Description */}
        <motion.p
          className="text-neutral-300 text-base mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Unique Progress Bar with Liquid Fill Effect */}
        <div className="space-y-2">
          <div className="relative h-3 bg-neutral-800/50 rounded-full overflow-hidden backdrop-blur-sm">
            {/* Animated shimmer background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />

            {/* Main progress fill with gradient and glow */}
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: `linear-gradient(90deg, var(--color-primary-red) 0%, rgba(220, 38, 38, 0.8) 100%)`,
                boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)',
              }}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            />

            {/* Animated particles effect */}
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full overflow-hidden"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- Main Loading Modal Component ---
interface LoadingModalProps {
  onComplete?: () => void;
  stopAfterStep?: number; // Stop after this step (0 = after Analyst, 1 = after Spy, etc.)
}

export default function LoadingModal({ onComplete, stopAfterStep }: LoadingModalProps) {
  const [step, setStep] = useState(0);

  const agents = [
    {
      icon: PieChart,
      title: 'The Analyst',
      description: 'Processing market data and identifying key trends to build a foundational understanding.',
    },
    {
      icon: Eye,
      title: 'The Spy',
      description: 'Scanning the competitive landscape for vulnerabilities and opportunities to exploit.',
    },
    {
      icon: Hammer,
      title: 'The Architect',
      description: 'Generating a functional MVP blueprint and deploying a testable landing page.',
    },
    {
      icon: TrendingUp,
      title: 'The Financier',
      description: 'Analyzing financial projections and revenue models to ensure sustainable growth.',
    },
    {
      icon: Gavel,
      title: 'The Verdyct',
      description: 'Consolidating all findings from the agents. Your comprehensive report is now ready.',
    },
  ];

  // Step progression (SLOWER: 4s per step)
  useEffect(() => {
    // Exit if all steps are done
    if (step >= TOTAL_AGENTS) {
      const finalTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, FINAL_SCREEN_DURATION_MS); // Wait 3s after last step
      return () => clearTimeout(finalTimer);
    }

    // Check if we should stop after the current step completes
    // When we're at stopAfterStep, we want to stop immediately after this step's duration
    if (stopAfterStep !== undefined && step === stopAfterStep) {
      // This is the last step we want to show, so wait for it to complete, then call onComplete immediately
      const stepTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, STEP_DURATION_MS);
      return () => clearTimeout(stepTimer);
    }

    // This timer progresses to the next step
    const stepTimer = setTimeout(() => {
      setStep((s) => s + 1);
    }, STEP_DURATION_MS); // Use the 4-second constant

    return () => {
      clearTimeout(stepTimer);
    };
  }, [step, onComplete, stopAfterStep]);

  const getAgentStatus = (index: number): 'RUNNING' | 'QUEUED' | 'COMPLETE' => {
    if (step === index) return 'RUNNING';
    if (step > index) return 'COMPLETE';
    return 'QUEUED';
  };

  // The agent that is currently active (or the last one if complete)
  const currentAgent = agents[Math.min(step, agents.length - 1)];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/80 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Centered Content - Removed the main title */}
      <div className="relative z-10 flex flex-col items-center justify-center p-4 max-w-xl mx-auto w-full">
        {/* Main Content Area */}
        <div className="w-full">
          {/* Active Agent - Expanded View */}
          <AnimatePresence mode="wait">
            {/* We show the active agent OR the final "Verdyct" step */}
            {step < TOTAL_AGENTS ? (
              <ActiveAgentView
                key={step} // This is CRITICAL for AnimatePresence
                icon={currentAgent.icon}
                title={currentAgent.title}
                description={currentAgent.description}
                duration={STEP_DURATION_MS}
              />
            ) : (
              // This is the final "Complete" card
              <motion.div
                className="relative w-full overflow-hidden bg-neutral-900 rounded-2xl p-6 lg:p-8 border border-primary-red/30"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 blur-[60px] opacity-50"
                  style={{ backgroundColor: 'var(--color-primary-red)', opacity: 0.2 }}
                  aria-hidden="true"
                />
                <div className="relative z-10 text-center">
                  <motion.div
                    className="inline-flex p-3 rounded-xl bg-primary-red/10 mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  >
                    <CheckCircle className="w-8 h-8 text-primary-red" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Verdyct Complete
                  </h2>
                  <p className="text-neutral-300 text-base">
                    Your full report is ready. Redirecting...
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Compact Agent List (Completed Agents) */}
          <motion.div
            className="mt-4 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <AnimatePresence>
              {agents.map((agent, index) => {
                const status = getAgentStatus(index);
                // Only show COMPLETED agents in the list below
                if (status !== 'COMPLETE') return null;

                return (
                  <CompactAgentCard
                    key={index}
                    icon={agent.icon}
                    title={agent.title}
                    status={status}
                    onClick={() => {}} // Not clickable for now
                  />
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
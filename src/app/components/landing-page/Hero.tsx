import { IconStack2 } from '@tabler/icons-react';
import bg from "../../../../public/assets/illustrations/hero-bg.png"
import Image from 'next/image';
import Input from './Input';

export default function Hero() {
  return (
    <div className=" z-10 relative h-screen flex flex-col justify-center items-center px-4">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Hero background"
        fill
        className="object-cover -z-10"
        priority
      />
      {/* Beta Pill */}
      <div className="mb-4 rounded-full bg-black/30 border border-white/10 px-4 py-1.5 flex items-center gap-2">
        <IconStack2 className="w-3 h-3 text-neutral-200" />
        <span className="text-xs text-neutral-200">Beta v1.0 is launched!</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-6xl font-bold text-white mb-4">
        We know what works.
      </h1>

      {/* Subheading */}
      <p className="text-lg text-neutral-300 max-w-xl text-center mb-12">
        Stop building what nobody wants. We predict your idea&#39;s success and give you the plan to launch.
      </p>

      {/* Command Input Box */}
      <Input />
    </div>
  );
}

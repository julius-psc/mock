import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-red-600 text-white shadow hover:bg-red-700",
        secondary:
          "border-transparent bg-neutral-800 text-white hover:bg-neutral-700",
        destructive:
          "border-transparent bg-red-900 text-red-50 shadow hover:bg-red-900/80",
        outline: "text-white/70 border-neutral-800",
        success:
          "border-transparent bg-green-500/10 text-green-500 border-green-500/20",
        warning:
          "border-transparent bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
        danger:
          "border-transparent bg-red-500/10 text-red-500 border-red-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

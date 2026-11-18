import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground border-border",
        cosmicCyan:
          "border-nebula-cyan/30 bg-nebula-cyan/10 text-nebula-cyan font-mono",
        cosmicViolet:
          "border-nebula-violet/30 bg-nebula-violet/10 text-nebula-violet font-mono",
        cosmicEmerald:
          "border-nebula-emerald/30 bg-nebula-emerald/10 text-emerald-300 font-mono",
        cosmicAmber:
          "border-amber-500/25 bg-amber-500/10 text-amber-400 font-mono",
        subtle:
          "border-white/5 bg-white/5 text-slate-300 font-mono",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

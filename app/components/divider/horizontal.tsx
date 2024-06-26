import { cn } from "@/app/lib/utils"

type HorizontalDividerProps = {
  className?: string;
}

export const HorizontalDividerSection = ({ className }: HorizontalDividerProps) => {
  return (
    <div className={cn("w-full border-b border-b-gradient-to-t from-neutral-900", className)} />
  )
}
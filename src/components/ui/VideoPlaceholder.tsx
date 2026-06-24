import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function VideoPlaceholder({
  label = "Vidéo de présentation",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-forest-800 via-ink to-ink-900",
        className
      )}
    >
      <div className="flex flex-col items-center gap-3 text-paper">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-paper/15 backdrop-blur-sm">
          <Play className="h-7 w-7 fill-paper text-paper ltr:ml-0.5 rtl:mr-0.5" />
        </span>
        <p className="text-sm font-medium text-mist-200">{label}</p>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "16/10" | "3/2";
  attribution?: string;
  isPlaceholder?: boolean;
  priority?: boolean;
  className?: string;
}

export function ImageBlock({
  src,
  alt,
  caption,
  aspectRatio = "16/10",
  attribution,
  isPlaceholder = false,
  priority = false,
  className,
}: ImageBlockProps) {
  const aspectClasses = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "16/10": "aspect-[16/10]",
    "3/2": "aspect-[3/2]",
  };

  return (
    <figure className={cn("overflow-hidden rounded-2xl group", className)}>
      <div className={cn("relative w-full bg-slate-100 overflow-hidden", aspectClasses[aspectRatio])}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {isPlaceholder && (
          <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-md border border-white/20">
            Contextual Reference (Pending Photo Release)
          </div>
        )}
      </div>

      {(caption || attribution) && (
        <figcaption className="mt-2.5 px-1 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
          {caption && <span>{caption}</span>}
          {attribution && <span className="italic text-slate-400">{attribution}</span>}
        </figcaption>
      )}
    </figure>
  );
}

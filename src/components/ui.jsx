import { useState } from "react";
import { asset } from "../lib/assets";

export const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500";

export const grid = {
  backgroundImage:
    "linear-gradient(#ffffff0d 1px,transparent 1px),linear-gradient(90deg,#ffffff0d 1px,transparent 1px)",
  backgroundSize: "48px 48px",
};

export function Heading({ title, sub, dark }) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2
        className={`font-display text-4xl leading-tight md:text-5xl ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
        <span className="ml-2 inline-block h-3 w-3 rounded-full bg-amber-500" />
      </h2>
      {sub && (
        <p
          className={`mt-4 text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

// Shows the image; if the file or link is missing it shows a gradient instead of a broken icon.
export function Img({ src, alt, className = "", fallback = null }) {
  const [bad, setBad] = useState(false);
  if (!src || bad) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-linear-to-br from-indigo-600 to-ink text-white/80 ${className}`}
      >
        {fallback}
      </div>
    );
  }
  return (
    <img
      src={asset(src)}
      alt={alt}
      loading="lazy"
      onError={() => setBad(true)}
      className={className}
    />
  );
}

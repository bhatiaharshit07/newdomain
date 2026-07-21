"use client";

import { useEffect, useState } from "react";

export function ContentProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(
        scrollHeight > 0 ? Math.min(100, (scrollTop / scrollHeight) * 100) : 0,
      );
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-16 z-40 h-px bg-transparent">
      <div
        className="h-px bg-[color:var(--accent)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

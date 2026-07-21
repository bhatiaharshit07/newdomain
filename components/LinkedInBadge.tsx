"use client";

import { useEffect, useRef, useState } from "react";

type LinkedInTheme = "light" | "dark";

declare global {
  interface Window {
    IN?: {
      parse?: (element?: HTMLElement | null) => void;
    };
  }
}

const LINKEDIN_BADGE_SCRIPT_ID = "linkedin-profile-badge-script";
const LINKEDIN_BADGE_SCRIPT_SRC = "https://platform.linkedin.com/badges/js/profile.js";

function getDocumentTheme(): LinkedInTheme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function LinkedInBadge() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<LinkedInTheme>("light");

  useEffect(() => {
    setTheme(getDocumentTheme());

    const observer = new MutationObserver(() => {
      setTheme(getDocumentTheme());
    });

    observer.observe(document.documentElement, {
      attributeFilter: ["data-theme"],
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const parseBadge = () => {
      window.IN?.parse?.(badgeRef.current);
    };

    const existingScript = document.getElementById(LINKEDIN_BADGE_SCRIPT_ID);
    if (existingScript) {
      window.setTimeout(parseBadge, 0);
      return;
    }

    const script = document.createElement("script");
    script.id = LINKEDIN_BADGE_SCRIPT_ID;
    script.src = LINKEDIN_BADGE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    script.addEventListener("load", parseBadge);
    document.body.appendChild(script);

    return () => script.removeEventListener("load", parseBadge);
  }, [theme]);

  return (
    <div className="linkedin-badge-shell" ref={badgeRef}>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme={theme}
        data-type="HORIZONTAL"
        data-vanity="harshitbhatiacto"
        data-version="v1"
        key={theme}
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://in.linkedin.com/in/harshitbhatiacto?trk=profile-badge"
        >
          Harshit Bhatia
        </a>
      </div>
    </div>
  );
}

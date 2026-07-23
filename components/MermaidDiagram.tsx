"use client";

import { useEffect, useId, useState } from "react";

type MermaidDiagramProps = {
  chart: string;
  title: string;
};

export function MermaidDiagram({ chart, title }: MermaidDiagramProps) {
  const reactId = useId();
  const diagramId = `mermaid-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [svg, setSvg] = useState<string>("");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () =>
      setTheme(root.dataset.theme === "dark" ? "dark" : "light");

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let active = true;

    async function renderDiagram() {
      try {
        const { default: mermaid } = await import(
          "mermaid/dist/mermaid.esm.min.mjs"
        );
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          suppressErrorRendering: true,
          theme: "base",
          fontFamily: "Arial, Helvetica, sans-serif",
          flowchart: {
            curve: "basis",
            htmlLabels: true,
            nodeSpacing: 42,
            rankSpacing: 58,
          },
          themeVariables:
            theme === "dark"
              ? {
                  background: "#15171c",
                  primaryColor: "#182235",
                  primaryTextColor: "#f7f7f8",
                  primaryBorderColor: "#60a5fa",
                  lineColor: "#a4a8b0",
                  secondaryColor: "#111216",
                  tertiaryColor: "#24262b",
                  fontSize: "15px",
                }
              : {
                  background: "#f7f8fa",
                  primaryColor: "#eef2ff",
                  primaryTextColor: "#111111",
                  primaryBorderColor: "#2563eb",
                  lineColor: "#6b7280",
                  secondaryColor: "#ffffff",
                  tertiaryColor: "#e5e7eb",
                  fontSize: "15px",
                },
        });

        const result = await mermaid.render(`${diagramId}-${theme}`, chart);
        if (active) {
          setSvg(result.svg);
          setFailed(false);
        }
      } catch (error) {
        console.error(`Failed to render Mermaid diagram "${title}".`, error);
        if (active) {
          setFailed(true);
          setSvg("");
        }
      }
    }

    void renderDiagram();
    return () => {
      active = false;
    };
  }, [chart, diagramId, theme, title]);

  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-[color:var(--border)] bg-[color:var(--surface-muted)]">
      <div className="overflow-x-auto p-4 sm:p-6">
        {svg ? (
          <div
            aria-label={title}
            className="mermaid-diagram min-w-[720px]"
            dangerouslySetInnerHTML={{ __html: svg }}
            role="img"
          />
        ) : failed ? (
          <div className="rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
            <p className="font-medium text-[color:var(--foreground)]">
              {title}
            </p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              The visual diagram could not be rendered. Its text representation
              is available below.
            </p>
          </div>
        ) : (
          <div
            aria-label={`Rendering ${title}`}
            className="flex min-h-72 min-w-[720px] items-center justify-center text-sm text-[color:var(--muted)]"
            role="status"
          >
            Rendering architecture diagram…
          </div>
        )}
      </div>
      <figcaption className="border-t border-[color:var(--border)] px-5 py-4 text-sm text-[color:var(--muted)]">
        {title}
      </figcaption>
      <details className="border-t border-[color:var(--border)]">
        <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-[color:var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[color:var(--accent)]">
          View diagram as text
        </summary>
        <pre className="overflow-x-auto border-t border-[color:var(--border)] p-5 text-sm leading-7 text-[color:var(--foreground)]">
          <code>{chart}</code>
        </pre>
      </details>
    </figure>
  );
}

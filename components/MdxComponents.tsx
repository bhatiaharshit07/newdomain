import type { ComponentPropsWithoutRef, ReactNode } from "react";

function getTextId(children: ReactNode): string | undefined {
  if (typeof children !== "string") {
    return undefined;
  }

  return children
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function Callout({
  children,
  title = "Note",
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <aside className="my-8 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
        {title}
      </p>
      <div className="mt-3 text-[color:var(--muted)]">{children}</div>
    </aside>
  );
}

function Warning({ children }: { children: ReactNode }) {
  return <Callout title="Warning">{children}</Callout>;
}

function Architecture({
  children,
  title = "Architecture",
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <section className="my-8 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
        {title}
      </p>
      <div className="article-prose mt-4">{children}</div>
    </section>
  );
}

function Mermaid({ chart }: { chart: string }) {
  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-[color:var(--border)] bg-[color:var(--surface-muted)]">
      <pre className="overflow-x-auto p-5 text-sm leading-7 text-[color:var(--foreground)]">
        <code>{chart}</code>
      </pre>
    </figure>
  );
}

function CodeBlock({ children }: { children: ReactNode }) {
  return (
    <pre className="my-8 overflow-x-auto rounded-lg border border-[color:var(--border)] bg-[color:var(--foreground)] p-5 text-sm leading-7 text-[color:var(--background)]">
      <code>{children}</code>
    </pre>
  );
}

export const mdxComponents = {
  h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2 id={getTextId(children)} {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3 id={getTextId(children)} {...props}>
      {children}
    </h3>
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      {...props}
      className="font-medium text-[color:var(--accent)] underline-offset-4 hover:underline"
      title={
        props.title ??
        (typeof props.children === "string" ? props.children : undefined)
      }
    />
  ),
  Callout,
  Warning,
  Architecture,
  Mermaid,
  CodeBlock,
};

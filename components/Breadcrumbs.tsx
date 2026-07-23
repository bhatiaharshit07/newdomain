type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[color:var(--muted)]">
        {items.map((item, index) => {
          const current = index === items.length - 1;
          return (
            <li className="flex min-w-0 items-center gap-2" key={item.label}>
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {item.href && !current ? (
                <a
                  className="transition-colors hover:text-[color:var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
                  href={item.href}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  aria-current={current ? "page" : undefined}
                  className={
                    current ? "truncate text-[color:var(--foreground)]" : ""
                  }
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

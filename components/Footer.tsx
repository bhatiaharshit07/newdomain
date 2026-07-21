export function Footer() {
  const footerLinks = [
    { label: "Enterprise Agentic AI Systems", href: "/#top" },
    { label: "About Harshit Bhatia", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Architecture", href: "/architecture" },
    { label: "Playbooks", href: "/playbooks" },
    { label: "Research", href: "/research" },
    { label: "Projects", href: "/projects" },
    { label: "Speaking", href: "/talks" },
    { label: "GitHub", href: "https://github.com/bhatiaharshit07" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/harshitbhatiacto" },
    { label: "Newsletter", href: "/#newsletter" },
  ];

  return (
    <footer className="border-t border-[color:var(--border)] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[color:var(--muted)] lg:flex-row lg:items-center lg:justify-between">
        <p className="font-medium text-[color:var(--foreground)]">
          Harshit Bhatia
        </p>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-5 gap-y-3"
        >
          {footerLinks.map((link) => (
            <a
              className="transition-colors hover:text-[color:var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

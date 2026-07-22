import Link from "next/link";
import { navigation } from "@/content/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--background)]/85 px-6 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between"
      >
        <Link
          className="text-sm font-semibold tracking-[0.08em] text-[color:var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
          href="/"
          title="Harshit Bhatia homepage"
        >
          HB
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              className="text-sm text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
              href={item.href}
              key={item.href}
              title={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

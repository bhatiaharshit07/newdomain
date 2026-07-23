"use client";

import { ChevronDown, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navigation } from "@/content/site";

const controlClass =
  "inline-flex size-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] transition-colors hover:border-[color:var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]";

function isActivePath(pathname: string, href: string) {
  const path = href.split("#")[0] || "/";
  if (path === "/") {
    return pathname === "/";
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--background)]/90 px-6 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between"
      >
        <Link
          aria-label="Harshit Bhatia homepage"
          className="text-sm font-semibold tracking-[0.08em] text-[color:var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
          href="/"
          title="Harshit Bhatia homepage"
        >
          HB
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => {
            if (item.children) {
              const groupActive = item.children.some((child) =>
                isActivePath(pathname, child.href),
              );

              return (
                <details className="group relative" key={item.label}>
                  <summary
                    className={`flex cursor-pointer list-none items-center gap-1 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)] [&::-webkit-details-marker]:hidden ${
                      groupActive
                        ? "text-[color:var(--foreground)]"
                        : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden="true"
                      className="transition-transform group-open:rotate-180"
                      size={14}
                    />
                  </summary>
                  <div className="absolute left-1/2 top-[calc(100%+1rem)] w-72 -translate-x-1/2 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-2 shadow-[0_24px_80px_rgba(17,17,17,0.14)]">
                    {item.children.map((child) => (
                      <Link
                        aria-current={
                          isActivePath(pathname, child.href)
                            ? "page"
                            : undefined
                        }
                        className="block rounded-md px-4 py-3 transition-colors hover:bg-[color:var(--surface-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--accent)]"
                        href={child.href}
                        key={child.href}
                      >
                        <span className="block text-sm font-medium text-[color:var(--foreground)]">
                          {child.label}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-[color:var(--muted)]">
                          {child.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </details>
              );
            }

            if (!item.href) {
              return null;
            }

            const active = isActivePath(pathname, item.href);
            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)] ${
                  active
                    ? "text-[color:var(--foreground)]"
                    : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                }`}
                href={item.href}
                key={item.href}
                title={item.label}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            aria-label="Search the site"
            aria-current={pathname === "/search" ? "page" : undefined}
            className={controlClass}
            href="/search"
            title="Search"
          >
            <Search aria-hidden="true" size={18} />
          </Link>
          <ThemeToggle />
          <span className="md:hidden">
            <button
              aria-controls="mobile-navigation"
              aria-expanded={mobileOpen}
              aria-label={
                mobileOpen ? "Close navigation menu" : "Open navigation menu"
              }
              className={controlClass}
              onClick={() => setMobileOpen((open) => !open)}
              type="button"
            >
              {mobileOpen ? (
                <X aria-hidden="true" size={19} />
              ) : (
                <Menu aria-hidden="true" size={19} />
              )}
            </button>
          </span>
        </div>
      </nav>

      {mobileOpen ? (
        <div
          className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-[color:var(--border)] bg-[color:var(--background)] px-6 py-5 shadow-[0_24px_60px_rgba(17,17,17,0.12)] md:hidden"
          id="mobile-navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navigation.map((item) => {
              if (item.children) {
                return (
                  <div
                    className="border-b border-[color:var(--border)] py-3 last:border-0"
                    key={item.label}
                  >
                    <p className="px-3 text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
                      {item.label}
                    </p>
                    <div className="mt-2 grid gap-1">
                      {item.children.map((child) => (
                        <Link
                          aria-current={
                            isActivePath(pathname, child.href)
                              ? "page"
                              : undefined
                          }
                          className="rounded-md px-3 py-3 text-base text-[color:var(--foreground)] transition-colors hover:bg-[color:var(--surface-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--accent)]"
                          href={child.href}
                          key={child.href}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (!item.href) {
                return null;
              }

              return (
                <Link
                  aria-current={
                    isActivePath(pathname, item.href) ? "page" : undefined
                  }
                  className="rounded-md border-b border-[color:var(--border)] px-3 py-4 text-base text-[color:var(--foreground)] transition-colors last:border-0 hover:bg-[color:var(--surface-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--accent)]"
                  href={item.href}
                  key={item.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}

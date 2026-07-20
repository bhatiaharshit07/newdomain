export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>Built with Next.js</p>
        <p>Hosted on Vercel</p>
        <p>© Harshit Bhatia</p>
      </div>
    </footer>
  );
}

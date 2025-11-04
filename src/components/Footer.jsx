export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/60 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="text-sm text-indigo-200/80">© {new Date().getFullYear()} Astrologer Ved Rishi</div>
          <div className="text-xs text-indigo-200/60">All rights reserved.</div>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
          {[
            { name: 'Privacy', href: '#' },
            { name: 'Terms', href: '#' },
            { name: 'Contact', href: '#' },
          ].map((link) => (
            <a key={link.name} href={link.href} className="group relative text-indigo-100 transition-colors duration-300 hover:text-amber-200">
              <span>{link.name}</span>
              <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-amber-300 to-rose-300 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

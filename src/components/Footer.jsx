const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'The Studio', href: '#studio' },
  { label: 'Journal', href: '#journal' },
]

export default function Footer() {
  return (
    <footer className="border-t border-atelier-cream/15">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:px-[42px] lg:py-12">
        {/* Main footer row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div>
            <p className="text-[12px] uppercase tracking-[0.15em] text-atelier-cream/80">
              Atelier
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-atelier-muted">
              Digital Salon Experience
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center gap-5 sm:gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.12em] text-atelier-cream/60 transition-colors duration-300 hover:text-atelier-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-atelier-cream/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-[11px] text-atelier-cream/40">
            © 2026 Atelier. All rights reserved.
          </p>
          <p className="text-[11px] text-atelier-cream/40">
            London, UK
          </p>
        </div>
      </div>
    </footer>
  )
}

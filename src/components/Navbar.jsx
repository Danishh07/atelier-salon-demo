import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "The Studio", href: "#studio" },
];

const softEase = [0.22, 1, 0.36, 1];

function Wordmark() {
  return (
    <a
      href="#top"
      className="inline-flex items-center bg-atelier-cream px-3 py-2 text-[15px] leading-none tracking-[-0.03em] text-atelier-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-atelier-gold sm:text-[16px]"
      aria-label="Atelier home"
    >
      <span className="font-medium">ATELIER</span>

      <span className="ml-2 border-l border-atelier-ink/35 pl-2 text-[10px] tracking-normal sm:text-[11px]">
        HAIR · BEAUTY
      </span>
    </a>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      id="top"
      className="relative z-20 mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 pt-5 sm:px-8 lg:px-[42px] lg:pt-6"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: softEase }}
    >
      {/* Brand */}
      <Wordmark />

      {/* Desktop Navigation */}
      <nav
        className="absolute left-1/2 hidden -translate-x-1/2 bg-atelier-cream px-7 py-4 lg:block"
        aria-label="Primary navigation"
      >
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[14px] font-normal leading-none text-atelier-ink transition-colors duration-300 hover:text-atelier-gold focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-3 focus-visible:outline-atelier-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop CTA */}
      <a
        href="#booking"
        className="hidden rounded-full bg-atelier-gold px-5 py-2.5 text-[13px] font-medium leading-none text-atelier-ink transition-colors duration-300 hover:bg-atelier-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-atelier-gold lg:inline-flex"
      >
        BOOK A VISIT
      </a>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center text-atelier-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold lg:hidden"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        aria-label={
          isMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? (
          <X size={21} strokeWidth={1.5} />
        ) : (
          <Menu size={21} strokeWidth={1.5} />
        )}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="absolute inset-x-5 top-[68px] border border-atelier-cream/20 bg-atelier-black p-6 sm:inset-x-8"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: softEase }}
          >
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block text-sm text-atelier-cream"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <li className="pt-2">
                <a
                  href="#booking"
                  className="text-sm text-atelier-gold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a visit
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

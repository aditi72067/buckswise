"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Features", href: "#features", id: "features" },
  { label: "How It Works", href: "#how-it-works", id: "how-it-works" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "FAQ", href: "#faq", id: "faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("features");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: 0.35,
        rootMargin: "-15% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 pt-5">
      <div className="mx-auto max-w-7xl">
        <motion.nav
          aria-label="Primary navigation"
          animate={{
            scale: scrolled ? 0.98 : 1,
          }}
          transition={{
            duration: 0.25,
          }}
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-8 backdrop-blur-2xl transition-all duration-300 ${
            scrolled
              ? "border-white/70 bg-white/85 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
              : "border-white/60 bg-white/70 py-4 shadow-[0_15px_45px_rgba(99,102,241,0.12)]"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            aria-label="Go to the top of the BucksWise homepage"
            className="group flex items-center gap-3"
          >
            <motion.span
              whileHover={{
                rotate: 12,
                scale: 1.1,
              }}
              aria-hidden="true"
              className="text-4xl"
            >
              🐿️
            </motion.span>

            <h1 className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-3xl font-extrabold text-transparent">
              BucksWise
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => {
              const active = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-1 text-[15px] font-medium transition-colors duration-300 ${
                    active
                      ? "text-indigo-600"
                      : "text-slate-600 hover:text-indigo-600"
                  }`}
                >
                  {item.label}

                  <motion.span
                    layoutId="navbar-indicator"
                    aria-hidden="true"
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 ${
                      active ? "w-full" : "w-0"
                    }`}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                </a>
              );
            })}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              aria-label="Start using BucksWise for free"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-[0_15px_40px_rgba(99,102,241,0.35)] md:flex"
            >
              Start Free
              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </motion.button>

            <button
              type="button"
              onClick={() =>
                setMobileOpen((prev) => !prev)
              }
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className="rounded-xl p-2 transition hover:bg-slate-100 md:hidden"
            >
              {mobileOpen ? (
                <X
                  size={24}
                  aria-hidden="true"
                />
              ) : (
                <Menu
                  size={24}
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-navigation"
              role="menu"
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.2,
              }}
              className="mx-auto mt-4 max-w-6xl rounded-3xl border border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    role="menuitem"
                    aria-current={
                      activeSection === item.id
                        ? "page"
                        : undefined
                    }
                    onClick={() =>
                      setMobileOpen(false)
                    }
                    className={`font-medium transition ${
                      activeSection === item.id
                        ? "text-indigo-600"
                        : "text-slate-700 hover:text-indigo-600"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}

                <button
                  type="button"
                  aria-label="Start using BucksWise for free"
                  className="mt-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 font-semibold text-white"
                >
                  Start Free
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
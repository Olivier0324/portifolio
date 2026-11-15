import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { site, nav } from "../data/content";
import { focus } from "./ui";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className={`font-display text-xl text-white ${focus}`}>
          {site.brand}
          <span className="text-amber-500">.</span>
        </a>
        <nav
          className="hidden gap-7 text-sm text-slate-300 lg:flex"
          aria-label="Main"
        >
          {nav.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              className={`transition hover:text-white ${focus}`}
            >
              {n}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-ink transition hover:bg-amber-400 ${focus}`}
          >
            Let's talk
          </a>
          <button
            className="text-white lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          className="flex flex-col gap-1 border-t border-white/10 bg-ink px-6 py-4 lg:hidden"
          aria-label="Mobile"
        >
          {nav.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-200 hover:bg-white/10"
            >
              {n}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

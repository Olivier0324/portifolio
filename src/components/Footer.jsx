import { site, nav } from "../data/content";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <a href="#top" className="font-display text-xl text-white">
          {site.brand}
          <span className="text-amber-500">.</span>
        </a>
        <nav
          className="flex flex-wrap justify-center gap-5 text-sm"
          aria-label="Footer"
        >
          {nav.slice(0, 5).map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              className="hover:text-white"
            >
              {n}
            </a>
          ))}
        </nav>
        <div className="flex gap-4">
          <Socials itemClass="hover:text-white" />
        </div>
      </div>
      <p className="mt-6 text-center text-sm">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
        CSS.
      </p>
    </footer>
  );
}

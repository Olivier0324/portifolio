import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { site } from "../data/content";
import { asset } from "../lib/assets";
import { useTypewriter } from "../hooks/useTypewriter";
import { Img, focus, grid } from "./ui";
import Socials from "./Socials";

export default function Hero() {
  const { text, reduced } = useTypewriter(site.roles);
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink text-white"
      style={grid}
    >
      <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />{" "}
            {site.availability}
          </p>
          <p className="mt-8 text-lg text-slate-300">Hello, I'm</p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            {site.name}
          </h1>

          {/* Typing effect. Screen readers get the full list of roles instead of the animation. */}
          <p className="font-display mt-4 min-h-[1.4em] text-2xl text-indigo-300 md:text-4xl">
            <span aria-hidden="true">
              I'm a <span className="text-amber-400">{text}</span>
              {!reduced && (
                <span className="ml-0.5 animate-pulse text-amber-400">|</span>
              )}
            </span>
            <span className="sr-only">I'm a {site.roles.join(", ")}.</span>
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            {site.intro}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className={`inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 font-semibold transition hover:bg-indigo-400 ${focus}`}
            >
              View projects <FiArrowUpRight size={18} />
            </a>
            {site.cv && (
              <a
                href={asset(site.cv)}
                target="_blank"
                rel="noreferrer"
                download
                className={`inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold transition hover:bg-white/10 ${focus}`}
              >
                <FiDownload size={18} /> Download CV
              </a>
            )}
          </div>
          <div className="mt-8 flex gap-3">
            <Socials
              itemClass={`rounded-full border border-white/15 p-3 text-slate-300 transition hover:border-amber-500 hover:text-amber-400 ${focus}`}
            />
          </div>
        </div>

        <div className="flex justify-center lg:col-span-2">
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2.5rem] rounded-br-[6rem] border-2 border-amber-500/70" />
            <div className="relative h-80 w-72 overflow-hidden rounded-[2.5rem] rounded-br-[6rem] border border-white/10 bg-ink-2 shadow-2xl md:h-[26rem] md:w-80">
              <Img
                src={site.photo}
                alt={`Portrait of ${site.name}`}
                className="h-full w-full object-cover"
                fallback={<span className="font-display text-6xl">CKO</span>}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { FiBookOpen, FiExternalLink } from "react-icons/fi";
import { research } from "../data/content";
import { asset } from "../lib/assets";
import { Heading, grid } from "./ui";

export default function Research() {
  return (
    <section id="research" className="bg-ink py-24 text-white" style={grid}>
      <div className="mx-auto max-w-7xl px-6">
        <Heading
          dark
          title="Research interests"
          sub="Questions I'm working on, from business technology to developer experience."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {research.map((r) => (
            <article
              key={r.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
            >
              <FiBookOpen className="text-2xl text-amber-500" />
              <h3 className="font-display mt-4 text-xl leading-snug">
                {r.title}
              </h3>
              <p className="mt-3 text-slate-300">{r.text}</p>
              <div className="mt-5 flex items-center gap-4">
                <span className="rounded-full border border-indigo-400/50 px-3 py-1 text-xs text-indigo-200">
                  {r.status}
                </span>
                {r.link && (
                  <a
                    href={asset(r.link)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-amber-400 hover:underline"
                  >
                    Read <FiExternalLink />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FiAward, FiExternalLink } from "react-icons/fi";
import { certifications } from "../data/content";
import { asset } from "../lib/assets";
import { Heading, Img } from "./ui";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-7xl px-6 py-24">
      <Heading
        title="Certifications"
        sub="Courses I finished, because finishing is a skill too."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5"
          >
            {c.image ? (
              <Img
                src={c.image}
                alt={`${c.name} certificate`}
                className="h-14 w-14 shrink-0 rounded-xl object-cover"
              />
            ) : (
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-xl text-amber-700">
                <FiAward />
              </span>
            )}
            <div className="flex-1">
              <h3 className="font-semibold text-ink">{c.name}</h3>
              <p className="text-sm text-slate-500">{c.by}</p>
              {c.link && (
                <a
                  href={asset(c.link)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:underline"
                >
                  View <FiExternalLink />
                </a>
              )}
            </div>
            <span className="text-sm font-semibold text-slate-400">
              {c.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

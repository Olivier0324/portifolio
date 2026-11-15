import { FaBriefcase } from "react-icons/fa";
import { experience } from "../data/content";
import { Heading } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24">
      <Heading
        title="Experience"
        sub="Real work, design and research that shaped how I build."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {experience.map((x) => (
          <article
            key={x.role}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
          >
            <FaBriefcase className="text-xl text-indigo-600" />
            <p className="mt-4 text-sm font-semibold text-amber-600">
              {x.when}
            </p>
            <h3 className="font-display text-2xl text-ink">{x.role}</h3>
            <p className="text-slate-500">{x.org}</p>
            <ul className="mt-4 space-y-2 text-slate-700">
              {x.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

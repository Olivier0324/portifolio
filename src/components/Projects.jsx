import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/content";
import { Heading, Img, focus } from "./ui";

const categories = ["All", ...new Set(projects.map((p) => p.cat))]; // built from your projects

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const shown =
    filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="projects" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Heading
          title="Things I've built"
          sub="Filter by the kind of work you care about."
        />
        <div
          className="mb-10 flex flex-wrap gap-3"
          role="tablist"
          aria-label="Project categories"
        >
          {categories.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${focus} ${filter === f ? "bg-ink text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <article
              key={p.name}
              className={`group overflow-hidden rounded-3xl border border-slate-200 bg-paper transition hover:-translate-y-1 hover:shadow-xl ${i % 2 ? "lg:mt-8" : ""}`}
            >
              <div className="relative h-52 overflow-hidden bg-ink">
                <Img
                  src={p.image}
                  alt={`${p.name} preview`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-ink">
                  {p.cat}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-ink">{p.name}</h3>
                <p className="mt-2 text-slate-600">{p.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                {(p.liveUrl || p.repoUrl) && (
                  <div className="mt-6 flex gap-5 text-sm font-semibold">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1 text-indigo-700 hover:underline ${focus}`}
                      >
                        Live demo <FiArrowUpRight />
                      </a>
                    )}
                    {p.repoUrl && (
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1 text-slate-700 hover:underline ${focus}`}
                      >
                        <FaGithub /> Source code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

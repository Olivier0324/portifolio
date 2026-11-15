import { about, highlights } from "../data/content";
import { getIcon } from "../lib/icons";
import { Heading } from "./ui";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <Heading
        title="About me"
        sub="Curious by default, stubborn about finishing."
      />
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-slate-700 lg:col-span-3">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="grid gap-4 lg:col-span-2">
          {highlights.map((h) => {
            const Icon = getIcon(h.icon);
            return (
              <div
                key={h.title}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-xl text-indigo-700">
                  <Icon />
                </span>
                <div>
                  <h3 className="font-display text-lg text-ink">{h.title}</h3>
                  <p className="text-sm text-slate-600">{h.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

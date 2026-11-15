import { skills } from "../data/content";
import { getIcon } from "../lib/icons";
import { Heading, grid } from "./ui";

export default function Skills() {
  return (
    <section id="skills" className="bg-ink-2 py-24 text-white" style={grid}>
      <div className="mx-auto max-w-7xl px-6">
        <Heading
          dark
          title="The toolbox"
          sub="Grouped by what I use them for, not by how many stars I can give myself."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((g) => {
            const GroupIcon = getIcon(g.icon);
            return (
              <div
                key={g.title}
                className="rounded-2xl border border-white/10 bg-ink/80 p-6 transition hover:border-amber-500/60"
              >
                <GroupIcon className="text-2xl text-amber-500" />
                <h3 className="font-display mt-4 text-xl">{g.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => {
                    const Icon = getIcon(s.icon);
                    return (
                      <li
                        key={s.name}
                        className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-3 py-1.5 text-sm text-indigo-100"
                      >
                        <Icon className="text-base" /> {s.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

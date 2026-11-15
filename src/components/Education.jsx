import { FaGraduationCap } from "react-icons/fa";
import { education } from "../data/content";
import { Heading } from "./ui";

export default function Education() {
  return (
    <section id="education" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Heading
          title="Where I studied"
          sub="Formal training that gave me the foundation to keep learning on my own."
        />
        <ol className="relative max-w-3xl space-y-10 border-l-2 border-indigo-200 pl-8">
          {education.map((e) => (
            <li key={e.school} className="relative">
              <span className="absolute -left-[2.85rem] flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white">
                <FaGraduationCap />
              </span>
              <p className="text-sm font-semibold text-amber-600">{e.years}</p>
              <h3 className="font-display text-2xl text-ink">{e.school}</h3>
              <p className="text-slate-500">{e.detail}</p>
              <p className="mt-2 text-slate-700">{e.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

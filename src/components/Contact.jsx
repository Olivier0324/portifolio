import { useState } from "react";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { site } from "../data/content";
import { Heading, focus } from "./ui";
import Socials from "./Socials";

const field =
  "mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200";
const empty = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  /*const submit = async (e) => {
    e.preventDefault();

    // No form service set up: open the visitor's email app with the message ready to send.
    if (!site.formEndpoint) {
      const body = encodeURIComponent(
        `${form.message}\n\n${form.name} (${form.email})`,
      );
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Portfolio message from ${form.name}`)}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  };
  */
  const submit = async (e) => {
    e.preventDefault();

    // No access key yet: open the visitor's email app with the message ready to send.
    if (!site.web3formsKey) {
      const body = encodeURIComponent(
        `${form.message}\n\n${form.name} (${form.email})`,
      );
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Portfolio message from ${form.name}`)}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject: `Portfolio message from ${form.name}`,
          from_name: "Portfolio website",
          ...form, // name, email, message
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed");
      setStatus("sent");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  };
  return (
    <section
      id="contact"
      className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2"
    >
      <div>
        <Heading
          title="Have a problem worth solving?"
          sub="Tell me what you're building. I reply within two working days."
        />
        <ul className="space-y-4 text-lg">
          <li className="flex items-center gap-3">
            <FiMail className="text-indigo-600" />{" "}
            <a href={`mailto:${site.email}`} className="hover:underline">
              {site.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FiMapPin className="text-indigo-600" /> {site.location}
          </li>
        </ul>
        <div className="mt-8 flex gap-3">
          <Socials
            itemClass={`rounded-full bg-ink p-3 text-white transition hover:bg-indigo-600 ${focus}`}
          />
        </div>
      </div>
      <form
        onSubmit={submit}
        className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <label className="block text-sm font-semibold text-slate-700">
          Name
          <input
            required
            value={form.name}
            onChange={set("name")}
            className={field}
          />
        </label>
        <label className="block text-sm font-semibold text-slate-700">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={set("email")}
            className={field}
          />
        </label>
        <label className="block text-sm font-semibold text-slate-700">
          Message
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={set("message")}
            className={field}
          />
        </label>
        <button
          disabled={status === "sending"}
          className={`inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500 disabled:opacity-60 ${focus}`}
        >
          <FiSend /> {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "sent" && (
          <p role="status" className="text-sm font-semibold text-emerald-600">
            Message sent. I'll reply soon.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="text-sm font-semibold text-red-600">
            Could not send. Please email me directly at {site.email}.
          </p>
        )}
      </form>
    </section>
  );
}

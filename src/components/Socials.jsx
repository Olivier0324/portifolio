import { site } from "../data/content";
import { getIcon } from "../lib/icons";

export default function Socials({ itemClass = "", size = 20 }) {
  return site.socials.map((s) => {
    const Icon = getIcon(s.platform);
    const href =
      s.url.includes("@") && !s.url.startsWith("mailto:")
        ? `mailto:${s.url}`
        : s.url;
    return (
      <a
        key={s.platform}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={s.platform}
        className={itemClass}
      >
        <Icon size={size} />
      </a>
    );
  });
}

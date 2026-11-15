import { useEffect, useState } from "react";

// Types a word, pauses, deletes it, then moves to the next word.
export function useTypewriter(words, { typeSpeed = 80, deleteSpeed = 40, pause = 1600 } = {}) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    useEffect(() => {
        if (reduced) return;
        const word = words[index % words.length];
        let timer;
        if (!deleting && text === word) {
            timer = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && text === "") {
            setDeleting(false);
            setIndex((n) => n + 1);
        } else {
            timer = setTimeout(
                () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
                deleting ? deleteSpeed : typeSpeed
            );
        }
        return () => clearTimeout(timer);
    }, [text, deleting, index, words, reduced, typeSpeed, deleteSpeed, pause]);

    return { text: reduced ? words[0] : text, reduced };
}
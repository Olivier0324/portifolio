# Cyuzuzo Kwizera Olivier | Developer Portfolio

A personal portfolio website for a Software Engineer focused on frontend development, UI/UX and graphic design. It is a static site with no backend or database. All the content lives in one file, so it is quick to update and cheap to host.

## Features

- All sections: Hero, About, Education, Skills, Experience, Projects, Certifications, Research, Contact and Footer
- Typing effect on the hero text (switches off for visitors who prefer reduced motion)
- Project filters generated automatically from your project categories
- Images and files can be local files or links, whichever you prefer
- Brand and tech icons from React Icons
- Contact form that works without a server
- Responsive layout with a mobile menu
- Accessible: keyboard focus styles, labelled controls and meaningful alt text

## Built with

- [React](https://react.dev) and [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com) v4
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the address printed in the terminal (usually `http://localhost:5173`).

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server with live reload |
| `npm run build` | Creates the production site in `dist/` |
| `npm run preview` | Serves the production build locally to test it |

## Project structure

```
olivier-portfolio/
├── public/
│   └── assets/
│       ├── images/            Your photo, project screenshots, certificates
│       └── files/             Your CV and other downloads
├── src/
│   ├── data/content.js        ALL your text and links (the file you edit)
│   ├── lib/
│   │   ├── assets.js          Handles local paths and full links
│   │   └── icons.js           Maps icon keys to React Icons
│   ├── hooks/useTypewriter.js The typing effect
│   ├── components/            One component per section
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css              Fonts and colours
├── index.html                 Page title and description
└── vercel.json                Deployment settings (optional)
```

## Editing your content

Open `src/data/content.js`. Every section of the site reads from it, so you rarely need to touch a component.

| To change | Edit |
| --- | --- |
| Name, email, location, hero intro, availability badge | `site` |
| The words the hero types | `site.roles` |
| Social links | `site.socials` |
| About text | `about` |
| Education, experience | `education`, `experience` |
| Skills and their icons | `skills` |
| Projects | `projects` |
| Certificates | `certifications` |
| Research topics | `research` |

Anything marked `EDIT` in the file is sample text. Replace it with your real details before publishing.

To hide a section, remove its component from `src/App.jsx` and its name from `nav` in `content.js`.

## Images and files

Anywhere the content asks for an image or file, you can use either option.

**Option 1: a local file.** Put it inside `public/assets/` and write the path without a leading slash:

```js
photo: "assets/images/olivier.jpg",
cv: "assets/files/cv.pdf",
image: "assets/images/projects/campus-connect.jpg",
```

**Option 2: a link.**

```js
photo: "https://example.com/my-photo.jpg",
```

Tips:
- Use lowercase file names with no spaces.
- Keep images under about 300 KB (JPG or WebP) so the site loads quickly.
- If an image is missing, the site shows a gradient or your initials instead of a broken icon.
- Replacing a file keeps the same name, so visitors may need a hard refresh (Ctrl + Shift + R) to see it.

## Icons

Skills and social links use short keys such as `"react"` or `"github"`. The full list is in `src/lib/icons.js`.

To add an icon:

1. Find it at [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons/).
2. Import it in `src/lib/icons.js`, for example `import { SiNextdotjs } from "react-icons/si";`.
3. Add a key to the `icons` object: `nextjs: SiNextdotjs,`.
4. Use `icon: "nextjs"` in `content.js`.

An unknown key falls back to a generic code icon, so a typo never breaks the page.

## Contact form

A static site has no server, so the form has two modes:

- **Without setup (default):** the form opens the visitor's email app with the message already written.
- **With Formspree:** messages are sent to your inbox without leaving the page.
  1. Create a free form at [formspree.io](https://formspree.io).
  2. Copy the form link (it looks like `https://formspree.io/f/xxxxxxxx`).
  3. Paste it into `site.formEndpoint` in `content.js`.
  4. Rebuild and redeploy.

## Colours and fonts

Colours and fonts are defined in the `@theme` block of `src/index.css`:

```css
--color-ink: #0A1128;     /* deep navy */
--color-ink-2: #111B3A;   /* lighter navy sections */
--color-paper: #F7F5F0;   /* off-white background */
```

Indigo and amber accents come from Tailwind's default palette (`indigo-500`, `amber-500`).

## Deployment

Build the site first:

```bash
npm run build
```

### Vercel (recommended)

1. Push the project to GitHub.
2. On [vercel.com](https://vercel.com), choose **Add New → Project** and import the repository.
3. Keep the detected **Vite** preset and click **Deploy**.

Every push to GitHub then redeploys automatically.

### Netlify

Drag the `dist` folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or connect the GitHub repository with build command `npm run build` and publish directory `dist`.

### GitHub Pages

Add a base path in `vite.config.js`, then publish the `dist` folder:

```js
export default defineConfig({
  base: "/your-repository-name/",
  plugins: [react(), tailwindcss()],
});
```

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Styles are missing | Check that `src/index.css` starts with the font `@import` and then `@import "tailwindcss";`, and that `vite.config.js` includes the Tailwind plugin. Restart `npm run dev`. |
| My photo does not appear | The file must be at `public/assets/images/olivier.jpg` (or match `site.photo`). Check the spelling and lower case. |
| An icon is missing or shows a code symbol | The key is not in `src/lib/icons.js`. Add it as described above. |
| Images work locally but not after deploying | Paths must not start with `/public`, and file names are case sensitive online. |
| `X is not defined` | An import is missing at the top of that component file. |

## Contact

**Cyuzuzo Kwizera Olivier**
Software Engineer, Rwanda
cyuzuzokwizeraolivier2@gmail.com

## License

Personal portfolio. Please do not copy the personal content (text, photo, CV). You are welcome to learn from the code structure.
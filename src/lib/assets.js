// Accepts a full link (https://...) or a file inside /public, like "assets/images/olivier.jpg".
export const asset = (path) => {
    if (!path) return "";
    if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
    return import.meta.env.BASE_URL + path.replace(/^\/+/, "");
};
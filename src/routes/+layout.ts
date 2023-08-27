// Set "export const prerender = true" in your root "+layout.js" or "+layout.server.js" and prerender everything except pages that are explicitly marked as not prerenderable

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = 'auto'; //true;

export const trailingSlash = 'always';

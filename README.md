# Interactive Scrum Guide

While learning for [PSM1 Certification](https://www.scrum.org/assessments/professional-scrum-master-i-certification) I've developed this tool to summarize the mentioned terms of specific Scrum terms. Have fun using it.

## Contributions

- Contributions are welcome!
- Changes to the Gide anf it's labels can be applied to `/docs/*.md` files
- Changes can be applied to the Svelte and TypeScript files in `/src/` folder
- Please create a PR for the changes you want to apply
- Feature-requests and Bugs can be submitted [here](https://github.com/SaschaLucius/interactive-scrum-guide/issues)

## How to run

- `./scripts/generate.sh`
- `npm install`
- `npm run dev`

## Sources

### Custom Domain

- https://medium.com/@chflick/how-to-setup-a-github-pages-custom-domain-with-netcup-1da1ef10eb52
- https://hossainkhan.medium.com/using-custom-domain-for-github-pages-86b303d3918a
- https://letsencrypt.org/

### Svelte

- https://svelte.dev/
- https://svelte.dev/repl/5734f123973d4682978427024ca90850?version=3.29.0
- https://github.com/pablo-abc/svelte-markdown

### Websockets and Real Time Data

- https://youtu.be/o-qnnbMbmE4?t=2956
- https://www.youtube.com/watch?v=mAcKzdW5fR8&pp=ygUQc3ZlbHRlIHdlYnNvY2tldA%3D%3D
- https://joyofcode.xyz/using-websockets-with-sveltekit

# Docker

- docker build --no-cache .
- docker run -p 8080:3000 <image id>
- open localhost:8080

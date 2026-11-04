import { createServer } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const server=await createServer({configFile:false,root,resolve:{alias:{'#lib':path.join(root,'src/lib')}},plugins:[svelte({extensions:['.svelte','.svx'],preprocess:mdsvex({extensions:['.svx'],layout:{runbook:path.join(root,'src/lib/layouts/runbook.svelte')}})})],server:{middlewareMode:true},appType:'custom'});
try {
const mod=await server.ssrLoadModule('/src/routes/kb/incidents/4471-review/+page.svx');
const {render}=await server.ssrLoadModule('svelte/server');
const page=render(mod.default);
fs.mkdirSync('rendered',{recursive:true});
fs.writeFileSync('rendered/4471-review.html','<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'+page.head+'</head><body>'+page.body+'</body></html>');
if(!page.body.includes('DR-')||!page.body.includes('379')||!page.body.includes('33'))throw Error('Missing computed counts or signature stamp');
console.log('Rendered supplied Svelte components and mdsvex page; counts 379 / 33 and desk reference present.');
} finally {await server.close()}

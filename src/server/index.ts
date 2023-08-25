import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { handler } from '../../build/handler.js';
import { serverLogic } from './serverLogic.js';
import type { DefaultEventsMap } from 'socket.io/dist/typed-events.js';
import type { State } from '../lib/stores/state.js';

const port: number = 3000;
const app = express();
const server = createServer(app);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, State> = new Server(server);

io.on('connection', serverLogic());

// SvelteKit should handle everything else using Express middleware
// https://github.com/sveltejs/kit/tree/master/packages/adapter-node#custom-server
app.use(handler);

server.listen(port, () => {
	console.log(`listening on *:${port}`);
});

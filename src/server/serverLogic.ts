/* eslint-disable @typescript-eslint/no-explicit-any */
import type { State } from '../lib/stores/state';

import { defaultState } from '../lib/stores/state';

import { Server, Socket } from 'socket.io';
import type { DefaultEventsMap } from 'socket.io/dist/typed-events';
import type { ViteDevServer } from 'vite';
import { isEqual } from './util';

let latestState: State = defaultState;

export function serverLogic(): (
	socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, State>
) => void {
	return (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, State>) => {
		console.log('user connected');
		socket.on('disconnect', () => {
			console.log('user disconnected');
		});
		// State Changed by Client
		socket.on('stateChanged', (msg: State, date: Date) => {
			console.log('State changed from Client: ', typeof msg);
			if (!isEqual(latestState, msg)) {
				latestState = msg;
				socket.broadcast.emit('stateChanged', msg, date);
			}
		});
	};
}

// https://vitejs.dev/guide/api-plugin.html#configureserver
export const webSocketServer: {
	name: string;
	configureServer(server: ViteDevServer): void;
} = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer): void {
		if (!server.httpServer) return;

		const io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> = new Server(
			server.httpServer
		);
		io.on('connection', serverLogic());
	}
};

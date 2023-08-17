/* eslint-disable @typescript-eslint/no-explicit-any */
import type { State } from '../src/lib/stores/state';

import { defaultState } from '../src/lib/stores/state';

import { Server, Socket } from 'socket.io';
import type { DefaultEventsMap } from 'socket.io/dist/typed-events';
import type { ViteDevServer } from 'vite';

let latestState: State = defaultState;

function isEqual(obj1: State, obj2: State): boolean {
	if (obj1 === obj2) {
		return true;
	}

	const props1 = Object.getOwnPropertyNames(obj1);
	const props2 = Object.getOwnPropertyNames(obj2);
	if (props1.length != props2.length) {
		return false;
	}
	for (let i = 0; i < props1.length; i++) {
		const val1 = obj1[props1[i]];
		const val2 = obj2[props1[i]];
		const isObjects = isObject(val1) && isObject(val2);
		if ((isObjects && !isEqual(val1, val2)) || (!isObjects && val1 !== val2)) {
			return false;
		}
	}
	return true;
}

function isObject(object: any): boolean {
	return object != null && typeof object === 'object';
}

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

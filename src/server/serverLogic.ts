import { type State, DEFAULT_STATE } from '../lib/stores/state.js'; // .js extension fixed ERR_MODULE_NOT_FOUND
import { Server, Socket } from 'socket.io';
import type { DefaultEventsMap } from 'socket.io/dist/typed-events';
import type { ViteDevServer } from 'vite';
import { isEqual } from './util.js'; // .js extension fixed ERR_MODULE_NOT_FOUND

let latestState: State = DEFAULT_STATE;

export function serverLogic(): (
	socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, State>
) => void {
	return (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, State>) => {
		console.log('Client connected: ', socket.id);
		socket.on('disconnect', () => {
			console.log('Client disconnected: ', socket.id);
		});
		// State Changed by Client
		socket.on('stateChanged', (msg: State, date: Date) => {
			console.log('State changed by Client: ', socket.id, msg);
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

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> = new Server(
			server.httpServer
		);
		io.on('connection', serverLogic());
	}
};

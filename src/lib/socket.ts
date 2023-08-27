import { Manager } from 'socket.io-client';

const manager = new Manager({
	autoConnect: false,
	reconnection: false
});

const socket = manager.socket('/');

export const io = socket;

import { io, Socket } from "socket.io-client";
import { Message } from "../Types/Message";

const SOCKET_SERVER_URL = "http://localhost:3000/";

class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io(SOCKET_SERVER_URL);
  }

  public connect(): void {
    this.socket.connect();
  }

  public disconnect(): void {
    this.socket.disconnect();
  }

  public sendMessage(message: Message): void {
    this.socket.emit("message", message);
  }

  public onMessageReceived(callback: (message: Message) => void): void {
    this.socket.on("message", callback);
  }
}

export default new SocketService();

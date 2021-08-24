import * as WebSocket from 'ws';

export abstract class MessageServer<T> {

  constructor(private readonly wsServer: WebSocket.Server) {
    this.wsServer.on('connection', this.subscribeToMessages);
    this.wsServer.on('error', this.cleanupDeadClients);
  }

  protected abstract handleMessage(sender: WebSocket, message: T): void;

  protected readonly subscribeToMessages = (ws: WebSocket): void => {
    ws.on('message', (data: WebSocket.Data) => {
      this.handleMessage(ws, JSON.parse(this.ab2str(data)));
    });
  }
  
  private ab2str = (buf) => {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
  }

  private readonly cleanupDeadClients = (): void => {
    this.wsServer.clients.forEach(client => {
      if (this.isDead(client)) {
        this.wsServer.clients.delete(client);
      }
    });
  }

  protected broadcastExcept(currentClient: WebSocket, message: Readonly<T>): void {
      this.wsServer.clients.forEach(client => {
        if (this.isAlive(client) && client !== currentClient) {
          client.send(JSON.stringify(message));
        }
      });
  }

  protected replyTo(client: WebSocket, message: Readonly<T>): void {
    client.send(JSON.stringify(message));
  }

  protected get clients(): Set<WebSocket> {
    return this.wsServer.clients;
  }

  private isAlive(client: WebSocket): boolean {
    return !this.isDead(client);
  }

  private isDead(client: WebSocket): boolean {
    return (
      client.readyState === WebSocket.CLOSING ||
      client.readyState === WebSocket.CLOSED
    );
  }
}
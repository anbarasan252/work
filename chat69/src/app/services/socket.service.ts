import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket;

  constructor() {
    // Connect to the server (replace with your server's URL if different)
    this.socket = io('http://localhost:3000');
  }

  // Send a message to the server
  sendMessage(message: string): void {
    this.socket.emit('chat message', message);
  }

  // Listen for messages from the server
  getMessages(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('chat message', (message: string) => {
        observer.next(message);
      });
    });
  }

  // Listen for the welcome message from the server
  getWelcomeMessage(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('welcome', (message: string) => {
        observer.next(message);
      });
    });
  }

  // Disconnect the socket when the app is closed
  disconnect(): void {
    this.socket.disconnect();
  }
}

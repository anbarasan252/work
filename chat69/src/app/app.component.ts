import { Component } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat69';

  private socket: Socket;

  constructor() {
    // Connect to the server (replace with your server's URL if different)
    this.socket = io('http://localhost:3000/');


  }
  test(){
    this.socket.emit('chat message', 'message');
    this.socket.on('chat message', (message: string) => {
      console.log(message);
    });
  }
}

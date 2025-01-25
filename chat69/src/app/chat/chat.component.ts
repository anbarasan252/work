// chat.component.ts
import { Component } from '@angular/core';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  message: string = '';
  messages: string[] = [];

  constructor(private socketService: SocketService){
    this.socketService.getMessages().subscribe(m=>this.messages.push(m))

  }

  // Method to send the message
  sendMessage() {
    if (this.message.trim()) {
      this.socketService.sendMessage(this.message)
      this.messages.push(this.message); // Add message to the list
      this.message = ''; // Clear the input field
    }
  }
}

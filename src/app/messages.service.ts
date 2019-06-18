import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: string[] = [];

  addMessage(message: string) {
    this.messages.push(message)
  }

  clearMessages() {
    this.messages = []
  }

  getMessages(): string[] {
    return this.messages;
  }

  constructor() { }
}

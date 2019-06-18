import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.styl']
})
export class MessagesComponent implements OnInit {

  // messages = this.messagesService.getMessages()

  // clearMessages() {
  //   this.messagesService.clearMessages()
  // }

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
  }

}

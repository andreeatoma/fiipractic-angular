import { Component, OnInit, Input } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  host: {
  	class: 'row'
  }
})
export class MessageComponent implements OnInit {
  @Input () message: Message;

  constructor() { }

   voteUp() :boolean {
    this.message.voteUp();
    return false;
  }

  voteDown() :boolean {
    this.message.voteDown();
    return false;
  }

  ngOnInit() {
  }

}

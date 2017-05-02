import { Component, OnInit } from '@angular/core';
import { Message } from '../message/message.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	messages: Message[];

  	constructor() {
	  	this.messages = [
	  	new Message('Diana', 'O reala sursa de inspiratie!', 5),
	  	new Message('Andreea', 'Foarte multe stiluri de design din care ma pot inspira!', 9),
	  	new Message('Maru', 'Great ideas!', 8),
	  	];
    }

  	addMessage(name: HTMLInputElement, description: HTMLInputElement) :boolean {
	 console.log(`Adding full name: ${name.value} and message: ${description.value}`);
	 this.messages.push(new Message(name.value, description.value, 0));
	 name.value = '';
	 description.value = '';
	 return false;
	}

  ngOnInit() {
  	
  }

}

import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
	title: string = 'Ne gasiti la locatia';
	private lat: number = 47.1561373;
  	private lng: number = 27.5869704;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.css']
})
export class SliderHomeComponent implements OnInit {
  imageScreens: Array<any>;

  constructor(private http:Http) {
    
    this.http.get('./src/data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.imageScreens = res);

  }

  ngOnInit() {
    
  }

}

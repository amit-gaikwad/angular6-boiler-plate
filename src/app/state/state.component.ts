import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent  {
  childCity: string;
  states = [
    { city: 'pune', state: 'Maharashtra'},
    { city: 'banglore', state: 'Karnataka'},
    { city: 'panaji', state: 'Goa'},
  ];

  receiveDataFromChild(city) {
    this.childCity = city;
  }
}

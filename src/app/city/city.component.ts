import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent  {
  city: string;
  @Output() myEventEmitter = new EventEmitter<string>();

  onSubmit() {
    this.myEventEmitter.emit(this.city);
  }
}

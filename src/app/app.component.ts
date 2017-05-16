import { Component, OnInit } from '@angular/core';
import { PlaceService } from './place.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PlaceService]

})
export class AppComponent {
  constructor(private placeService : PlaceService){}

  ngOnInit(){
    let places = this.placeService.getPlaces();
    console.log(places);
  }
}

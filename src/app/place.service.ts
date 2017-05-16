import { Injectable } from '@angular/core';
import { Http }  from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { API_KEY } from '../config/keys';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PlaceService {

  private baseUrl : string = 'https://maps.googleapis.com/maps/api/place/textsearch/json' + API_KEY;

  constructor(private http: Http) { }

  getPlaces() : Observable<any>
  {
    let subject = new Subject();
    return this.http.get(this.baseUrl)
                    .map((res)=> {return res.json().data})
  }

}




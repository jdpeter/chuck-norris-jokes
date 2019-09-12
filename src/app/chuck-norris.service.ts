import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {

  endpoint = "https://api.icndb.com/jokes/random";

  constructor(private http: HttpClient) {
  }

  getRandomJoke(){
    return this.http.get<string>(this.endpoint);
  }
}

import { Injectable } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {

  endpoint = "https://api.icndb.com";

  constructor(private http: HttpClient) {
      
   }

  getRandomJoke(): Observable<string> {
  return this.http.get<string>(this.endpoint);
  }
}

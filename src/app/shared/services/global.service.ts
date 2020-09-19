import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http:HttpClient) { }

  getSample() {
    console.log("Sample call");
    let url = environment.mock;
    return this.http.get<any[]>(environment.mock);
  }
}

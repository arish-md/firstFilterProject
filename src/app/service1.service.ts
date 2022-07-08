import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  

  constructor(private http: HttpClient) { }


  public getApiData(): Observable<any>{
    return this.http.get("https://5f2a9ccd6ae5cc0016422c7b.mockapi.io/getEmployees");
  }
}

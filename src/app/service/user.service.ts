import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static filter: string;


  constructor(private http : HttpClient) {}
    getData(){
      let url="https://restcountries.com/v2/all";
      return this.http.get(url);
      }
      getdata1(name:string){
        let url="https://restcountries.com/v2/name/"+name;
        return this.http.get(url)
      }
    }

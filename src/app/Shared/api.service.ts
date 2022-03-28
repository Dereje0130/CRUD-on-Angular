import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postPatients(data : any){
    return this.http.post<any>(" https://backendlast.herokuapp.com/",data).pipe(
      map(
        (
          res => {
            return res;
          } )))
     
  }
  getPatients(){
    return this.http.get<any>(" https://backendlast.herokuapp.com/").pipe(
      map(
        (
          res => {
            return res;
          } )))
     
  }
  putPatients(data : any,id:number){
    return this.http.put<any>(" https://backendlast.herokuapp.com/"+id,data).pipe(
      map(
        (
          res => {
            return res;
          } )))
     
  }
  deletePatients(id:number){
    return this.http.delete<any>(" https://backendlast.herokuapp.com/"+id).pipe(
      map(
        (
          res => {
            return res;
          } )))
     
  }
}
 
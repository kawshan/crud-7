import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {EmployeeModel} from "./employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { }


  api:string="http://localhost:8080";

  saveEmployee(employee:EmployeeModel):Observable<EmployeeModel>{
    return this.http.post<EmployeeModel>(`${this.api}/save/employee`,employee);
  }



}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Personal} from "../types/personal";
import {APP_URL} from "../../../services/base_url.app";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  private loading: boolean = false;
  private people: Personal[] = [];

  get personal(){
    return [...this.people];
  }

  set setPersonal(person: Personal){
    this.people.push(person);
  }

  get isLoading(){
    return this.loading;
  }

  set setIsLoading(value: boolean){
    this.loading = value;
  }

  constructor(private http: HttpClient) {}

  findAll(){
    this.loading = true;
    this.http.get<any>(`${APP_URL}api/personal/`).subscribe((response: Personal[]) => {
          this.people = response;
          this.loading = false;
    });
  }

  findAllPositions(){
    this.loading = true;
    return this.http.get<any>(`${APP_URL}api/position/`);
  }

  save(person: Personal){ 
    this.loading = true;
    return this.http.post<any>(`${APP_URL}api/personal/`, person);
  }
}
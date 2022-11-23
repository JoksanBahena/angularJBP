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

  constructor(private http: HttpClient) {}

  findAll(){
    this.loading = true;
    this.http.get<any>(`${APP_URL}api/personal/`)
        .pipe(
            catchError((error) => {
              this.loading = false;
              return error;
            })
        ).subscribe((response: Personal[]) => {
          this.people = response;
          this.loading = false;
    });
  }

  findById(){

  }

  save(){

  }
}
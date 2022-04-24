import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Header } from "./header.model";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private jsonUrl = "db/header.json"

  constructor(private http: HttpClient) { }

  load(): Observable<Header> {
    return this.http.get<Header>(this.jsonUrl);
  }
}

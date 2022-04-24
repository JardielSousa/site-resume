import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Summary } from "./summary.model";

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  private jsonUrl = 'db/summary.json'

  constructor(private http: HttpClient) { }

  load(): Observable<Summary> {
    return this.http.get<Summary>(this.jsonUrl)
  }

}

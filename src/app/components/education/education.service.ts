import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Education } from "./education.model";

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private jsonUrl = "db/education.json";

  constructor(private http: HttpClient) { }

  load(): Observable<Education[]> {
    return this.http.get<Education[]>(this.jsonUrl);
  }
}

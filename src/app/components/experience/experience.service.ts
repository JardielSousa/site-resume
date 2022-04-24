import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Experience } from "./experience.model";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private jsonUrl = "db/experience.json"

  constructor(private http: HttpClient) { }

  load(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.jsonUrl);
  }
}

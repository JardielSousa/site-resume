import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  private jsonUrl = "db/interests.json"

  constructor(private http: HttpClient) { }

  load(): Observable<string[]> {
    return this.http.get<string[]>(this.jsonUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Skills } from './skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private jsonUrl = "db/skills.json"

  constructor(private http: HttpClient) { }

  load(): Observable<Skills> {
    return this.http.get<Skills>(this.jsonUrl);
  }
}

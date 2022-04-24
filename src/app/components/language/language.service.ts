import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Language } from './language.model';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  private jsonUrl = "db/language.json"

  constructor(private http: HttpClient) { }

  load(): Observable<Language[]> {
    return this.http.get<Language[]>(this.jsonUrl);
  }
}

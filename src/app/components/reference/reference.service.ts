import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Reference } from './reference.model';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  private jsonUrl = "db/reference.json"

  constructor(private http: HttpClient) { }

  load(): Observable<Reference[]> {
    return this.http.get<Reference[]>(this.jsonUrl);
  }
}

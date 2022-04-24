import { Component, OnInit } from '@angular/core';
import { Language } from './language.model';
import { LanguageService } from "./language.service";

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  languages: Language[] = []

  constructor(private service: LanguageService) { }

  ngOnInit(): void {
    this.service.load().subscribe((data: Language[]) => this.languages = data)
  }

}

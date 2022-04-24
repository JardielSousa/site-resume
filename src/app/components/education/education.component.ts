import { Component, OnInit } from '@angular/core';
import { EducationService } from "./education.service";
import { Education } from './education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educations: Education[] = []

  constructor(private service: EducationService) { }

  ngOnInit(): void {
    this.service.load().subscribe((data: Education[]) => this.educations = data);
  }

}

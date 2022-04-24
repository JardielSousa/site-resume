import { Component, OnInit } from '@angular/core';
import { ExperienceService } from "./experience.service";
import { Experience } from "./experience.model";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  title: string = "Work Experience"
  experiences: Experience[] = []

  constructor(private service: ExperienceService) { }

  ngOnInit(): void {
    this.service.load().subscribe((data: Experience[]) => this.experiences = data);
  }

}

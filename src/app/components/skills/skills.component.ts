import { Component, OnInit } from '@angular/core';
import { SkillsService } from "./skills.service";
import { Skills } from "./skills.model";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  title: string = "Skills & Tools"
  skills: Skills = {frontend: [], backend: [], others: []}
  
  constructor(private service: SkillsService) { }

  ngOnInit(): void {
    this.service.load().subscribe((data: Skills) => this.skills = data);
  }

}

import { Component, OnInit } from '@angular/core';
import { Developer } from 'src/models/developer.model';
import { Skill } from 'src/models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  devSample: Developer = new Developer("Durand", "Michel", 42, "non-binary", "C'est un héro", []);

  ngOnInit(): void {
    // créer un nouveau skill: "Typescript", "logo", "site"
    const skill1: Skill = new Skill("TypeScript", "logo", "site");
    // ajouter un nouveau skill au développeur
    this.devSample.skills.push(skill1);
    this.devSample.skills.push(new Skill("Angular", "logo", "site"));
    console.log("skills", this.devSample.skills);
  }
}

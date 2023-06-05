import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  @Input()
  name: string = '';
  @Input()
  logo: string = '';
  @Input()
  site: string = '';
}

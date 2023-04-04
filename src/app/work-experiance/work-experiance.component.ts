import { Component } from '@angular/core';

class WorkExperience {
  position: string;
  company: string;
  duration: string;
  responsibilities: string;
  constructor(position: string, company: string, duration: string, responsibilities: string) {
    this.position = position;
    this.company = company;
    this.duration = duration;
    this.responsibilities = responsibilities;
  }
}

@Component({
  selector: 'app-work-experiance',
  templateUrl: './work-experiance.component.html',
  styleUrls: ['./work-experiance.component.css']
})
export class WorkExperianceComponent {
  workExperience: WorkExperience[] =
  [new WorkExperience("Junior backend developer", "CD Project Red", "10 months", "assistance in the development of physics and rendering of the world"),
  new WorkExperience("Trainee Fullstack developer", "FoxmindEd", "6 months", "website development and maintenance")];
}

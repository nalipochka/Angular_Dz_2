import { Component } from '@angular/core';

class Education {
  degree: string;
  institution: string;
  graduationYear: number;
  constructor(degree: string, institution: string, graduationYear: number) {
    this.degree = degree;
    this.institution = institution;
    this.graduationYear = graduationYear;
  }
}
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education: Education = new Education("Master", 'IT "Step" Academy', 2023);
}

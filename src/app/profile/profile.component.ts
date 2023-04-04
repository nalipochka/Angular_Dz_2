import { Component } from '@angular/core';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  countryCode = "UA";
  name: string = "Ilya";
  surname: string = "Mazurok";
  patronymic: string = "Vasilevich";
  age: number = 19;
  city: string = "Krivoy Rog";
  phoneNumber: string = "988986878"
  imageURL:string= "../assets/images/photo_2022-11-19_19-36-07.jpg";
}

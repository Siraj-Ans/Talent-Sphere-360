import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule, RouterLink],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  firstName!: string;
  lastName!: string;
  city!: string;
  country!: string;
  phoneNo!: string;
  email!: string;
  organization!: string;
  designation!: string;
  noOfEmployees!: number;
  message?: string;

  onClick() {
    const formData = new FormData();
  }
}

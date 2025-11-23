import { Component } from '@angular/core';
import { Footer } from '../shared/footer/footer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  imports: [FormsModule, Footer],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
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
  services = [
    {
      name: 'Talent Acquisition & Hiring',
      plans: ['Sphere Basic', 'Sphere Growth', 'Sphere Elite', 'Custom'],
    },
    {
      name: 'Startup HR Support',
      plans: ['Sphere Basic', 'Sphere Growth', 'Sphere Elite', 'Custom'],
    },
    {
      name: 'Learning & Development (L&D)',
      plans: ['Sphere Basic', 'Sphere Growth', 'Sphere Elite', 'Custom'],
    },
    {
      name: 'Employee Engagement & Wellbeing',
      plans: ['Sphere Basic', 'Sphere Growth', 'Sphere Elite', 'Custom'],
    },
  ];

  selectedService: string | null = null;
  selectedPlan: string | null = null;

  onClick() {
    const formData = new FormData();
  }

  get availablePlans(): string[] {
    const service = this.services.find((s) => s.name === this.selectedService);
    return service ? service.plans : [];
  }

  onSelectionChange() {
    console.log('Selected Service:', this.selectedService);
    console.log('Selected Plan:', this.selectedPlan);
  }
}

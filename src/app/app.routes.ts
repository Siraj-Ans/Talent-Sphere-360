import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutUs } from './about-us/about-us';
import { Podcast } from './podcast/podcast';
import { Jobs } from './jobs/jobs';
import { Services } from './services/services';
import { Gallery } from './gallery/gallery';
import { ContactUs } from './contact-us/contact-us';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'about-us',
    component: AboutUs,
  },
  {
    path: 'podcast',
    component: Podcast,
  },
  {
    path: 'jobs',
    component: Jobs,
  },
  {
    path: 'services',
    component: Services,
  },
  {
    path: 'gallery',
    component: Gallery,
  },
  {
    path: 'contact-us',
    component: ContactUs,
  },
];

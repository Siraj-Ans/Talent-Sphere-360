import { AfterViewInit, Component } from '@angular/core';
import { Footer } from '../shared/footer/footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RouterLink } from '@angular/router';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-us',
  imports: [Footer, RouterLink],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs implements AfterViewInit {
  ngAfterViewInit(): void {
    const hero = document.querySelector('.hero-section') as HTMLElement;

    if (!hero) return;

    // Pin hero section while scrolling
    ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: () => `+=${hero.offsetHeight}`, // pin only for its own height
      pin: true,
      pinSpacing: false, // avoids extra white space
    });
  }
}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  carouselItems = [
    {
      image: 'assets/Icons/productivity-ability-talent-productive-svgrepo-com.svg',
      alt: 'Talent Icon',
      url: '',
      text: `"The Sphere Partnership Plans look very flexible. Having different options for startups, SMEs, and corporates makes it much easier to choose the right level of support."`,
      author: 'XILIKE[XIAMEN] CONSULTANCY PVT.LTD. - CHINA',
    },
    {
      image: 'assets/Images/deaestheticlounge.jpg',
      alt: 'De Aesthetics',
      url: 'https://www.instagram.com/deaestheticlounge/',
      text: `"I like how your TALENT values are not just words but seem built into your approach. Transparency and empathy really stand out to me as unique."`,
      author: 'De Aesthetics',
    },
    {
      image: 'assets/Images/Rammen Station.jpg',
      alt: 'Rammen Station',
      url: 'https://www.instagram.com/ramenstation_rwp/',
      text: `"Really impressed with the clarity of your services! The way you’ve aligned HR with purpose-driven growth is exactly what many businesses need today."`,
      author: 'Rammen Station - Rawalpindi',
    },
  ];
  scrollAmount = 320; // Adjust based on card width

  scrollLeft() {
    const el = this.carousel.nativeElement;
    el.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
  }

  scrollRight() {
    const el = this.carousel.nativeElement;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const newScrollLeft = el.scrollLeft + this.scrollAmount;

    // Prevent overscrolling beyond last element
    el.scrollTo({
      left: Math.min(newScrollLeft, maxScroll),
      behavior: 'smooth',
    });
  }

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

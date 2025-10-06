import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
  @ViewChild('carouselWrapper') carouselWrapper!: ElementRef;
  currentIndex = 0;
  itemWidth = 0;
  visibleItems = 0;
  clientComments = [
    {
      link: 'https://www.instagram.com/ramenstation_rwp?igsh=MWQ0Njg4ZTYwMTlsZg==',
      image: 'assets/Icons/productivity-ability-talent-productive-svgrepo-com.svg',
      name: 'XILIKE[XIAMEN] CONSULTANCY PVT.LTD. - CHINA',
      comment:
        'The Sphere Partnership Plans look very flexible. Having different options for startups, MEs, and corporates makes it much easier to choose the right level of support.',
    },
    {
      link: 'https://www.instagram.com/deaestheticlounge?igsh=MTB0cjN0dmkxc3U4bw==',
      image: 'assets/Images/deaestheticlounge.jpg',
      name: 'De Aesthetics',
      comment:
        'I like how your TALENT values are not just words but seem built into your approach. Transparency and empathy really stand out to me as unique.',
    },
    {
      link: '',
      image: 'assets/Images/Rammen Station.jpg',
      name: 'Rammen Station - Rawalpindi',
      comment:
        'Really impressed with the clarity of your services! The way you’ve aligned HR with purpose-driven growth is exactly what many businesses need today.',
    },
    {
      link: 'https://www.linkedin.com/company/redonfilms/',
      image: 'assets/Images/Rammen Station.jpg',
      name: 'Rednon Films',
      comment:
        'Really impressed with the clarity of your services! The way you’ve aligned HR with purpose-driven growth is exactly what many businesses need today.',
    },
  ];

  ngAfterViewInit(): void {
    this.calculateSizes();
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

  @HostListener('window:resize')
  onResize() {
    this.calculateSizes();
  }

  calculateSizes() {
    const wrapper = this.carouselWrapper.nativeElement as HTMLElement;
    const item = wrapper.querySelector('.carousel-item') as HTMLElement;
    if (!item) return;

    // Get item width including the gap
    this.itemWidth = item.offsetWidth + 16; // 16px = Tailwind gap-4
    const containerWidth = wrapper.offsetWidth;

    // Calculate how many items can fit exactly
    this.visibleItems = containerWidth / this.itemWidth;
  }

  next() {
    const maxIndex = Math.ceil(this.clientComments.length - this.visibleItems);

    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    } else {
      // Ensure it doesn't go beyond the last fully visible frame
      this.currentIndex = maxIndex;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}

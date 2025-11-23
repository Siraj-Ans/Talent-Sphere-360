import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Footer } from '../shared/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  @ViewChild('track') track!: ElementRef;

  partners = [
    {
      image: 'assets/Images/deaestheticlounge.jpg',
      url: '',
    },
    {
      image: 'assets/Images/Rammen Station.jpg',
      url: '',
    },
    {
      image: 'assets/logo/Redon Logo.svg',
      url: '',
    },
  ];

  doubledSlides: any[] = [];

  index = 0;
  interval: any;
  itemWidth = 0;

  ngOnInit() {
    // duplicate list to simulate infinite loop
    this.doubledSlides = [...this.partners, ...this.partners];
  }

  ngAfterViewInit(): void {
    // calculate actual pixel width of each slide AFTER rendering
    const firstItem = this.track.nativeElement.children[0];
    this.itemWidth = firstItem.offsetWidth + 8; // +8px for margin mx-2 (4px each side)

    this.startCarousel();
  }

  startCarousel() {
    const trackEl = this.track.nativeElement;

    this.interval = setInterval(() => {
      this.index++;

      trackEl.style.transform = `translateX(-${this.index * this.itemWidth}px)`;

      // when original list ends
      if (this.index === this.partners.length) {
        setTimeout(() => {
          trackEl.style.transition = 'none';
          this.index = 0;
          trackEl.style.transform = 'translateX(0)';

          setTimeout(() => {
            trackEl.style.transition = 'transform 0.5s linear';
          }, 30);
        }, 500);
      }
    }, 2000);
  }
}

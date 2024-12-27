import { ViewportScroller } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @ViewChildren('navLink') links!: QueryList<ElementRef>;

  setActive(event: Event): void {
    event.preventDefault();
    console.log(this.links);

    this.links.forEach((link) => {
      link.nativeElement.classList.remove('active');
    });

    const clickedElement = event.target as HTMLElement;
    clickedElement.classList.add('active');
  }

  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}

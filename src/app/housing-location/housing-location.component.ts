import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [NgFor, RouterModule],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    <a [routerLink] = "['/details', housingLocation.id]" > Pokaż mi </a>

  </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;
}

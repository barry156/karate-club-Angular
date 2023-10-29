import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector:'ng-carousel-basic',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss']
})
export class CarousselComponent {
  images = ['../../assets/slideshow/slideshow1.jpg','../assets/slideshow/slideshow2.jpg' , '../../assets/slideshow/slideshow3.jpg' ]

}

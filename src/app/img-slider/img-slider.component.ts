import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {ImgSlideComponent} from './img-slide/img-slide.component';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss']
})
export class ImgSliderComponent implements OnInit, AfterContentInit {

  @ContentChildren(ImgSlideComponent) slides: QueryList<ImgSlideComponent>;
  component;
  activeIndex = 0;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.slides);
    this.component = this.slides.first;
  }

  previous() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = 2;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }

  next() {
    if (this.activeIndex < this.slides.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }

}

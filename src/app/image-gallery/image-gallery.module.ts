import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageGalleryComponent} from './image-gallery.component';
import {ImageCardComponent} from './image-card/image-card.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [ImageGalleryComponent, ImageCardComponent],
  imports: [
    CommonModule
  ],
  exports: [ImageGalleryComponent]
})
export class ImageGalleryModule {
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-stream',
  template: '<img [src]="currentImageUrl" alt="Image" />',
  styleUrls: ['./image-stream.component.css']
})
export class ImageStreamComponent implements OnInit, OnDestroy {
  currentImageUrl: string = '';
  private imageSubscription: Subscription | undefined;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageSubscription = this.imageService.getImageStream(1000).subscribe((imageUrl) => {
      this.currentImageUrl = imageUrl;
    });
  }

  ngOnDestroy(): void {
    if (this.imageSubscription) {
      this.imageSubscription.unsubscribe();
    }
  }
}
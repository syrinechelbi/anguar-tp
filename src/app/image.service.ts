import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private imageUrls: string[] = [
    'assets/images/rotating_card_profile.png',
    'assets/images/rotating_card_profile2.png',
    'assets/images/rotating_card_profile3.png',
    'assets/images/rotating_card_thumb.png',
    'assets/images/rotating_card_thumb2.png',
    'assets/images/rotating_card_thumb3.png',

  ];

  getImageStream(intervalTime: number): Observable<string> {
    return interval(intervalTime).pipe(
      map((index) => this.imageUrls[index % this.imageUrls.length])
    );
  }
}
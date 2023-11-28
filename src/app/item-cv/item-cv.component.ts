import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css'],
  standalone:true
})
export class ItemCvComponent {
  @Input() imageUrl: string = '';
}

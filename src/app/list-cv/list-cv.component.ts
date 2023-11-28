import { Component, OnInit } from '@angular/core';
import { ItemCvComponent } from '../item-cv/item-cv.component';
import { CvService } from '../cv/cv.service';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css'],
  standalone:true,
  imports:[ItemCvComponent]
})
export class ListCvComponent implements OnInit {
  yourImageUrlHere: string = '';
  yourImageUrlHere1: string = '';
  yourImageUrlHere2: string = '';

  selectedCvId: number | undefined;

  
    cvs: any[] = [];
  
    constructor(private cvService: CvService) { 
      this.yourImageUrlHere = '/assets/images/rotating_card_profile.png';
    this.yourImageUrlHere1 = '/assets/images/rotating_card_profile2.png';
    this.yourImageUrlHere2 = '/assets/images/rotating_card_profile3.png';}
  
    ngOnInit(): void {
      this.cvs = this.cvService.getAllCvs();
    }
    showCvDetails(id: number): void {
      this.selectedCvId = id;
    }
  
}

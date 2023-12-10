import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cv } from './cv.model';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private cvs: Cv[];
  constructor() {
    this.cvs = [];
   }
  getEmbauchees(): Cv[]{
     return this.cvs;
   }
   embaucher(cv: Cv): void{
      const index = this.cvs.indexOf(cv);
      if (index < 0){
        this.cvs.push(cv);
      } else{
        alert(`${cv.firstname} ${cv.name} est déjà séléctionné(e)`);
      }

   }
  

   }


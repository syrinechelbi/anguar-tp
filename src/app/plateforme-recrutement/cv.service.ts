import { Injectable } from '@angular/core';
import { Cv } from './cv.model';


@Injectable({
  providedIn: 'root'
})
export class CvService {

  private cvs:Cv[];
  
  constructor() {
    this.cvs=[
      new Cv(1,'Marvel','John',40,'11111111','CEO',"assets/images/rotating_card_profile3.png"),
      new Cv(2,'White','Ana',32,'22222222','HR Manger',"assets/images/rotating_card_profile.png"),
      new Cv(3,'Mars','Matt',35,'33333333','Scrum Master',"assets/images/rotating_card_profile2.png"),
      new Cv(4,'Walker','Peter',28,'44444444','Web Developer',""),
    ]
   }

   getCvs():Cv[]{
    return this.cvs;
   }
}



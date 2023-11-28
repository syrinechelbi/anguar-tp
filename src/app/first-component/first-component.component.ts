import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  public color: string = '#000000';

  constructor() { }

  ngOnInit() { }

  changeColor(color: string) {
    this.color = color;
  }

 
  


}

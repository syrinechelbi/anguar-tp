import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent {
  textColor: string = '';
  fontSize: number = 16;
  fontFamily: string = 'Arial';

  get paragraphStyles(): any {
    return {
      'color': this.textColor,
      'font-size.px': this.fontSize,
      'font-family': this.fontFamily,
    };
  }

  applyStyles(): void {
    
  }

}

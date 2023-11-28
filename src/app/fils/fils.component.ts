import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
  standalone:true
})
export class FilsComponent {
  @Input() parentBackgroundColor: string = '';
  public myFavoriteColor: string = 'green';

  public changeParentColor(): void {
    
    this.parentBackgroundColor = this.myFavoriteColor;
  }
}

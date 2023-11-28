import { Component } from '@angular/core';
import { FilsComponent } from '../fils/fils.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  standalone:true,
  imports:[FilsComponent]
})
export class ParentComponent {
  public backgroundColor: string = 'lightblue';

}

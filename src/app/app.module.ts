import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { ParentComponent } from './parent/parent.component';
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cv/cv.component';
import { ListCvComponent } from './list-cv/list-cv.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { ItemCvComponent } from './item-cv/item-cv.component';
import { PipeImagePipe } from './pipe-image.pipe';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { RainbowDirective } from './rainbow.directive';
import { SimulateurComponent } from './simulateur/simulateur.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    CarteVisiteComponent,
    PipeImagePipe,
    MiniWordComponent,
    RainbowDirective,
    SimulateurComponent,
    
    
    
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,ParentComponent,FilsComponent,ItemCvComponent,ListCvComponent,CommonModule,CvComponent,
    DetailCvComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

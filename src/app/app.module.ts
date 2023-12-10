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

import { PipeImagePipe } from './pipe-image.pipe';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { RainbowDirective } from './rainbow.directive';
import { SimulateurComponent } from './simulateur/simulateur.component';
import { CvComponent } from './plateforme-recrutement/cv/cv.component';
import { ListeCvComponent } from './plateforme-recrutement/liste-cv/liste-cv.component';
import { DetailCvComponent } from './plateforme-recrutement/detail-cv/detail-cv.component';
import { ItemCvComponent } from './plateforme-recrutement/item-cv/item-cv.component';
import { ListeEmbaucheComponent } from './plateforme-recrutement/liste-embauche/liste-embauche.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthenticationFormComponent } from './authentication-form/authentication-form.component';
import { ImageStreamComponent } from './image-stream/image-stream.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    CarteVisiteComponent,
    PipeImagePipe,
    MiniWordComponent,
    RainbowDirective,
    SimulateurComponent,
    NavbarComponent,
    AuthenticationFormComponent,
    ImageStreamComponent,
    DetailsComponent,
    
    
    
   

    
    
    
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule,ParentComponent,FilsComponent,CommonModule,ListeCvComponent,
    DetailCvComponent,
    ItemCvComponent,CvComponent,ListeEmbaucheComponent,HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', // Position des toasts
      timeOut: 3000, // Durée d'affichage en millisecondes
      closeButton: true, // Afficher le bouton de fermeture
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

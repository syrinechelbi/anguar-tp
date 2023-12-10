import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './plateforme-recrutement/cv/cv.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { SimulateurComponent } from './simulateur/simulateur.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { ParentComponent } from './parent/parent.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { AuthenticationFormComponent } from './authentication-form/authentication-form.component';
import { ImageStreamComponent } from './image-stream/image-stream.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'cv', component: CvComponent },
  { path: 'form', component: AuthenticationFormComponent },
  { path: 'carte-visite', component: CarteVisiteComponent },
  { path: 'simulateur', component: SimulateurComponent },
  { path: 'mini-word', component: MiniWordComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'first', component: FirstComponentComponent },
  { path: 'image', component: ImageStreamComponent },
  { path: 'details/:id', component: DetailsComponent },

  { path: '', redirectTo: '/cv', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

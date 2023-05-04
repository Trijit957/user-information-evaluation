import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserInformationComponent } from './components/user-information/user-information.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-information',
    pathMatch: 'full'
  },
  {
    path: 'user-information',
    component: UserInformationComponent
  },
  {
    path: 'about-us',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserLoggedinGuard} from './guards/user-loggedin.guard'

import {HomePageComponent} from './pages/home-page/home-page.component'
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {ContactDetailsPageComponent} from './pages/contact-details-page/contact-details-page.component';
import {ContactEditPageComponent} from './pages/contact-edit-page/contact-edit-page.component';
import {StatisticPageComponent} from './pages/statistic-page/statistic-page.component';
import {SignupComponent} from './pages/signup/signup.component';
// import { ContactPage } from './pages/contact-page/contact-page.component';


const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: HomePageComponent, canActivate: [UserLoggedinGuard] },
  { path: 'contact/edit/:id', component: ContactEditPageComponent, canActivate: [UserLoggedinGuard] },
  { path: 'contact/edit', component: ContactEditPageComponent, canActivate: [UserLoggedinGuard] },
  { path: 'contact/:id', component: ContactDetailsPageComponent, canActivate: [UserLoggedinGuard] },
  { path: 'contact', component: ContactPageComponent, canActivate: [UserLoggedinGuard] },
  { path: 'statistic', component: StatisticPageComponent, canActivate: [UserLoggedinGuard] },
  { path: 'signup', component: SignupComponent },
];

  // <Route path="/" exact component={HomePage} />
  // <Route path="/contact" exact component={ContactPage} />
  // <Route path="/contact/edit/:id?" component={ContactEditPage} />
  // <Route path="/contact/:id" component={ContactDetailsPage} />
  // <Route path="/statistic" component={StatisticPage} />
  // <Route path="/signup" component={SignupPage} />

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

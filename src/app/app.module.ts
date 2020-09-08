import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';

import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { SignupComponent } from './pages/signup/signup.component';

import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { InputComponent } from './components/input/input.component';
import { ChartComponent } from './components/chart/chart.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactSearchComponent } from './components/contact-search/contact-search.component';
import { MovePreviewComponent } from './components/move-preview/move-preview.component';
import { MoveListComponent } from './components/move-list/move-list.component';
import { TransferFundComponent } from './components/transfer-fund/transfer-fund.component';
import { ChartMoveComponent } from './components/chart-move/chart-move.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,

    HomePageComponent,
    ContactPageComponent,
    ContactEditPageComponent,
    ContactDetailsPageComponent,
    StatisticPageComponent,
    SignupComponent,

    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    InputComponent,
    ChartComponent,
    NavBarComponent,
    ContactSearchComponent,
    MovePreviewComponent,
    MoveListComponent,
    TransferFundComponent,
    ChartMoveComponent,
    
  ],
  // imports: [BrowserModule, AppRoutingModule, FormsModule],
  imports: [BrowserModule, AppRoutingModule, FormsModule, GoogleChartsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

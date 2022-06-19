import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { TranslateService } from './Services/translate.service';
import { TranslatePipe } from './Pipes/translate.pipe';
import { HeaderComponent } from './Components/shared/header/header.component';

import { AddBookingComponent } from './Components/add-booking/add-booking.component';
import { AngularMaterialModule } from './Shared/angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';

// Fx para traducir los textos de los componentes
export function translateFactory(provider: TranslateService){
 return () => provider.getData();
}

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    HeaderComponent,
    AddBookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    NgbModule,
    BrowserAnimationsModule,
    CalendarModule
  ],
  providers: [
    // Provider para traducir los textos de los componentes
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

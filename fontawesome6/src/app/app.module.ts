import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { MoneyComponent } from './money/money.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

// Add an icon to the library for convenient access in other components
library.add(faCalendar);

library.add(fas, far);
// Add an icon to the library for convenient access in other components
library.add(faCoffee);



@NgModule({
  declarations: [
    AppComponent,
    MoneyComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

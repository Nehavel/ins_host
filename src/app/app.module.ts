import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { BoatComponent } from './boat/boat.component';
import { HeadContentComponent } from './head-content/head-content.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { MoveComponent } from './move/move.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BoatComponent,
    HeadContentComponent,
    HelpComponent,
    ContactComponent,
    MoveComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

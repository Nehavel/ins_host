import { Route } from "@angular/router";
import { AppComponent } from "../app/app.component";
import {ContactFormComponent} from "../app/contact-form/contact-form.component";
import {HomeComponent} from "../app/home/home.component";
import {AboutComponent} from "../app/about/about.component";
import { RightComponent } from "../app/right/right.component";
import { LeftComponent } from "./left/left.component";
export const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'contactform',
        component: ContactFormComponent
    },
    {
        path: 'About',
        component: AboutComponent
    },
    {
        path: 'right',
        component: RightComponent
    },
    {
        path: 'left',
        component: LeftComponent
    }
   
];
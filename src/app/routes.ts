import { Route } from "@angular/router";
import { AppComponent } from "../app/app.component";
import {ContactFormComponent} from "../app/contact-form/contact-form.component";
export const routes: Route[] = [
   
    {
        path: 'contactform',
        component: ContactFormComponent
    },
    {
        path: '',
        component: AppComponent
    }
]
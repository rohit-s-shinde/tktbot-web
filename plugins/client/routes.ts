import { Routes } from '@angular/router';

import { LibraryComponent } from './library/library.component';
import { DepartmentComponent } from './department/department.component';
import { EventComponent } from './event/event.component';
import { AdmissionComponent } from './admission/admission.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { CollegeComponent } from './college/college.component';


export const routes: Routes = [
    {
        path: 'library',
        component: LibraryComponent
    },
    {
        path: 'department',
        component: DepartmentComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'event',
        component: EventComponent
    },
    {
        path: 'admission',
        component: AdmissionComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'registration',
        component: RegistrationComponent
    },
    {
        path: 'college',
        component: CollegeComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
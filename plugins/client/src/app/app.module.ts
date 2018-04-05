import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { DepartmentComponent } from './department/department.component';
import { EventComponent } from './event/event.component';
import { AdmissionComponent } from './admission/admission.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CollegeComponent } from './college/college.component';


@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    DepartmentComponent,
    EventComponent,
    AdmissionComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent,
    HeaderComponent,
    RegistrationComponent,
    SidebarComponent,
    CollegeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

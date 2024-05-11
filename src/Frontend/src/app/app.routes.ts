import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostViewComponent } from './post-view/post-view.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ProfileComponent } from './profile/profile.component';
import { MakePostComponent } from './make-post/make-post.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SurveyComponent } from './survey/survey.component';
import { SearchComponent } from './search/search.component';
import { AdminViewComponent } from './admin-view/admin-view.component';


import { ProfesionalComponent } from './bokings-folder/profesional/profesional.component';
import { TimeComponent } from './bokings-folder/time/time.component';
import { ServicesComponent } from './bokings-folder/services/services.component';
import { AdmonTimeComponent } from './bokings-folder/admon-time/admon-time.component';
import { CalendarComponent } from './bokings-folder/calendar/calendar.component';
import { ConfirmComponent } from './bokings-folder/confirm/confirm.component';
import { StatusComponent } from './status/status.component';

export const routes: Routes = [
    {path: '', redirectTo: '/Login', pathMatch:'full'},
    {path: 'Home', 'title': 'Home' , component: HomeComponent},
    {path: 'Postview/:id', 'title': 'Postview' , component: PostViewComponent},
    {path: 'Forget-password', 'title': 'Forget-password' , component: ForgetPasswordComponent},
    {path: 'Recovery/:id/:code', 'title': 'Recovery' , component: RecoveryPasswordComponent},
    {path: 'Login', 'title': 'Login' , component: LoginRegisterComponent},
    {path: 'Profile/:id', 'title': 'Profile' , component: ProfileComponent},
    {path: 'makePost/:id', 'title': 'makePost' , component: MakePostComponent},
    {path: 'editProfile/:id', 'title': 'editProfile' , component: EditProfileComponent},
    {path: 'survey/:id', 'title': 'survey' , component: SurveyComponent},
    {path: 'search', 'title': 'search' , component: SearchComponent},
    {path: 'admon/:id', 'title': 'admon' , component: AdminViewComponent},
    
    {path: 'Profesional', 'title': 'Profesional' , component: ProfesionalComponent },
    {path: 'Time', 'title': 'Time' , component: TimeComponent },
    {path: 'Services', 'title': 'Services' , component: ServicesComponent },
    {path: 'AdmonTime', 'title': 'AdmonTime' , component: AdmonTimeComponent },
    {path: 'calendar', 'title': 'calendar' , component: CalendarComponent },
    {path: 'confirm', 'title': 'confirm' , component: ConfirmComponent },

    {path: 'status', 'title': 'status' , component: StatusComponent },
];

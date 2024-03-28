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

export const routes: Routes = [
    {path: 'Home', component: HomeComponent},
    {path: 'Postview/:id', component: PostViewComponent},
    {path: 'Forget-password', component: ForgetPasswordComponent},
    {path: 'Recovery/:id/:code', component: RecoveryPasswordComponent},
    {path: 'Login', component: LoginRegisterComponent},
    {path: 'Profile/:id', component: ProfileComponent},
    {path: 'makePost/:id', component: MakePostComponent},
    {path: 'editProfile/:id', component: EditProfileComponent},
    {path: 'survey', component: SurveyComponent},
    {path: 'search', component: SearchComponent},
    {path: 'admon/:id', component: AdminViewComponent}
];

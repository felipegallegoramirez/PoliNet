import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostViewComponent } from './post-view/post-view.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ProfileComponent } from './profile/profile.component';
import { MakePostComponent } from './make-post/make-post.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

export const routes: Routes = [
    {path: 'Home', component: HomeComponent},
    {path: 'Postview', component: PostViewComponent},
    {path: 'Forget-password', component: ForgetPasswordComponent},
    {path: 'Recovery', component: RecoveryPasswordComponent},
    {path: 'Login', component: LoginRegisterComponent},
    {path: 'Profile', component: ProfileComponent},
    {path: 'makePost', component: MakePostComponent},
    {path: 'editProfile', component: EditProfileComponent},
];

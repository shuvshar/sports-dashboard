import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthleteListComponent } from './athlete-list/athlete-list.component';
import { LoginComponent } from './login/login.component';
import { MedalTallyComponent } from './medal-tally/medal-tally.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: LoginComponent
  },
  { path: 'medals', component: AthleteListComponent, },
  {
    path: 'register', component: RegisterUserComponent, children: [
      { path: 'reactive', component: ReactiveFormComponent },
      { path: 'template', component: TemplateFormComponent },
    ]
  },
  {
    path: 'teams', component: MedalTallyComponent,
    loadChildren: () => import('./teams-data/teams-data.module').then(mod => mod.TeamsDataModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

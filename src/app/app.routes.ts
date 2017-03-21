import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent ,UnAuthorizeComponent} from './no-content';

import { DataResolver } from './app.resolver';
import { LoggedInGuard ,AdminGuard} from './shared/index';
import { LoginComponent } from './login/index';
import {TodolistComponent} from './todolist/index';
import {ProjectListComponent,ProjectDetailsComponent} from './project/index';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent, canActivate: [LoggedInGuard] },
  { path: 'login', component: LoginComponent },
    { path: 'projects', component: ProjectListComponent ,canLoad: [LoggedInGuard] },
  {path:'projects/:id',component:ProjectDetailsComponent,canLoad: [LoggedInGuard] },
   { path: 'todolist', component: TodolistComponent ,canLoad: [LoggedInGuard] },
  // { path: 'projects', loadChildren: './project/project.module#ProjectModule?', canLoad: [LoggedInGuard] },
  // { path: 'todolist', loadChildren: './todolist/todolist.module#TodolistModule', canLoad: [AdminGuard] },

  { path: '401', component: UnAuthorizeComponent },
  { path: '**', component: NoContentComponent },
];

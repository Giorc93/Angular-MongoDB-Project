import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IndexComponent} from './components/index/index.component';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {CreateProjectComponent} from './components/create-project/create-project.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {ContactComponent} from './components/contact/contact.component';
import {ErrorComponent} from './components/error/error.component';
import {DetailComponent} from './components/detail/detail.component';
import {EditComponent} from './components/edit/edit.component' ;
 
const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'create', component:CreateProjectComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'about', component:AboutMeComponent},
  {path: 'project/:id', component:DetailComponent},
  {path: 'edit/:id', component:EditComponent},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

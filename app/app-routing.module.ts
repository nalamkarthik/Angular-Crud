import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmpComponent } from './emp/emp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';



const routes: Routes = [
  {path:'',   component: HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'emp', component: EmpComponent},
  {path:'forms', component: FormsComponent},
  {path:'**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const myRoutings =[
HomeComponent,
EmpComponent,
PageNotFoundComponent,

]


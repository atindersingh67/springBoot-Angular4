import { SclassComponent } from './sclass/sclass.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';


const routes: Routes = [
 { path: '', component: StudentsComponent },
  { path: 'student', component: StudentsComponent },
  { path: 'teacher', component: TeachersComponent },
  { path: 'class', component: SclassComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
  
export class AppRoutingModule {
  
  
}

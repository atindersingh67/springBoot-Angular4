import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { JasperoConfirmationsModule } from '@jaspero/ng2-confirmations';


import { AppComponent } from './app.component';
import { StudentService } from './students/student.service';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AppRoutingModule } from './/app-routing.module';
import { TeacherService } from './teachers/teacher.service';
import { SclassComponent } from './sclass/sclass.component';
import { SclassService } from './sclass/sclass.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    TeachersComponent,
    SclassComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
     HttpClientModule,
     AppRoutingModule,
     MultiselectDropdownModule,
     JasperoConfirmationsModule,
     BrowserAnimationsModule
  ],
  providers: [StudentService,TeacherService,SclassService],
  bootstrap: [AppComponent]
})
export class AppModule { }

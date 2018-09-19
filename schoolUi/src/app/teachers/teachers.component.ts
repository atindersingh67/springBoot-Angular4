import {Component, OnInit} from '@angular/core';

import {Teacher} from './teacher';
import {TeacherService} from './teacher.service';

import { ConfirmationService } from '@jaspero/ng2-confirmations';
import { ResolveEmit } from '../confirm-box/resolve-emit'
import { ConfirmSettings } from '../confirm-box/confirm-settings'
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {


  teachers: Teacher[];
  teacher: Teacher = {
    id:null,
    name: '',
    age: null,
    sex: ''
  };
  initData(){
    this.teacher=new Teacher;
    this.teacher.id=null;
    this.teacher.name= '';
    this.teacher.age= null;
    this.teacher.sex= '';
  }
  settings: ConfirmSettings | any = {
    overlay: true,
    overlayClickToClose: true,
    showCloseButton: true,
    confirmText: 'Yes',
    declineText: 'No'
  };
  constructor(private teacherService: TeacherService,private _confirmation: ConfirmationService) {}
  getTeachers(): void {
    this.teacherService.getTeachers()
      .subscribe(Teachers => this.teachers = Teachers);
  }

  saveTeachers(): void {
    if(this.teacher.id){
      this.teacherService.saveTeachers(this.teacher).subscribe(re => {
        this.initData();
         this.getTeachers();
       });
    }else{
      this.teacherService.updateTeacher(this.teacher).subscribe(re => {
        this.initData();
         this.getTeachers();
       });
    } 
  }

 deleteTeacher(st){
  this._confirmation.create('Delete ', 'Are you sure you want to delete teacher, '+st.name, this.settings)
        .subscribe((ans: ResolveEmit) => {
          if (ans.resolved == true) {
            this.teacherService.deleteTeacher(st.id).subscribe(re => {
              this.initData();
               this.getTeachers();
             });
            
             
          } else {
            
          }
        });
 }
  editTeacher(st){
      this.teacher=st;
  }
  ngOnInit() {
    this.getTeachers();
  }
  



}

import {Sclass} from '../sclass/sclass';
import {SclassComponent} from '../sclass/sclass.component';
import {SclassService} from '../sclass/sclass.service';
import {Component, OnInit} from '@angular/core';

import {Student} from './student';
import {StudentService} from './student.service';

import { ConfirmationService } from '@jaspero/ng2-confirmations';
import { ResolveEmit } from '../confirm-box/resolve-emit'
import { ConfirmSettings } from '../confirm-box/confirm-settings'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  sclasses: Sclass[];
  students: Student[];

  student: Student = {
    id: null,
    name: '',
    age: null,
    sex: '',
    schoolClass: new Sclass(0)
  };

  settings: ConfirmSettings | any = {
    overlay: true,
    overlayClickToClose: true,
    showCloseButton: true,
    confirmText: 'Yes',
    declineText: 'No'
  };
  initData():void{
    this.student = new Student;
    this.student .name="";
    this.student .age=null;
    this.student .sex="";
    this.student .schoolClass=new Sclass(0)
    this.student.id = null;
    

  }
  
  constructor(private studentService: StudentService, private SclassService: SclassService,private _confirmation: ConfirmationService) {}
  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  saveStudents(): void {
    if(this.student.id){
      this.studentService.saveStudents(this.student).subscribe(re => {
        this.initData();
         this.getStudents();
        });
    }else{
      this.studentService.updateStudent(this.student).subscribe(re => {
        this.initData();
         this.getStudents();
        });
    }
  

    
  }
  getSclasses(): void {
    this.SclassService.getSclasses()
      .subscribe(Sclasses => this.sclasses = Sclasses);
  }

  editStudent(st):void{
    this.student.id=st.id;
    this.student .name=st.name;
    this.student .age=st.age;
    this.student .sex=st.sex;
    if(st.schoolClass==null){
      this.student .schoolClass=new Sclass(0)
     
    }else{
      this.student .schoolClass=st.schoolClass
    }
   
  }

  deleteStudent(st){
    this._confirmation.create('Delete ', 'Are you sure you want to delete Student, '+st.name, this.settings)
    .subscribe((ans: ResolveEmit) => {
      if (ans.resolved == true) {
        this.studentService.deleteStudent(st.id).subscribe(re => {
          this.initData();
           this.getStudents();
         });
        
         
      } else {
        
      }
    });
  }
  ngOnInit() {
    this.getStudents();
    this.getSclasses();
  }

}

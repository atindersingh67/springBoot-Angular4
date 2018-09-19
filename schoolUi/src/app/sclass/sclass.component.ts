import { Component, OnInit } from '@angular/core';
import { Sclass } from './sclass';
import { SclassService } from './sclass.service';


@Component({
  selector: 'app-sclass',
  templateUrl: './sclass.component.html',
  styleUrls: ['./sclass.component.css']
})
export class SclassComponent implements OnInit {

  sclasses: Sclass[];
  sclass: Sclass = {
    name: '',
    id:null
  };
  constructor(private SclassService: SclassService) {}
  getSclasses(): void {
    this.SclassService.getSclasses()
      .subscribe(Sclasses => this.sclasses = Sclasses);
  }

  saveSclasses(): void {
    this.SclassService.saveSclasses(this.sclass).subscribe (re => {
     this.getSclasses();
     });
  }


  ngOnInit() {
    this.getSclasses();
  }

}

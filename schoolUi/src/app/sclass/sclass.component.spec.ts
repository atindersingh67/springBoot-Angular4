import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SclassComponent } from './sclass.component';

describe('SclassComponent', () => {
  let component: SclassComponent;
  let fixture: ComponentFixture<SclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

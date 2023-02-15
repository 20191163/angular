import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewusuComponent } from './newusu.component';

describe('NewusuComponent', () => {
  let component: NewusuComponent;
  let fixture: ComponentFixture<NewusuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewusuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewusuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

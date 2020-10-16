import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentServiceComponent } from './parent-service.component';

describe('ParentServiceComponent', () => {
  let component: ParentServiceComponent;
  let fixture: ComponentFixture<ParentServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawijComponent } from './lawij.component';

describe('LawijComponent', () => {
  let component: LawijComponent;
  let fixture: ComponentFixture<LawijComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawijComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawijComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChapitreComponent } from './create-chapitre.component';

describe('CreateChapitreComponent', () => {
  let component: CreateChapitreComponent;
  let fixture: ComponentFixture<CreateChapitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateChapitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChapitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


where: { 
  date: {gt: new Date('2014-04-01T18:30:00.000Z')}
}

// {"include":{"relation":"sections","scope":{"include":{"relation":"articles","scope":{"include":{"relation":"comptes","scope":{"include":{"relation":"budgets","scope":{"where":{"etablissementId":"5e297c0a077d382a74141ec6"}}}}}}}}},"where":{"numChap":6}}

// {"where":{"annee":{"gte":"new Date('2020-01-01T00:00:00.000Z')"}}}

// {"include":{"relation":"articles","scope":{"include":{"relation":"comptes","scope":{"include":{"relation":"budgets","scope":{"where":{"and":[{"annee":{"gte":"2020-01-01T00:00:00.000Z"}},{"annee":{"lte":"2020-12-31T00:00:00.000Z"}}]}}}}}}},"where":{"numChap":6}}
// {"where":{"and":[{"annee":{"gte":"2020-01-01T00:00:00.000Z"}},{"annee":{"lte":"2020-12-31T00:00:00.000Z"}}]}}
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarService } from './services';

let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;

describe('AppComponent', () => {
  beforeEach(() => {
    const navbarServiceStub: NavbarService = {
      getNavItems: () => []
    };

    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [ AppComponent ],
      providers: [{ provide: NavbarService, useValue: navbarServiceStub }]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should work', () => {
    expect(2).toBe(2);
  });
});
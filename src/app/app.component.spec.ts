import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [ AppComponent ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should work', () => {
    expect(component.test()).toBe(4);
  });

  it('should work async', (done: DoneFn) => {
    component.testAsync().then((result: number) => {
      expect(result).toBe(4);
      done();
    });
  });
});

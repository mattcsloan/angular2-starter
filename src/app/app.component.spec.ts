import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';

let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent,
        MockDevToolsComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should work', () => {
    expect(component.test()).toBe(4);
  });
});

@Component({
  selector: 'my-dev-tools',
  template: ''
})
class MockDevToolsComponent { }

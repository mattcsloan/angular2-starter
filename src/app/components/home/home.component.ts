import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { INCREMENT, DECREMENT, RESET } from '../../reducers/counter';

interface AppState {
  counter: number;
}

@Component({
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent {
  public counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = store.select<number>('counter');
  }

  public increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  public decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  public reset() {
    this.store.dispatch({ type: RESET });
  }
}

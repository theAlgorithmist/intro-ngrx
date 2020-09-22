/**
 * Copyright 2020 Jim Armstrong (www.algorithmist.net)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Display the result quaternion
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { Component } from '@angular/core';

import {
  Store,
  select
} from '@ngrx/store';

import { CalcState } from '../../calculator-state';

// RxJS
import { Observable } from 'rxjs';

import {
  getResultW,
  getResultI,
  getResultJ,
  getResultK
} from '../../../features/quaternion-calculator/calculator.reducer';

@Component({
  selector: 'app-result',

  templateUrl: './result.component.html',

  styleUrls: ['./result.component.scss']
})
export class ResultComponent
{
  // Observables of quaternion values that are directly reflected in the template
  public w$: Observable<number>;
  public i$: Observable<number>;
  public j$: Observable<number>;
  public k$: Observable<number>;

  constructor(protected _store: Store<CalcState>)
  {
    this.w$ = this._store.pipe( select(getResultW) );
    this.i$ = this._store.pipe( select(getResultI) );
    this.j$ = this._store.pipe( select(getResultJ) );
    this.k$ = this._store.pipe( select(getResultK) );
  }
}

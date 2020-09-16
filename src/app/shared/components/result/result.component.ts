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
import { Component
       , OnInit
       , OnDestroy
} from '@angular/core';

import {
  Store,
  select
} from '@ngrx/store';

import { QCalc } from '../../../shared/definitions/QCalc';
import { Q     } from '../../../shared/definitions/Q';

import { CalcState } from '../../calculator-state';

import { getCalculator } from '../../../features/quaternion-calculator/calculator.reducer';

// RxJS
import { Subject   } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-result',

  templateUrl: './result.component.html',

  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy
{
  // quaternion values
  public w = 0;             // real component
  public i = 0;             // i-component
  public j = 0;             // j-component
  public k = 0;             // k-component

  protected _calc$: Subject<boolean>;

  constructor(protected _store: Store<CalcState>)
  {
    // This is not very DRY; as an exercise, resolve the commonality between Quaternion and Result components; they differ
    // only in template and how Calculator updates are handled
    this._calc$  = new Subject<boolean>();

    this._store.pipe(takeUntil(this._calc$), select(getCalculator))
      .subscribe( calc => this.__onCalcChanged(calc) );
  }

  /**
   * Angular lifecycle method - on init
   */
  public ngOnInit(): void
  {
    // reserved for future use
  }

  /**
   * Angular lifecycle method - on destroy
   */
  public ngOnDestroy(): void
  {
    this._calc$.next(true);
    this._calc$.complete();
  }

  // execute whenever calculator part of store changes
  protected __onCalcChanged(input: QCalc): void
  {
    if (input?.result)
    {
      const q: Q = input.result;

      [this.w, this.i, this.j, this.k] = [q.w, q.i, q.j, q.k];
    }
  }
}

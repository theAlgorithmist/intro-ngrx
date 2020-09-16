/**
 * Copyright 2020 Jim Armstrong (www.algorithmist.net)
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A single quaternion that may be used interactively or for display only
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { Component
       , OnDestroy
       , Input
       , Output
       , EventEmitter
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

// utils
import { validateNumber } from '../../validators/number-validator';

@Component({
  selector: 'app-quaternion',

  templateUrl: './quaternion.component.html',

  styleUrls: ['./quaternion.component.scss']
})
export class QuaternionComponent implements OnDestroy
{
  /**
   * Set to {true} if input field is disabled
   */
  @Input()
  public inputDisabled = false;

  /**
   * ID for this quaternion which should be 'q1' or 'q2' for the calculator
   */
  @Input()
  public id = '';

  /**
   * quaternion values change due to user input
   */
  @Output('qChanged')
  protected _change: EventEmitter<Q> = new EventEmitter<Q>();

  // quaternion values
  public w = 0;        // real component
  public i = 0;        // i-component
  public j = 0;        // j-component
  public k = 0;        // k-component

  protected _calc$: Subject<boolean>;

  constructor(protected _store: Store<CalcState>)
  {
    this.inputDisabled = false;

    this._change = new EventEmitter<Q>();

    this._calc$  = new Subject<boolean>();

    this._store.pipe(
      select(getCalculator),
      takeUntil(this._calc$)
    )
    .subscribe( calc => this.__onCalcChanged(calc));
  }

  public ngOnDestroy(): void
  {
    this._calc$.next(true);
    this._calc$.complete();
  }

  /**
   * A quaternion value has changed (emits 'qChanged' event); NOTE:  MUST tab after input to register the change
   */
  public onChanged(): void
  {
    this._change.emit( new Q(this.w, this.i, this.j, this.k, this.id) );
  }

  /** @internal */
  public __checkNumber(evt: any): boolean
  {
    return validateNumber(evt);
  }

  /**
   * Respond to changes in calculator slice of global store
   *
   * @param input Current calculator slice of the global store
   * @private
   */
  protected __onCalcChanged(input: QCalc): void
  {
    if (input)
    {
      const q: Q = this.id === 'q1' ? input.q1 : input.q2;

      [this.w, this.i, this.j, this.k] = [q.w, q.i, q.j, q.k];
    }
  }
}

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
 * Manage quaternion calculator display and interaction
 *
 * @author Jim Armstrong
 *
 * @version 1.0
 */
import {
  Component,
  OnDestroy
} from '@angular/core';

import {
  select,
  Store
} from '@ngrx/store';

import { CalcState } from '../../../shared/calculator-state';

import { Q } from '../../../shared/definitions/Q';

import { QCalc } from '../../../shared/definitions/QCalc';

// RxJS
import { Subject   } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  CALCULATOR_OPERATIONS,
  prettyFormat
} from '../../../shared/definitions/calculator-operations';

import * as CalcActions from '../calculator.actions';
import {getCalculator} from '../calculator.reducer';

@Component({
  selector: 'app-calculator',

  templateUrl: './calculator.component.html',

  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnDestroy
{
  public inputDisabled: boolean;

  protected _op = CALCULATOR_OPERATIONS.NONE;                         // current operation

  protected _qCalc: QCalc;                                            // internal copy of calculator state

  protected _calc$: Subject<boolean>;

  constructor(protected _store: Store<CalcState>)
  {
    this.inputDisabled = false;

    this._qCalc = new QCalc();

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
   * Access the current operation, i.e., indication of add/subtract/multiply/divide
   */
  public get operation(): string
  {
    return prettyFormat(this._op);
  }

  /**
   * User clicks on 'add' operation in the calculator
   */
  public onAdd(): void
  {
    this._op = CALCULATOR_OPERATIONS.ADD;

    this._store.dispatch( CalcActions.Q_ADD({q1: this._qCalc.q1, q2: this._qCalc.q2}) );
  }

  /**
   * User clicks on 'subtract' operation in the calculator
   */
  public onSubtract(): void
  {
    this._op = CALCULATOR_OPERATIONS.SUBTRACT;

    this._store.dispatch( CalcActions.Q_SUBTRACT({q1: this._qCalc.q1, q2: this._qCalc.q2}) );
  }

  /**
   * User clicks on 'multiply' operation in the calculator
   */
  public onMultiply(): void
  {
    this._op = CALCULATOR_OPERATIONS.MULTIPLY;

    this._store.dispatch( CalcActions.Q_MULTIPLY({q1: this._qCalc.q1, q2: this._qCalc.q2}) );
  }

  /**
   * User clicks on 'divide' operation in the calculator
   */
  public onDivide(): void
  {
    this._op = CALCULATOR_OPERATIONS.DIVIDE;

    this._store.dispatch( CalcActions.Q_DIVIDE({q1: this._qCalc.q1, q2: this._qCalc.q2}) );
  }

  /**
   * User clicks on one of the 'to memory' buttons to place either Q1 or Q2 into memory
   *
   * @param id Quaternion id, either 'Q1' or 'Q2'
   */
  public onToMemory(id: string): void
  {
    const q: Q = id === 'Q_1' ? this._qCalc.q1 : this._qCalc.q2;

    this._store.dispatch( CalcActions.TO_MEMORY({q: q.clone(), id}) );
  }

  /**
   * User clicks on one of the 'from memory' buttons to return a quaternion from memory (quaternion id is passed)
   *
   * @param id Quaternion id, either 'Q1' or 'Q2'
   */
  public onFromMemory(id: string): void
  {
    this._store.dispatch( CalcActions.FROM_MEMORY({id}) );
  }

  /**
   * User clicks on 'clear' button in calculator
   */
  public onClear(): void
  {
    this._store.dispatch( CalcActions.Q_CLEAR() );
  }

  /**
   * One of the calculator input quaternions (q1 or q2) has changed
   */
  public onQuaternionChanged(q: Q): void
  {
    switch (q.id)
    {
      case 'q1':
        this._qCalc.q1 = q.clone();
        this._store.dispatch(CalcActions.Q_UPDATE({id: 'q1', q}));
        break;

      case 'q2':
        this._qCalc.q2 = q.clone();
        this._store.dispatch(CalcActions.Q_UPDATE({id: 'q2', q}));
        break;
    }
  }

  /**
   * Respond to calculator updates from the global store
   *
   * @param calc Current calculator slice of store
   * @private
   */
  protected __onCalcChanged(calc: QCalc): void
  {
    if (calc) {
      this._qCalc = calc.clone();
    }
  }
}

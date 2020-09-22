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
 * Calculator (non-memory) reducer; handles basic operations
 *
 * @author Jim Armstrong
 *
 * @version 1.0
 */
import {
  createReducer,
  on,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as CalculatorActions from './calculator.actions';

import { QCalc         } from '../../shared/definitions/QCalc';
import { QCalculations } from '../../shared/libs/QCalculations';
import { Q             } from '../../shared/definitions/Q';
import { CalcState     } from '../../shared/calculator-state';

const initialCalcState: {calc: QCalc} = {
  calc: new QCalc()
};

function calcFatory(calculator: QCalc, q1: Q, q2: Q, result: Q): QCalc
{
  const newCalculator: QCalc = new QCalc();

  newCalculator.q1     = q1.clone();
  newCalculator.q2     = q2.clone();
  newCalculator.result = result.clone();
  newCalculator.op     = calculator.op;
  newCalculator.memory = calculator.memory ? calculator.memory : null;

  return newCalculator;
}

// Feature key
export const calculatorFeatureKey = 'calc';

// Selectors
export const getCalcState = createFeatureSelector<CalcState>(calculatorFeatureKey);

export const getCalculator = createSelector(
  getCalcState,
  (state: CalcState) => state ? state.calc : null
);

// Select result quaternion values - combine these as an exercise
export const getResultW = createSelector(
  getCalcState,
  (state: CalcState) => state ? (state.calc.result ? state.calc.result.w : null) : null
);

export const getResultI = createSelector(
  getCalcState,
  (state: CalcState) => state ? (state.calc.result ? state.calc.result.i : null) : null
);

export const getResultJ = createSelector(
  getCalcState,
  (state: CalcState) => state ? (state.calc.result ? state.calc.result.j : null) : null
);

export const getResultK = createSelector(
  getCalcState,
  (state: CalcState) => state ? (state.calc.result ? state.calc.result.k : null) : null
);

// Calculator Reducers
const onUpdate = on (CalculatorActions.Q_UPDATE, (state, {id, q}) => {
  const calculator: CalcState = state as CalcState;

  const newCalculator: QCalc = calculator.calc.clone();

  if (id === 'q1')
  {
    // update first quaternion
    newCalculator.q1 = q.clone();
  }
  else
  {
    // update second quaternion
    newCalculator.q2 = q.clone();
  }

  return { ...calculator.user, calc: newCalculator };
});

const onAdd = on (CalculatorActions.Q_ADD, (state, {q1, q2}) => {
  const calculator: CalcState = state as CalcState;

  const q: Q = QCalculations.add(q1, q2);

  return { ...calculator.user, calc: calcFatory(calculator.calc, q1, q2, q) };
});

const onSubtract = on (CalculatorActions.Q_SUBTRACT, (state, {q1, q2}) => {
  const calculator: CalcState = state as CalcState;

  const q: Q = QCalculations.subtract(q1, q2);

  return { ...calculator.user, calc: calcFatory(calculator.calc, q1, q2, q) };
});

const onMultiply = on (CalculatorActions.Q_MULTIPLY, (state, {q1, q2}) => {
  const calculator: CalcState = state as CalcState;

  const q: Q = QCalculations.multiply(q1, q2);

  return { ...calculator.user, calc: calcFatory(calculator.calc, q1, q2, q) };
});

const onDivide = on (CalculatorActions.Q_DIVIDE, (state, {q1, q2}) => {
  const calculator: CalcState = state as CalcState;

  const q: Q = QCalculations.divide(q1, q2);

  return { ...calculator.user, calc: calcFatory(calculator.calc, q1, q2, q) };
});

const onToMemory = on (CalculatorActions.TO_MEMORY, (state, {q}) => {
  const calculator: CalcState = state as CalcState;

  const newCalculator  = calculator.calc.clone();
  newCalculator.memory = q.clone();

  return { ...calculator.user, calc: newCalculator };
});

const onFromMemory = on (CalculatorActions.FROM_MEMORY, (state, {id}) => {
  const calculator: CalcState = state as CalcState;

  const newCalculator  = calculator.calc.clone();

  switch (id)
  {
    case 'Q_1':
      newCalculator.q1 = newCalculator.memory != null ? newCalculator.memory.clone() : null;
      break;

    case 'Q_2':
      newCalculator.q2 = newCalculator.memory != null ? newCalculator.memory.clone() : null;
      break;

    default:
      // no action taken at this time as index is invalid; perhaps throw an error
  }

  return { ...calculator.user, calc: newCalculator };
});

const onClear = on (CalculatorActions.Q_CLEAR, (state) => {
  const calculator: CalcState = state as CalcState;

  return { ...calculator.user, calc: new QCalc() };
});

export const calculatorReducer = createReducer(
  initialCalcState,
  onUpdate,
  onAdd,
  onSubtract,
  onMultiply,
  onDivide,
  onToMemory,
  onFromMemory,
  onClear
);



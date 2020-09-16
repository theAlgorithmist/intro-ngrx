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
 * Basic Actions for the Quaternion Calculator
 *
 * @author Jim Armstrong
 *
 * @version 1.0
 */
import {
  createAction,
  props
} from '@ngrx/store';


import { Q } from '../../shared/definitions/Q';

// Actions
export const Q_UPDATE = createAction(
  '[Calc] Update',
  props<{id: string, q: Q}>()
);

export const Q_ADD = createAction(
  '[Calc] Add',
  props<{q1: Q, q2: Q}>()
);

export const Q_SUBTRACT = createAction(
  '[Calc] Subtract',
  props<{q1: Q, q2: Q}>()
);

export const Q_MULTIPLY = createAction(
  '[Calc] Multiply',
  props<{q1: Q, q2: Q}>()
);

export const Q_DIVIDE = createAction(
  '[Calc] Divide',
  props<{q1: Q, q2: Q}>()
);

export const Q_CLEAR = createAction(
  '[Calc] Clear',
);

export const TO_MEMORY = createAction(
  '[Calc] To_Memory',
  props<{q: Q, id: string}>()
);

export const FROM_MEMORY = createAction(
  '[Calc] From_Memory',
  props<{id: string}>()
);

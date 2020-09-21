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
 * Test Actions for the Quaternion Calculator
 *
 * @author Jim Armstrong
 *
 * @version 1.0
 */

import {
  createAction,
  props
} from '@ngrx/store';

// Feature key
export const textFeatureKey = 'test';

export const Q_GET_TEST = createAction(
  '[Calc] Get Test'
);

export const Q_BEGIN_TEST = createAction(
  '[Calc] Begin Test',
  props<{startTime: Date}>()
);

export const Q_SCORE_TEST = createAction(
  '[Calc] Score Test',
  props<{results: Array<any>}>()
);

export const Q_SEND_TEST_RESULTS = createAction(
  '[Calc] Send Test Results',
  props<{endTime: Date}>()
);

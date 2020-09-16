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
 * Reducers for test slice of global store; currently minimal in part I
 *
 * @author Jim Armstrong
 *
 * @version 1.0
 */

import * as TestActions from './test.actions';

import {
  createReducer,
  on
} from '@ngrx/store';

const initialTestState: {test: Array<string>} = {
  test: new Array<string>()
};

// Feature key
export const testFeatureKey = 'test';

const onGetTest = on (TestActions.Q_GET_TEST, (state) => {
  // placeholder - currently does nothing
  return { state };
});

export const testReducer = createReducer(
  initialTestState,
  onGetTest
);

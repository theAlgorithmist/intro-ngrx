/**
 * Copyright 2020 Jim Armstrong
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
 * Login reducer (placeholder for Part I)
 *
 * @author Jim Armstrong
 *
 * @version 1.0
 */

import {
  createReducer,
  on
} from '@ngrx/store';

import * as LoginActions from './login.actions';

import { User } from '../../shared/definitions/user';

// authorized property to always true in Part I
const initialLoginState: User = {
  first: '',
  last: '',
  classID: '101',
  studentID: '007',
  authorized: true
};

// Feature key
export const userFeatureKey = 'user';

export const loginReducer = createReducer(
  initialLoginState,

  on( LoginActions.Q_AUTHENTICATE_USER, (state, {user}) => ({...state, user}) ),
);

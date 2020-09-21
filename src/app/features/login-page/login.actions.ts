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
 * Login Actions for the Quaternion Calculator application
 *
 * @author Jim Armstrong
 *
 * @version 1.0
 */

import {
  createAction,
  props
} from '@ngrx/store';

import { User } from '../../shared/definitions/user';


export const Q_AUTHENTICATE_USER = createAction(
  '[Calc] Authenticate User',
  props<{user: User}>()
);

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

import { MatInput } from '@angular/material/input';

/**
 * Check numerical input from a Material Input field
 *
 * @param evt User event
 *
 * @author Jim Armstrong
 *
 * @version 1.0
 */
export function validateNumber(evt: KeyboardEvent): boolean
{
  // this is to keep the compiler happy :)
  const target: any     = evt.target as unknown;
  const input: MatInput = target as MatInput;

  // Event target is most likely a MatInput, but could be a general input field
  const value: number = +input.value;

  if (isNaN(value) || value.toString() === '')
  {
    input.value = '';

    // do not allow the input
    evt.preventDefault();
    return false;
  }
  else
  {
    // value is okay
    return true;
  }
}

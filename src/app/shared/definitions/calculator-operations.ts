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
 * Enumeration of calculator operations
 *
 * @author Jim Armstrong
 *
 * @version 1.0
 */
export enum CALCULATOR_OPERATIONS
{
  NONE        = 'None',
  ADD         = 'add',
  SUBTRACT    = 'sub',
  MULTIPLY    = 'mul',
  DIVIDE      = 'div',
  TO_MEMORY   = 'toMem',
  FROM_MEMORY = 'fromMem',
}

/**
 * Format the calculator operation for UI display
 *
 * @param op Calculator operation
 */
export function prettyFormat(op: CALCULATOR_OPERATIONS): string
{
  switch (op)
  {
    case CALCULATOR_OPERATIONS.NONE:
      return '';

    case CALCULATOR_OPERATIONS.TO_MEMORY:
      return 'M+';

    case CALCULATOR_OPERATIONS.FROM_MEMORY:
      return 'M-';

    case CALCULATOR_OPERATIONS.ADD:
      return '+';

    case CALCULATOR_OPERATIONS.SUBTRACT:
      return '-';

    case CALCULATOR_OPERATIONS.MULTIPLY:
      return 'x';

    case CALCULATOR_OPERATIONS.DIVIDE:
      return '÷';
  }
}

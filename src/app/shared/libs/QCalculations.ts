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
 * This serves as a simple interface between 4-tuples representing raw Quaternion values and the Typescript Math
 * Toolkit class that performs operations on those Quaternions.
 *
 * A unit Quaternion is defined on initialization.
 *
 * @author Jim Armstrong
 *
 * @version 1.0
 */

import { TSMT$Quaternion } from './Quaternion';
import { Q              } from '../definitions/Q';

export class QCalculations
{
  protected static readonly Q1: TSMT$Quaternion = new TSMT$Quaternion();
  protected static readonly Q2: TSMT$Quaternion = new TSMT$Quaternion();

  constructor()
  {
    // empty
  }

  /**
   * Add two quaternions
   *
   * @param q1 4-tuple representing first input quaternion
   *
   * @param q2 4=tuple representing second input quaternion
   */
  public static add(q1: Q, q2: Q): Q
  {
    QCalculations.Q1.fromArray(q1.w, q1.i, q1.j, q1.k);
    QCalculations.Q2.fromArray(q2.w, q2.i, q2.j, q2.k);

    QCalculations.Q1.add(QCalculations.Q2);

    const values: Array<number> = QCalculations.Q1.toArray();

    return new Q(values[0], values[1], values[2], values[3]);
  }

  /**
   * Subtract two quaternions
   *
   * @param q1 4-tuple representing first input quaternion
   *
   * @param q2 4=tuple representing second input quaternion
   */
  public static subtract(q1: Q, q2: Q): Q
  {
    QCalculations.Q1.fromArray(q1.w, q1.i, q1.j, q1.k);
    QCalculations.Q2.fromArray(q2.w, q2.i, q2.j, q2.k);

    QCalculations.Q1.subtract(QCalculations.Q2);

    const values: Array<number> = QCalculations.Q1.toArray();

    return new Q(values[0], values[1], values[2], values[3]);
  }

  /**
   * Mutiply two quaternions
   *
   * @param q1 4-tuple representing first input quaternion
   *
   * @param q2 4=tuple representing second input quaternion
   */
  public static multiply(q1: Q, q2: Q): Q
  {
    QCalculations.Q1.fromArray(q1.w, q1.i, q1.j, q1.k);
    QCalculations.Q2.fromArray(q2.w, q2.i, q2.j, q2.k);

    QCalculations.Q1.multiply(QCalculations.Q2);

    const values: Array<number> = QCalculations.Q1.toArray();

    return new Q(values[0], values[1], values[2], values[3]);
  }

  /**
   * Divide two quaternions
   *
   * @param q1 4-tuple representing first input quaternion
   *
   * @param q2 4=tuple representing second input quaternion
   */
  public static divide(q1: Q, q2: Q): Q
  {
    QCalculations.Q1.fromArray(q1.w, q1.i, q1.j, q1.k);
    QCalculations.Q2.fromArray(q2.w, q2.i, q2.j, q2.k);

    QCalculations.Q1.divide(QCalculations.Q2);

    const values: Array<number> = QCalculations.Q1.toArray();

    return new Q(values[0], values[1], values[2], values[3]);
  }
}

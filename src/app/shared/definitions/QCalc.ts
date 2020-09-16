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
 * Model a section of the quaternion calculator store that pertains to all basic calculator actions
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { Q } from './Q';

export class QCalc
{
  public q1: Q;
  public q2: Q;
  public result: Q;
  public memory: Q | null;
  public op: string;

  constructor()
  {
    this.q1     = new Q(0, 0, 0, 0);
    this.q2     = new Q(0, 0, 0, 0);
    this.result = new Q(0, 0, 0, 0);
    this.memory = null;
    this.op     = 'none';
  }

  /**
   * Clone this container
   */
  public clone(): QCalc
  {
    const q: QCalc = new QCalc();

    q.q1     = this.q1.clone();
    q.q2     = this.q2.clone();
    q.result = this.result.clone();
    q.op     = this.op;
    q.memory = this.memory ? this.memory.clone() : null;

    return q;
  }
}

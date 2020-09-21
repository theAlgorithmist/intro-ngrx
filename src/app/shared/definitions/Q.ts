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
 * Manage quaternion data
 *
 * @author Jim Armstrong
 *
 * @version 1.0
 */
export class Q
{
  public id  = '';

  protected _w = 0;
  protected _i = 0;
  protected _j = 0;
  protected _k = 0;

  /**
   * Construct a new Q
   *
   * @param wValue Real part of the quaternion
   *
   * @param iValue i-component of the quaternion
   *
   * @param jValue j-component of the quaternion
   *
   * @param kValue k-component of the quaternion
   *
   * @param _id (optional) id associated with these values
   */
  constructor(wValue: number, iValue: number, jValue: number, kValue: number, _id?: string)
  {
    this.w = wValue;
    this.i = iValue;
    this.j = jValue;
    this.k = kValue;

    if (_id !== undefined && _id != null && _id !== '') {
      this.id = _id;
    }
  }

  /**
   * Access the w-value of the quaternion
   */
  public get w(): number
  {
    return this._w;
  }

  /**
   * Assign the w-value of the quaternion
   *
   * @param {number} value
   */
  public set w(value: number)
  {
    if (!isNaN(value) && isFinite(value)) {
      this._w = value;
    }
  }

  /**
   * Access the i-value of the quaternion
   */
  public get i(): number
  {
    return this._i;
  }

  /**
   * Assign the i-value of the quaternion
   *
   * @param {number} value
   */
  public set i(value: number)
  {
    if (!isNaN(value) && isFinite(value)) {
      this._i = value;
    }
  }

  /**
   * Access the j-value of the quaternion
   *
   * @param {number} value
   */
  public get j(): number
  {
    return this._j;
  }

  /**
   * Assign the k-value
   *
   * @param {number} value of the quaternion
   */
  public set j(value: number)
  {
    if (!isNaN(value) && isFinite(value)) {
      this._j = value;
    }
  }

  public get k(): number
  {
    return this._k;
  }

  /**
   * Assign the k-value
   *
   * @param {number} value
   */
  public set k(value: number)
  {
    if (!isNaN(value) && isFinite(value)) {
      this._k = value;
    }
  }

  /**
   * Clone this holder
   *
   * @returns {Q} Copy of current quaternion values holder
   */
  public clone(): Q
  {
    return new Q(this._w, this._i, this._j, this._k, this.id);
  }
}

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
 * Calculator feature module
 *
 * @author Jim Armstrong
 *
 * @version 1.0
 */

import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import * as fromCalculator from './calculator.reducer';

import { CalculatorComponent } from './calculator/calculator.component';
import { QuaternionComponent } from '../../shared/components/quaternion/quaternion.component';
import { MemoryComponent     } from '../../shared/components/memory/memory.component';
import { ResultComponent     } from '../../shared/components/result/result.component';

import { MatButtonModule    } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule     } from '@angular/material/input';
import { MatIconModule      } from '@angular/material/icon';

const MAT_IMPORTS: Array<any> = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
];

@NgModule({
  declarations: [
    CalculatorComponent,
    QuaternionComponent,
    MemoryComponent,
    ResultComponent,
  ],
  imports:
    [
      CommonModule,
      FormsModule,
      MAT_IMPORTS,
      StoreModule.forFeature(fromCalculator.calculatorFeatureKey, fromCalculator.calculatorReducer),
    ],
  exports: [
  ]
})
export class CalculatorModule {}

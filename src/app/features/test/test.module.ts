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
 * Feature module for 'test' part of quaternion application
 *
 * @author Jim Armstrong
 *
 * @version 1.0
 */
import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { StoreModule } from '@ngrx/store';

import * as fromTest from './test.reducer';

import { TestComponent } from './test.component';

import { AuthGuard } from '../../shared/guards/auth-guard';

const routes: Routes = [
  { path: '', component: TestComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    TestComponent
  ],
  imports:
    [
      CommonModule,
      StoreModule.forFeature(fromTest.testFeatureKey, fromTest.testReducer),
      RouterModule.forChild(routes)
    ],
  providers: [AuthGuard],
  exports: [
  ]
})
export class TestModule {}

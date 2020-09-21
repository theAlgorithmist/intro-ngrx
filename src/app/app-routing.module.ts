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
 * Main App routing module for the quaternion application
 *
 * @author Jim Armstrong
 *
 * @version 1.0
 */
import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { CalculatorComponent } from './features/quaternion-calculator/calculator/calculator.component';
import { LoginComponent      } from './features/login-page/login/login.component';

// this is currently in Part I state
const calculatorRoutes: Routes = [
  { path: 'calculator', component: CalculatorComponent},

  { path: 'login', component: LoginComponent},

  { path: 'test',  loadChildren: () => import('./features/test/test.module').then(m => m.TestModule)},

  { path: '', redirectTo: 'calculator', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(calculatorRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

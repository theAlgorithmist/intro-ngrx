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
 * Main App module for the quaternion application (currently at Part I)
 *
 * @author Jim Armstrong
 *
 * @version 1.0
 */
import { BrowserModule           } from '@angular/platform-browser';
import { NgModule                } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';

import { MatTabsModule      } from '@angular/material/tabs';

import { AppRoutingModule   } from './app-routing.module';
import { LoginModule        } from './features/login-page/login.module';
import { CalculatorModule   } from './features/quaternion-calculator/calculator.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    StoreModule.forRoot({}),
    LoginModule,
    CalculatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

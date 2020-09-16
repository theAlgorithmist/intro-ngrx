# Introduction To The NGRX Suite

This is the code distribution for the Medium Article, _Introduction To The NGRX Suite, Part I_ , a four-part tutorial that provides an organized introduction to @ngrx/store, @ngrx/effects, and @ngrx/entity, version 10.  Angular version 10 is used for the project.

Author:  Jim Armstrong - [The Algorithmist]

@algorithmist

theAlgorithmist [at] gmail [dot] com

Angular: 10.0.0

@ngrx/store/entity/effects: 10.0.0

Typescript: 4.0.2

Place in series: Part I (Sept. 2020)

## The Application

The Medium article discusses an extended version of the quaternion calculator that I have used in the past as a 'Hello World' application to test languages/frameworks/etc.  This application adds a login page and an assessment test in addition to practice with a quaternion calculator.  No math knowledge is necessary since all the quaternion math is implemented using my Typescript Math Toolkit Quaternion class (open-sourced for this demonstration).  It is only necessary to understand how to deal with a data structure containing four numbers and an API for add, subtract, multiply, and divide.

This application is implemented in four separate parts.  Part I introduces the basic application layout, routes (eager and lazy), and the calculator part of the application.  Only @ngrx/store is used in Part I.

Part II of the tutorial expands the test section to illustrate the use of @ngrx/effects for retrieval of test data and passing a scored test back to a server.

Part III illustrates the use of @ngrx/entity for the test data.

Part IV implements the login with simple authentication and a redirect url.  This further illustrates the practical use of @ngrx/store in an actual application.

Note that starting in part II, the calculator is disabled as soon as the test begins.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

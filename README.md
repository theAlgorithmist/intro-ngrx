# Introduction To The NGRX Suite

This is the code distribution for the Medium Article, [Introduction To The NGRX Suite, Part I](https://medium.com/ngconf/introduction-to-the-ngrx-suite-part-i-a82a88450416), a four-part tutorial that provides an organized introduction to @ngrx/store, @ngrx/effects, and @ngrx/entity, version 10.  Angular version 10 is used for the project.

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

<aside>
Quaternions are a fascinating theoretical concept in complex numbers. While conceived as an extension to complex numbers, they have several practical applications, most notably in the area of navigation.  A quaternion may be interpreted as a vector in three-dimensional (Euclidean) space along with a rotation about that vector.  This used of quaternions was first applied to resolution of the so-called Euler-angle singularity; a sitaution where the formula for motion of a vehicle exhibits a singularity at a vertical angle of attack.  Equations of motion developed using quaternions exhibit no such properties.  In reality, the Euler-angle equations are NOT singular; they are indeterminate.  Both the numerator and denominator both approach zero at a verticle angle of attack. L^Hospital's rule is necessary to evaluate the equations at this input value.  Such an approach is cumbersome, however, and quaterions provide a cleaner and more efficient solution.  Quaternions are also used in inverse kinematics to model the motion of bone chains and avoid 'breaking or popping' that was prevalent in early 3D software packages that resolved IK motion using Euler-angle models.
</aside>

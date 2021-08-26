# Prueba Fullstack para Melonn
Hola! 👋
Me alegra llegar hasta este punto de enviar la solución para la prueba técnica, es muy gratificante para mi realizar este tipo de retos. A continuación nombraré aspectos para tener en cuenta del desarrollo:

- **Diseño**. No soy diseñadora web pero intente hacer un diseño basandome en el diseño de melonn.
- **Datos**. Este dato internal order number: this field is calculated as follows: MSE + datetime-epoch + random number between 0 and 100, no lo logré entender muy bien, así que lo hice de esta forma Date.now() + Math.floor(Math.random() * (100 + 1));
  también el peso de cada producto no se especificó si era para cada producto o en su totalidad por la cantidad, asi que lo hice con su totalidad.

# SellOrderApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

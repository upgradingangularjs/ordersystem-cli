# Order System CLI
This is a variation of the sample project used in my course [Upgrading AngularJS](https://www.upgradingangularjs.com).

The purpose of this project is to demonstrate how to set up an ngUpgrade project with the Angular CLI.

Currnt features:
* Express API for example data and for serving the production build
* Hybrid setup with AngularJS 1.7.x & Angular using ngUpgrade
* AngularJS in TypeScript
* Angular CLI with tslint
* [Prettier](https://prettier.io/) for formatting

## Highlights on the Setup
There are a few notes on setting up a CLI project with ngUpgrade if you would like to recreate this:

* This project starts with the AngularJS files in TypeScript, using modules, and aligned with the same file structure as the CLI. This is often not the case in the real world, but I want to show a goal to attain to in your own legacy code.
* To use `require` in AngularJS templates, I've added `node` to the `types` array of `client/src/tsconfig.app.json`
* I've added the Bootstrap and FontAwesome styles in the `angular.json` styles array.
* To use the Express server, I've added a `proxy.conf.json` file and updated the `angular.json` config to use it.
* To have the Express server serve the `dist` folder statically, I've modified the `angular.json` output config to match what the server expects. You could also change the location in the Express config (`server/expressConfig.js`) to match the CLI default, but front end devs often don't have access to the back end.

## Server
To run the Express server:

```bash
cd server
npm install
npm start
```

## Client

The client was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0, so it has all of the same features as a normal CLI project.

To get started:

```bash
cd client
npm install
ng serve
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

After you generate a component or service in Angular, you can use ngUpgrade's `downgradeComponent` or `downgradeInjectable` in `client/src/app/app.module.ajs.ts` so the AngularJS code can interact with it.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist` directory at the root of the repository. Use the `--prod` flag for a production build. Navigate to the Express server at `localhost:9001` to see this build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

For further help on ngUpgrade and Angular Migration in general, check out the [ngMigration Forum & Wiki](https://github.com/angular/ngMigration-Forum).

## Author
[Sam Julien](http://www.twitter.com/samjulien)
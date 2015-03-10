# Guava skeleton for [Brunch](http://brunch.io/)

## What is Guava

Guava is an open source Static Website Engine developed with JavaScript and Node.js. It takes content from files on your computer, and quickly renders them into fast static output. Guava automatically re-renders your files when changes occur, and streamlines your website development process. Guava is under development and we welcome your contributions.

## Features

###JavaScript based skeleton:

- [Brunch 1.8.x](http://brunch.io/) build tool for front-end web applications
- [Zurb Foundation 5.5.x](http://foundation.zurb.com/) responsive front-end framework
- [Node-Sass 2.0.x](https://github.com/sass/node-sass) Node.js bindings to [Libsass 3.1.x](https://github.com/sass/libsass), C/C++ Sass CSS precompiler.
- [Bourbon 4.2.x](http://bourbon.io/) simple and lightweight mixin library for Sass.
- [Knockout.js](http://knockoutjs.com/) JavaScript library that follows the Model-View View Model (MVVM) pattern
- [Font-awesome](http://fortawesome.github.io/Font-Awesome/), the iconic font and CSS toolkit
- [Nunjucks](http://mozilla.github.io/nunjucks/), a rich and powerful templating language for JavaScript
- [HTML5 Boilerplate](https://html5boilerplate.com/), the web’s most popular front-end boilerplate
- [BrowserSync](http://www.browsersync.io/) synchronises file changes and interactions across multiple devices

###JavaScript Testing: (headless or browser)

- [buster.js](http://busterjs.org/) test runner
- [sinon](http://sinonjs.org/) test spies, stubs and mocks
- [PhantomJS](http://phantomjs.org/) headless server

## Instructions

### Installation

- Install [node](http://nodejs.org/).
- Install Brunch: `npm install -g brunch`.
- Install Bower: `npm install -g bower`.
- Install Guava skeleton: `brunch new https://github.com/roobyz/guava <app_name>`.
- cd into your new app folder.
- verify can run the watch server: `./bin/guava.js -w` and `open http://localhost:3333/`

### Running

The command line JavaScript app (guava.js), will help you manage most of your website development process. To temporarily add it to your path run `source guava-path.sh`.  Afterward, you can run `guava.js -h` to get a list of available command line options.

### JavaScript Testing

Some initial test cases (test/homeView-test.js) were created to demonstrate the process of generating your own test cases.  These are set to generate some test failure messages.  Once you update the Javascript file as noted in the error message, your test will generate this success message: *"4 tests, 4 assertions, 1 runtime ... OK"*.

## Todo

- Finish default Nunjucks template
- Create Markdown/Nunjucks plugin for processing markdown pages and posts
- Work on default theme
- Add GitHub deployment process to guava.js

## License
Guava is released under the [MIT License](http://opensource.org/licenses/MIT).
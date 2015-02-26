# GuavaPress skeleton for [Brunch](http://brunch.io/)

- Build Status: this work-in-progress is under heavy development, so your "mileage may vary".
- Compatible with latest brunch (1.7.20).  Uses bower to manage packages.

# What is GuavaPress

GuavaPress is a static-site generator. It takes content from files on your computer, and quickly renders them into fast static output. GuavaPress will automatically re-renders your files when changes occur, and ...

# Features

JavaScript based skeleton:

- [Zurb Foundation 5.x](http://foundation.zurb.com/) responsive front-end framework with [LibSASS](http://libsass.org/) for pre-processing
- [Bourbon 3.x](http://bourbon.io/) Sass mixins (version 4.x currently incompatible with LibSASS)
- [Knockout.js](http://knockoutjs.com/) JavaScript library that follows the Model-View View Model (MVVM) pattern
- [Font-awesome](http://fortawesome.github.io/Font-Awesome/)
- [Nunjucks](http://mozilla.github.io/nunjucks/)
- Boilerplate TBD
- Autoreload

Testing: (headless or browser)

- [buster.js](http://busterjs.org/) test runner
- [sinon](http://sinonjs.org/) test spies, stubs and mocks
- [PhantomJS](http://phantomjs.org/) headless server

# Instructions

## Installation

- Install [node](http://nodejs.org/).
- Install Brunch: `npm install -g brunch`.
- Install Bower: `npm install -g bower`.
- Install the LibSASS library for your operating system.
- Run `brunch new https://github.com/roobyz/guava-press <app name>`.
- cd into your new app folder.
- verify can run the brunch server: `brunch w -s` and `open http://localhost:3333/`

## Running

To build your project run `brunch build`.

## Testing

TBD

# Todo

- Repair Nunjucks template
- Integrate HTML5 boilerplate
- Add Markdown processing for pages and posts
- Design default theme

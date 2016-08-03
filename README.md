# karma-iced-coffee-coverage

[![Build Status][ci-master]][travis-ci]
[![Coverage Status][coverage-master]][coveralls]
[![Dependency Status][dependency]][david]
[![devDependency Status][dev-dependency]][david]
[![Downloads][downloads]][npm]

A set of plugins for the Karma Test Runner to support [iced-coffee-coverage](https://github.com/benbria/iced-coffee-coverage)

[![NPM][npm-stats]][npm]

# Preprocessor

Use the `iced-coffee-coverage` preprocessor in place of `karma-coffee-preprocessor` to compile `coffee` to `js` that will also be instrumented for `karma-coverage` to use.

## Usage

In your `karma.conf.*`

```javascript
// instrument `coffee` files on the fly
preprocessors: [
    '**/*.coffee': ['iced-coffee-coverage']
],

// configure the processor plugin to use `istanbul` style
icedCoffeeCoverage: {
    preprocessor: {
        instrumentor: 'istanbul'
    }
}
```

## Options

You can pass anything that you would pass to the `iced-coffee-coverage` constructor. Most notably the `instrumentor` option.

# Framework Plugin

_What problem is this solving?_?

Say you have `foo.coffee` and `bar.coffee` as client side files. You only have written tests for `foo.coffee` and, therefore, have not included `bar.coffee` in your karma config's `files` list. If you cover, say, 80% of `foo.coffee` in your tests, your report will mirror that. However, you haven't tested `bar.coffee` at all! A more realistic report would be to say you have covered 80% of `foo.coffee`, and 0% of `bar.coffee`. Therefore, your overall coverage report should say 40%. How to fix that? Use this plugin to create an initial _empty_ coverage object that contains empty entries for _all_ the sources you would like
to report on (usually your entire client side source).

What the plugin will do is run `iced-coffee-coverage` on `basePath`, and generate a javascript file containing all the
coverage intialization code for that directory. You can then include this file in your config `files` property, and
will thus include the _zero_ counts in any reports your generate. `karma-coverage` will merge this with any actual counts that are covered during the tests.

This is useful in conjunction with
[browserify-iced-coffee-coverage](https://github.com/benbria/browserify-iced-coffee-coverage)

## Usage

In your `karma.conf.*`

```javascript
// add `karma-iced-coffee-coverage` framework plugin
frameworks: ['iced-coffee-coverage'],

// configure the framework plugin
icedCoffeeCoverage: {
    framework: {
        initAllSources: true,
        sourcesBasePath: 'assets',
        dest: 'build-test/coverage-init.js',
        instrumentor: 'istanbul'
    }
},

// Then ensure that `dest` is included in our `files`
files: ['build-test/coverage-init.js', '**/*Test.js']
```

## Options

You can pass anything that you would pass to the `iced-coffee-coverage` constructor, as well as these options.

## `icedCoffeeCoverage.framework.initAllSources`

This needs to be true for the plugin to run.

## `icedCoffeeCoverage.framework.sourcesBasePath`

The root directory which you would like to generate initialization coverage for.

## `icedCoffeeCoverage.framework.dest`

The `.js` file destination to write out the initialization javascript. Include this in your karma `files` config.

# NOTES

Should be used in conjunction with a coverage reporter that supports `istanbul` or `jscoverage`, such as
`karma-coverage`.

Can use both `framework` and `preprocessor` plugins together.


  [ci-master]: https://img.shields.io/travis/nextorigin/karma-iced-coffee-coverage/master.svg?style=flat-square
  [travis-ci]: https://travis-ci.org/nextorigin/karma-iced-coffee-coverage
  [coverage-master]: https://img.shields.io/coveralls/nextorigin/karma-iced-coffee-coverage/master.svg?style=flat-square
  [coveralls]: https://coveralls.io/r/nextorigin/karma-iced-coffee-coverage
  [dependency]: https://img.shields.io/david/nextorigin/karma-iced-coffee-coverage.svg?style=flat-square
  [david]: https://david-dm.org/nextorigin/karma-iced-coffee-coverage
  [dev-dependency]: https://img.shields.io/david/dev/nextorigin/karma-iced-coffee-coverage.svg?style=flat-square
  [david-dev]: https://david-dm.org/nextorigin/karma-iced-coffee-coverage#info=devDependencies
  [downloads]: https://img.shields.io/npm/dm/karma-iced-coffee-coverage.svg?style=flat-square
  [npm]: https://www.npmjs.org/package/karma-iced-coffee-coverage
  [npm-stats]: https://nodei.co/npm/karma-iced-coffee-coverage.png?downloads=true&downloadRank=true&stars=true

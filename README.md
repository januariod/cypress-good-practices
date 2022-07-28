# _Good-Practices_ with Cypress

[![ci](https://github.com/januariod/cypress-good-practices/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/januariod/cypress-good-practices/actions/workflows/ci.yml)

Sample project to demonstrate the best practices with Cypress.

## Pre-requirements

To run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.26.2` while writing this doc)
- [nodejs](https://nodejs.org/en/) (I've used version `14.17.3` while writing this doc)
- NPM (I've used version `6.14.13` while writing this doc)
- [Google Chrome](https://www.google.com/intl/en_us/chrome/) (I've used version `92.0.4515.131` while writing this doc)

**Note:** When installing nodejs, NPM is automatically installed too.

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## Configuring the environment variables

Before running the tests, some environment variables need to be set up.

Make a copy of the [`cypress.env.example.json`](./cypress.env.example.json) file as `cypress.env.json`, and set the appropriate values for all the variables.

**Note:** `cypress.env.json` file is not tracked by git.

## Running the tests

In this project, you can run tests in interactive and headless modes.
### Headless mode

Run `npm test` (or `npm t` for short) to run all tests in headless mode.

### Interactive mode

Run `npm run cy:open` to open the Cypress Test Runner to run tests in interactive mode.

### CI mode

Run `npm run cy:e2e` to run all tests in headless mode on cy server.

___

Made with ❤️ by [Daniel Januario](https://github.com/januariod).

Tks to @wlsf82 and TAT School :love_you_gesture:

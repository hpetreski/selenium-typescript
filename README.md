In mochats.json file we are requiring the hooks file so it will load the root level hooks for mocha
And we are using the ts-node/esm loader to as a loader for our mocha runner
The project is using husky and lint-staged to run the linter on the staged git files as a pre-commit hook not to allow linting issues to be commited
Mocha reporters are not be able to run in parallel as seen here https://github.com/mochajs/mocha/pull/4922 and there were no reporters that could do that
Allure reporter has been added, in order to use it you need to run npm run allure-serve after the tests are run and the allure-results folder is there

Below if what can be found in each folder and what is the naming structure:
In the data folder we can find the static data files
In the interfaces folder we can find the interfaces that we have defined for our tests
In the test folder we can find the pageObject models and the test and hooks
In the typings folder we can find the typings that extend mocha so it will include the driver that we are adding on each of our tests
In utils folder we can find the utility/helper functions for our project
The gitignore file is based on a template gitignore file taken from the github
The tsconfig file is also based on a template tsconfig file from github

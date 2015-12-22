# Music Hack

After cloning this repo run:

```shell
npm install
```

```shell
bower install
```

In order to setup your development environment.

> You might need to install some global packages such as ionic, bower, etc.

> Check out the [Ionic's Documentation](http://ionicframework.com/getting-started/)

## Running Application

For development environments `ionic serve [--lab]` will inject environment vars to the project and launch the app into the browser.

It's **VERY IMPORTANT** to run `gulp dev`, `gulp test_env` or `gulp prod` before `ionic build` or `ionic emulate` the application on real devices in order to enable environment vars as automatic injection only works for `ionic serve [--lab]` task.

> Default task is `dev` and could be changed under `ionic.project -> gulpDependantTasks`

### Unit testing

Run your tests using:

```
gulp test
```

> This will also add a `karma-coverage` report under `tests/coverage`.

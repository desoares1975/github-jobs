# Job Search Test

## Instalation

Clone or download

```bash
$ git clone git@github.com:desoares1975/github-jobs.git
```

```bash
$ cd github-jobs
```

### API
Only to fufill the Node requirement of the task, tha React app consumes a loca API, to install and run it do the following:

```bash
github-jobs$ npm install
github-jobs$ node job-search
```

### React app

Once the server is up you can load the app.
This repository includes a build of the React app so you can run it as bellow:

```bash
github-jobs$ cd app
github-jobs/app$ npm install -g serve
github-jobs/app$ serve -s build
```

This should be enough to acess the app. On your browser type http://localhost:3000

All environment files are present on the repository only for the sake of simplicity,
you can change it at will but both the API and the front has to be changed in this case.

To run the app in dev mode simply run:

```bash
github-jobs/app$ npm start
```

### INITIAL SETUP TO BUILD FROM SCRATCH
- Setup Git
- Install `pipenv` with `pip install pipenv`
    - Then run `$ pipenv shell` to start the virtual environment
- Install packages - `$ pipenv install django djangorestframework django-rest-knox`
- Create a Django project with `$ django-admin startproject <project-name>`

### Django Rest Framework Workflow
- Create an app with `$ python manage.py startapp <app-name>`
    - Apps need to be added to `INSTALLED_APPS` in `settings.py`
- Create a model in `models.py` with in the app folder
    - Create a migration file by running `python manage.py makemigrations`
    - Migrate by running `python manage.py migrate`
- Create a serializer file in the app folder and name it `serializers.py`
    - Create serializer classes
- Create a viewset in a file called `api.py` within the app folder
- Register the viewset in a file called `urls.py`
- Register the apps url in the project's folder `urls.py`

### React Frontend within a Django app
- Create an app `python manage.py startapp frontend`
- Add app to INSTALLED_APPS
- Create a view like so:
```python
from django.shortcuts import render

def index(request):
    return render(request, 'frontend/index.html')
```
- Create a `urls.py` file within the front end folder and add the index view
- Then add the url to the main projects `urls.py` file
- In the `settings.py` file add this:
```python
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'
```
- Create directories with `$ mkdir -p ./frontend/src/components`
- `$ mkdir -p ./frontend/{static,templates}`
- Move to the root directory `$ cd ..`
- Initialize npm `npm init -y`
- Install Webpack `npm i -D webpack webpack-cli`
- Install Babel `npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react babel-plugin-transform-class-properties`
- Install React `npm i react react-dom prop-types`
- Create a babel file called `.babelrc` in the root dir and place this in there
```json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": [
        "transform-class-properties"
    ]
}
```
- Create a Webpack file called `webpack.config.dev.js` in the root dir and place this in there
```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    entry: {
        main: path.resolve(__dirname, './project/frontend/src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './project/frontend/static/frontend/main.js')
    },
    mode: 'development',
```
- Create a Webpack file called `webpack.config.js` in the root dir and place this in there
```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    entry: {
        main: path.resolve(__dirname, './project/frontend/src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './project/frontend/static/frontend/main.js')
    },
    mode: 'production',
```
- Modify the `package.json` file and replace scripts like so
```json
"scripts": {
    "dev": "webpack --watch --config ./webpack.config.dev.js",
    "build": "webpack"
},
```
- Within `./project/frontend/src/components` add an `App.js` file and place this in there
```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return <h1>React App</h1>
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
```
- Create a html boilerplate called `index.html` within `project\frontend\templates\frontend\index.html` with this wthin the body:
```html
<div id="app"></div>
{% load static %}
<script src="{% static "frontend/main.js" %}"></script>
```
    - Bootswatch is used in this project along with the Bootstrap 4 JS cdn links
- Install redux: `npm i redux react-redux redux-thunk redux-devtools-extension`
- Install axios: `npm i axios`
- Install alerts: `npm i react-alert react-alert-template-basic react-transition-group`
- Install react router: `npm i react-router-dom`

### Redux Workflow
- Create type
- Create action
- Add a case to the reducer that returns the state
- Call the action within a component

#### Create messages
-

# Ambitually (formerly Ambits)
Mobile-first web application for habit tracking and location-based accountability

> Bet on Tomrrow, Today!
## Screenshots
![Alt text](https://cloud.githubusercontent.com/assets/22466498/25923951/0a304df6-3595-11e7-853e-3adf4598fbb5.png "Ambits in Action")

## Table of Contents

1. [Team](#Team)
1. [Usage](#Usage)
1. [Requirements](#Requirements)
1. [Development](#Development)
1. [Contributing](#contributing)

## Team
  - __Greenfield__: Efe Surekli, George Michel, Robert Littlejohn, Ryan Choi

## Usage

To start the app locally, simply install the  npm dependencies and run the server:

```sh
npm install
npm start
```
## Requirements
- MongoDB
- Express
- React
- Node
- Material-UI
- Webpack
- Heroku (for deployment)

## Development

### Deployment Setup
1. Set up an account on MongoLab
2. Set up a Heroku account
3. Create a MongoLab database for the app
4. Set a user and password for the MongoLab database

Lastly, make sure to set the following environment variable on Heroku, using `heroku set:config KEY=VALUE` from the command-line:

- MONGOLAB_URL = Your MongoLab URL, with db user/pass
- NPM_CONFIG_PRODUCTION = false, so that Heroku postinstall can run the deployment Webpack build
- NODE_ENV = 'production', if not set already


### Roadmap

View the project roadmap [here](https://github.com/CellularAnathema/ambits)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

# Node.js Express 4 Boilerplate

A boilerplate application for building web apps using Node.js and Express 4, with optional support for HTTPS, MongoDB, Handlebars templating and reverse proxy.

The boilerplate is configured using an external configuration file (config.js).

## Project Features

- Express 4
- Logging support using [bunyan](https://github.com/trentm/node-bunyan) 

The following features are optional (they can be anabled from the configuration file):

- HTTPS/SSL support
- Reverse proxy
- MongoDB support using [mongoose](https://github.com/learnboost/mongoose/)
- Handlebars support using [express-handlebars](https://github.com/ericf/express-handlebars)

## Project Setup

```bash
$ git clone https://github.com/rbartoli/node-express-4-boilerplate.git  
$ cd node-express-4-boilerplate 
$ npm install
$ npm start  
```
Navigate to http://localhost:3000/

## License

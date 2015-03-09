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
$ git clone https://github.com/rbartoli/express-boilerplace.git  
$ cd express-boilerplace 
$ npm install
```
Edit the file config.js to customise your server. Then start the server with:
```bash
$ npm start  
```
Navigate to http://localhost:3000/

## License
The MIT License (MIT)

Copyright (c) 2015 Riccardo Bartoli

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

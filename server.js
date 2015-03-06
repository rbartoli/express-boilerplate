//--------------------------------------------------------------------------
//
//  Server app
//
//--------------------------------------------------------------------------

var env                     = process.env.NODE_ENV || 'development', 
    config                  = require('./config')[env],
    
    path                    = require('path'),
    
    express                 = require('express'),
    server                  = express(),
    
    http                    = require('http'),
    https                   = require('https'),
    
    bodyParser              = require('body-parser'),
    compression             = require('compression'),
    
    logger                  = require('winston'),
    loggerHttp              = require('morgan'),
    bunyan                  = require('bunyan'),
    log                     = bunyan.createLogger({name: config.id}),
    
    indexController         = require('./controllers/index');
    
//--------------------------------------------------------------------------
//
//  SSL support
//
//--------------------------------------------------------------------------

if ( config.features.ssl.enabled ) {
    server.set( 'port', process.env.PORT || config.features.ssl.port );
} else {
    server.set( 'port', process.env.PORT || config.port );
}

//--------------------------------------------------------------------------
//
//  Database support (MongoDB)
//
//--------------------------------------------------------------------------

if ( config.features.db.enabled ) {
    var mongoose = require('mongoose');
    
    mongoose.connect( config.features.db.host + config.features.db.name );
}

//--------------------------------------------------------------------------
//
//  Templating support (Handlebars)
//
//--------------------------------------------------------------------------

if ( config.features.templating.enabled ) {
    var expressHbs = require('express-handlebars');
    
    server.engine( 'hbs', expressHbs( {extname:'hbs'} ) );
    server.set( 'view engine', 'hbs' );
    server.set( 'views', path.join( __dirname, '/views' ) );
}

//--------------------------------------------------------------------------
//
//  Reverse proxy support (NGINX)
//
//--------------------------------------------------------------------------

if ( config.features.reverse_proxy.enabled ) {
    server.enable( 'trust proxy' );
}

//--------------------------------------------------------------------------
//
//  Middleware configuration
//
//--------------------------------------------------------------------------

server.use( loggerHttp( 'short' ) );
server.use( bodyParser.json() );
server.use( bodyParser.urlencoded({
    extended: true
}) );

//--------------------------------------------------------------------------
//
//  Router
//
//--------------------------------------------------------------------------

server.get( '/', indexController.default );

//--------------------------------------------------------------------------
//
//  Start server
//
//--------------------------------------------------------------------------
 
if ( config.features.ssl.enabled ) {
    var fs = require('fs');
    var sslOptions = {
        key: fs.readFileSync( config.features.ssl.key ),
        cert: fs.readFileSync( config.features.ssl.cert )
    };
    
    https.createServer(sslOptions, server).listen(server.get('port'), function() {
        log.info('Express server listening on port %d', server.get('port'));
    });
} else {
    http.createServer(server).listen(server.get('port'), function() {
        log.info('Express server listening on port %d', server.get('port'));
    });   
}

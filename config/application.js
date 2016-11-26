var port = process.env['PORT'] || 1337,
    path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    //Connect with MongoDB via Mongoose
    connectDb = require('./database'),
    connectionString = 'mongodb://admin:123456@ds111188.mlab.com:11188/seminar',
    createRouter = require('./routes'),
    app = express();

global.App = {
    //Utilities
    _app: app,
    root: path.join(__dirname, '..'),
    app_path: function(subpath) { //return the 'app' directory
        return path.join(this.root, 'app', subpath);  
    },
    model: function(modelName) { //require the model in 'app/models'
        return require(
            this.app_path(
                path.join('models', modelName)
            ));
    },
    route: function(routeName) { //require the route handler in 'app/routes'
        return require(
            this.app_path(
                path.join('routes', routeName)
            ));
    },
    
    //Operation
    start: function() {
                
        //Connect to the db at given url
        connectDb(connectionString, function(err) {
            if (!err)
                app.listen(port, function() {
                    console.log('Server listening on port ' + port);
                })
        });
    }
}

//Middlewares stack
var router = createRouter(express);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router); //Mount the router
app.use(express.static(path.join(__dirname, '..', 'public')));



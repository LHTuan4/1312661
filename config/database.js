var mongoose = require('mongoose');
mongoose.Promise = global.Promise; //Use native ES6 Promise instead of Mongoose's default


module.exports = function connect(connectionString, callback) {
        
    mongoose.connect(connectionString, function(err) {
        if (err)
            console.error('cant connect to mongoDB at:', connectionString);
        else
            console.log('mongoDB connected at:', connectionString);
        
        callback(err);
    });
}
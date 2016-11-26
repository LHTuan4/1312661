var mongoose = require('mongoose');

var schema = mongoose.Schema({
    hoten: String,
    mssv: String
});

var Model = mongoose.model('SinhVien', schema);

module.exports = Model;
var SinhVien = App.model('SinhVien');

exports.get = function get(req, res) {
    
    console.log('GET students');
    
    SinhVien.find({}, function(err, records) {
            if (err) return res.status(422).send('Problem loading the records: ' + err.message);
            
            res.setHeader('content-type', 'application/json');
            res.end(JSON.stringify(records));
        });
}

exports.getOne = function getOne(req, res) {
    
    SinhVien.findById(req.params.id, function(err, record) {
            if (err) return res.status(422).send('Problem loading the records: ' + err.message);
            
            res.setHeader('content-type', 'application/json');
            res.end(JSON.stringify(record));
        });
}

exports.post = function post(req, res) {
    
    console.log('POST students');
    
    if (!req.body.hoten || !req.body.mssv)
            return res.status(400).send('Not enough information');
        
        var sv = new SinhVien({ hoten: req.body.hoten, mssv: req.body.mssv });
        sv.save(function(err, obj) {
            if (err) {
                console.log('error saving SinhVien:', err.message);
                res.status(500).end(err.message);
            }
            else
                res.status(201).end('Entity created, id ' + obj._id);
        })
}

exports.put = function put(req, res) {
    
    console.log('PUT students');
    
    SinhVien.findByIdAndUpdate(req.params.id, { hoten: req.body.hoten, mssv: req.body.mssv }, function(err, doc) {
            if (err)
                res.status(500).end(err.message);
            else
                res.status(200).end("succesfully saved");
        });
}

exports.delAll = function delAll(req, res) {
    SinhVien.remove({}, function(err) {
        
        if (err)
            res.status(500).end(err.message);
        else
            res.status(200).end("succesfully removed all records");
        
    })
}

exports.del = function del(req, res) {
    
    console.log('DELETE students');
    
    SinhVien.findByIdAndRemove(req.params.id, function(err) {
            if (err)
                res.status(500).end(err.message);
            else
                res.status(200).end("succesfully removed");
        })
}
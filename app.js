var express = require('express');
var router = express.Router();
var app = express();

//file upload handler
var uploadProgress = require('node-upload-progress');

uploadHandler = new uploadProgress.UploadHandler;

app.use(express.static(__dirname + '/public'));

uploadHandler.configure(function() {
    this.uploadDir = '/uploads';
    this.onEnd = customOnEndHandler;
});

function customOnEndHandler(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Upload received');
}


app.use('/', router);

var homeRoute = router.route('/');

homeRoute.get(function(req, res) {
    res.json({ message: 'Hello World!' });
});


var upload = router.route('/upload');
var progress = router.route('/progress');
upload.get(function(req,res){
    console.log(123);
    res.json({ message: 'Hello World!' });
});
upload.post(function(req,res){
    console.log(1234);
    uploadHandler.upload(req, res);
});
progress.get(function(req,res){
    uploadHandler.progress(req, res);
})

var port = process.env.PORT || 3000;
console.log("Express server running on " + port);
app.listen(port);
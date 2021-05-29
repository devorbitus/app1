var express = require('express');
var fs = require('fs');

var app = express();

var PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.status(200).send('Hello world!!!!');
});

app.get('/accesskey', (req, res) => {
    const file = "/opt/talend/secrets/secrets.properties"
    const secret = fs.readFileSync(file, 'utf8');
    res.status(200).send(`Boom, secret is : ${secret}`);
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:', PORT);
});

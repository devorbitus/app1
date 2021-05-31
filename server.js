var express = require('express');
var fs = require('fs');

var app = express();

var PORT = process.env.PORT || 3000;

app.get('/', function(_req, res) {
    res.status(200).send('Hello world!');
});

app.get('/accesskey', (_req, res) => {
    const file = "/opt/talend/secrets/secrets.properties"
    const secret = fs.readFileSync(file, 'utf8');
    const secretHtml = `<br>${secret.replace(/(?:\r\n|\r|\n)/g, '<br>')}`;
    res.status(200).send(`Boom, secret is : ${secretHtml}`);
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:', PORT);
});

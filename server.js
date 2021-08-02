var express = require('express');
var fs = require('fs');

var app = express();

var PORT = process.env.PORT || 3000;

app.get('/', function(_req, res) {
    res.status(200).send('<h1>Hello world!</h1><br/><br/><a href="/accesskey">Navigate to Access Key Endpoint</a>');
});

app.get('/accesskey', (_req, res) => {
    const file = "/akeyless/secrets/K8s/app1secret"
    const secret = fs.readFileSync(file, 'utf8');
    // const secret = process.env.MY_SECRET;
    const secretHtml = `<h1><br>${secret.replace(/(?:\r\n|\r|\n)/g, '<br>')}</h1>`;
    res.status(200).send(`Boom, secret is : ${secretHtml}`);
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:', PORT);
});

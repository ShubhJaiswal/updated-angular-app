const express = require('express');

const path = require('path');

const app = express();

app.use(express.static('./dist/updated-angular-app'));

app.get('/*', function(req,res) {
    res.sendFile('index.html',{root:'dist/updated-angular-app/index.html'});
});

app.listen(process.env.PORT || 8080);

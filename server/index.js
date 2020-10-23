const express = require('express');
const app = express();

const proxy = require('express-http-proxy');
const path = require('path');

const proxyPort = 3876;
const charityPort = 3987;

app.use(express.static(path.join(__dirname, '../public')));
app.use('/charity', proxy(`localhost:${charityPort}`));

app.listen(proxyPort, () => {
  console.log(`Charity proxy server listening on ${proxyPort}`);
});


module.exports = app;

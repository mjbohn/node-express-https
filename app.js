'use strict';

/* eslint-disable no-sync */
/* eslint-disable no-console */

const https = require('https');
const fs = require('fs');
const express = require('express');
const { processenv } = require('processenv');

const app = express();
const port = processenv('PORT', 8_080);
const privkey = processenv('PRIVKEY');
const cert = processenv('CERT');

app.get('/', (req, res) => {
  res.send('Hello Express on Docker w/ https.');
});

const options =
{ key: fs.readFileSync(privkey),
  cert: fs.readFileSync(cert) };

const server = https.createServer(options, app);

server.listen(port);

console.log(`Server listening on port ${port}.`);

/* eslint-enable no-sync */
/* eslint-enable no-console */

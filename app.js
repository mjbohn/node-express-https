'use strict';

/* eslint-disable no-sync */
/* eslint-disable no-console */

const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const { processenv } = require('processenv');

const app = express();
const port = processenv('PORT', 3_000);

app.get('/', (req, res) => {
  res.send('Hello Express on https!');
});

const options =
{ key: fs.readFileSync(path.join(__dirname, 'keys', 'privkey1.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'keys', 'cert1.pem')) };

const server = https.createServer(options, app);

server.listen(port);

console.log(`Server listening on port ${port}.`);

/* eslint-enable no-sync */
/* eslint-enable no-console */

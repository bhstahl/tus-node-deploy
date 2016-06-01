'use strict';

const tus = require('tus-node-server');
const tus_server = new tus.Server();

tus_server.datastore = new tus.FileStore({
    path: '/files',
});

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '8080';
const server = tus_server.listen({ host, port }, () => {
    console.log(`[${new Date().toLocaleTimeString()}] tus server listening at http://${server.address().address}:${server.address().port}`);
});


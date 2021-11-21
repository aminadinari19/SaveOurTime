//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/sot'));

app.get('/*', (req, res) =>
    res.sendFile('dist/sot/index.html', {root: 'dist/sot/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
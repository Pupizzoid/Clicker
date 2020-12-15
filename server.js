const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('./dist/clicker'));
app.get('/*', function (req, res) {
  res.sendFile('index.html', {root: 'dist/clicker/'});
});
app.listen(PORT);

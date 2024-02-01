const express = require('express');
const nodeom = require('nodeom');
const app = express();
const port = process.env.PORT || 5501;
let path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let myTypeServer = "9️⃣ The Peacemaker ✌🏻";

app.get('/', function(req, res) {
  // Use 'nodeom' here if needed
  // ...

  res.render('index', {
    myTypeClient: myTypeServer
  });
});

app.get('/send', function (req, res) {
  res.send('Hello World from Express <br><a href="/">home</a>')
});

app.listen(port, () => {
  console.log(`nov app listening on port ${port}`);
});

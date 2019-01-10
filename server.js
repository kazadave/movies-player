const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors()); // connect
app.use(bodyParser.json());

const debug = require('debug');

const console = {
  log: debug('vavatech:server')
}
const port = 3000;

app.get('/', (req, res) =>{
  console.log(req.method + ' ' + req.url)
  res.json(
    {
      status: 'ok',
      message: 'welcome'
    }
  );
});

app.post('/', (req, res) =>{
  console.log(req.body);
  res.status(200).json({
    status: 'ok',
    data: 'received'
  });
});

app.listen(port, () => {
  console.log('Server was started on port: ' + port)
});

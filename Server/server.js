//npm init -y
//npm install express cors body-parser

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const projectRoutes = require('./routes/projectRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/projects', projectRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});

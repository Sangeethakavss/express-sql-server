const express = require("express");
const app = express();
const port = 3000;
const db = require("./database/index.js");
require('dotenv').config();


app.use(express.json());

const authRouter = require('./router/auth.js');
app.use('/auth', authRouter);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//import app
const app = require('./app');

//import and config dotenv
require('dotenv').config();

//Get port from .env
const PORT = process.env.PORT;

//run the backend;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

const express = require('express');
const helmet = require('helmet');
const compression = require('compression')
const { urlencoded } = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const user = require('./routes/user');

// // Uncomment below if you have mongoDB and .env/.sh file set up
// const mongooseURL =
//   process.env.NODE_ENV !== 'production'
//     ? process.env.MONGODB_URI
//     : process.env.PROD_MONGODB_URI;

// mongoose.connect(mongooseURL, { useNewUrlParser: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error: '));

// // Assumes that the process is exiting normally
// process.on('SIGINT', () => {
//   db.close(() => {
//     console.log('Connection to DB terminated');
//     process.exit(0);
//   });
// });

const app = express();
app.use(compression());
app.use(
  urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(helmet());

app.use('/user', user);

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.listen(process.env.PORT || 8000, () =>
  console.log(`Listening on PORT ${process.env.PORT || 8000}...`)
);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const express = require('express');
const expressSession = require('express-session');
const expressVisitorCounter = require('express-visitor-counter');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const index = require("./routes/index");

(async () => {
const dbConnection = await MongoClient.connect('mongodb://localhost/hit-count', {
useNewUrlParser: true,
useUnifiedTopology: true
});

const db = dbConnection;
db.on("error", console.error.bind(console, "connection error:"));
console.log("we're connected!");

const counters = dbConnection.db().collection('counters');

app.set("view engine", "ejs");

app.enable('trust proxy');
app.use(expressSession({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(expressVisitorCounter({ collection: counters }));
app.get('/visits', async (req, res, next) => res.json(await counters.find().toArray()));

app.use("/", index);

const port = process.env.PORT || 3000;
app.listen(port, function () {
console.log("Server Has Started!");
});

module.exports = app;
})();

// localhost:3000/visits
// db.counters.find().pretty()
// Grab highest 3 visits from localhost-ip-addresses
// Get image and set link to most viewed sites
// Constantly update most visits




const express = require('express');
const connect = require('./config/database');
const Tweet = require('./models/tweet');
const Comment = require('./models/comment');
const app = express();

const TweetReposiroty = require('./repository/tweet-repository');

app.listen(3000, async () => {
    console.log("server is running ");
    await connect();
    console.log("MongoDb connected");
});
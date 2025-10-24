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

    const tweetRepo = new TweetReposiroty();
    const tweet = await tweetRepo.getWithComments('68fbd7027f67600e9e4a0669');
    console.log(tweet);
});
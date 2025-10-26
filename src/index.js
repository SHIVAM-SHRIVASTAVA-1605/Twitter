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
    // const tweet = await tweetRepo.getAll(0,2);
    // console.log(tweet[0].contentWithEmail);
    const tweet = await tweetRepo.create({content: 'With the hooks'});
    console.log(tweet);
});
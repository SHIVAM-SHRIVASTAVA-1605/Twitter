const express = require('express');
const connect = require('./config/database');
const Tweet = require('./models/tweet');
// const Comment = require('./models/comment');
const app = express();

app.listen(3000, async () => {
    console.log("server is running ");
    await connect();
    console.log("MongoDb connected");
    const tweets = await Tweet.find({
        content: ["This is updated tweet", "1234567890"]
    });
    console.log(tweets);
});
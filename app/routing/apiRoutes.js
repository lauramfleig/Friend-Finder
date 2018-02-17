const friendsData = require('../data/friends.js')

const bodyParser = require("body-parser");


// Display all friends in JSON format
//===============================================================

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friendsData);

    });

    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;

        console.log('post received')

        //turning string into numbers
        newFriend.scores = newFriend.scores.map(parseFloat);

        console.log(newFriend.scores)


        const friendsScores = friendsData.map(function (friend) {
            return friend.scores
        })

        console.log('All friend scores: ' + friendsScores)

        const scoreDifferencesArray = [];

        friendsScores.forEach(function (singleFriendScores) {
            const differences = [];

            singleFriendScores.forEach(function (score, index) {
                const difference = newFriend.scores[index] - score;
                differences.push(Math.abs(difference));
            })

            differenceSum = differences.reduce(function (sum, score) {
                return sum + score
            })

            scoreDifferencesArray.push(differenceSum);
        })

        console.log(scoreDifferencesArray)

    const bestMatchIndex = scoreDifferencesArray.indexOf(Math.min(...scoreDifferencesArray))

        friendsData.push(newFriend);

        res.json(friendsData[bestMatchIndex]);
    });
}
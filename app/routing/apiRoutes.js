const friendsData = require('../data/friends.js')

const bodyParser = require("body-parser");


// Display all friends in JSON format
//===============================================================

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friendsData);

        const friendsScores = friendsData.map(function (friend) {
            return friend.scores
        })

        console.log('All friend scores: ' + friendsScores)

        const scoreDifferencesArray = [];

        friendsScores.forEach(function (singleFriendScores) {
            const differences = [];
            console.log('Single Friend Scores: ' + singleFriendScores)
            

            // singleFriendScores.forEach(function (score, index) {

            //     // calculate difference between current friend
            //     // and new friends scores at the same index
            //     const difference = newFriend.scores[index] - score;

            //     // push the absolute value of that difference
            //     differences.push(Math.abs(difference));
            // })
        })
    });

    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;

    //    turning string into numbers
        newFriend.scores = newFriend.scores.map(parseFloat);

        console.log(newFriend.scores)

        friendsData.push(newFriend);

        res.json(friendsData);
    });
}
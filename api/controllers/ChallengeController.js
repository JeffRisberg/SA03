module.exports = {
    index: function (req, res) {      
        var challenges = [];
        var challenge;

        challenge = {name: "Hiking Challenge", numPlayers: 5};
        challenges.push(challenge);

        challenge = {name: "Biking Challenge", numPlayers: 12};
        challenges.push(challenge);

        res.view({challenges: challenges});
    }     
};

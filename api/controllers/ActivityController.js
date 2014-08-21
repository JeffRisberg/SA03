module.exports = {
    index: function (req, res) {      
        Activity.find({}).exec(function(err, activities) {
            if (err) {
                sails.log.err("-----------err", err);
                res.send(400);
                return;
            }

            var data = {activities: activities};

            res.view(data);
        });
    },

    view: function (req, res) {
        var id = req.param("id", null);

        Activity.findOne(id, function(err, activity) {
            var data = { activity: activity };

            console.log("found the activity " + activity);
            if (activity === undefined) return res.notFound();
            res.view(data);
        });
    },

    create: function (req, res) {
        Activity.create({name: "Dog Walking", type: "Physical", points: 5}, 
          function(err, activity) {

            res.redirect("/activity");
        });
    }     
};

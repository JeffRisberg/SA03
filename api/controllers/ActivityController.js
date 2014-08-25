module.exports = {
    index: function (req, res) {      
        Activity.find({}).exec(function(err, activities) {
            if (err) {
                sails.log.err("-----------err", err);
                res.send(400);
                return;
            }

            res.view({activities: activities});
        });
    },

    view: function (req, res) {
        var id = req.param("id", null);

        Activity.findOne(id, function(err, activity) {
            if (activity === undefined) return res.notFound();
            res.view({activity: activity});
        });
    },

    create: function (req, res) {
      var activity = new Activity();
      res.view({activity: activity});
    },

    save: function (req, res) {
        Activity.create({name: req.param("name"), 
                         type: req.param("type"), 
                         points: req.param("points")}, 
          function(err, activity) {

            res.redirect("/activity");
        });
    },

    edit: function (req, res) {
        var id = req.param("id", null);
  
        Activity.findOne(id, function(err, activity) {
            if (activity === undefined) return res.notFound();
            res.view({activity: activity});
        });
    },

    update: function (req, res) {
    },

    delete: function (req, res) {
    }     
};

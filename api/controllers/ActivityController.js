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
      if (req.method == "POST" && req.param("Activity", null) != null) {
        Activity.create(req.param("Activity")).done(function (err, model) {

          if (err) {
            res.send("Error something went wrong");
          } else {
            res.redirect("/activity/index");
          } 
        });
      } else {
        res.render('activity/create');
      }
    },

    update: function (req, res) {
      var id = req.param('id', null);
    
      Activity.findOne({id: id}).done(function(err, activity) {
            
        if (req.method = "POST" && req.param('Activity', null) != null) {
          var p = req.param('Activity', null);
                      
          activity.name = p.name;
          activity.type = p.type;
          activity.points = p.points;
                  
          activity.save(function (err) {                    
            if (err) {
              res.send("Error");
            } else {                      
              res.redirect("/activity/view/" + activity.id);
            }                                        
          });               
        } else {                  
          res.render('activity/update', {activity: activity});
        }                
      });           
    },

    delete: function (req, res) {
      var id = req.param('id', null);

      Activity.findOne({id: id}).done(function(err, activity) {
        activity.destroy(function (error) {
          res.redirect('/activity/index');
        });
      });          
    }     
};

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
      if (req.method=="POST" && req.param("Activity", null) != null) {
        Activity.create(req.param("Activity")).done(function (err, model) {

          if (err) {
            res.send("Error something went wrong");
          } else {
            res.redirect("/activity");
          } 
        });
      } else {
        res.render('activity/create');
      }
    },

    edit: function (req, res) {
        var id = req.param("id", null);
  
        Activity.findOne(id, function(err, activity) {
            if (activity === undefined) return res.notFound();
            res.view({activity: activity});
        });
    },

    update: function (req, res) {
      var id = req.param('id', null);
    
      Person.findOne(id).done(function(err, model) {
            
        if (req.method = "POST" && req.param('Activity', null) != null) {
          var p = req.param('Activity', null);
                      
          model.name = p.name;
          model.type = p.type;
          model.points = p.points;
                  
          model.save(function (err) {                    
            if (err) {
              res.send("Error");
            } else {                      
              res.redirect("activity/view/" + model.id);                      
            }                                        
          });               
        } else {                  
          res.render('activity/update', {model: model});
        }                
      });           
    },

    delete: function (req, res) {
      var id = req.param('id', null);

      Activity.findOne(id).done(function(err, activity) {
        activity.destroy(function (error) {
          res.redirect('activity/');
        });
      });          
    }     
};

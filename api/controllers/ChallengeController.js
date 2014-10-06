module.exports = {
    index: function (req, res) {
        Challenge.find({}).exec(function (err, activities) {
            if (err) {
                console.log(err);
                sails.log.error("-----------err", err);
                res.send(400);
                return;
            }

            res.view({activities: activities});
        });
    },

    view: function (req, res) {
        var id = req.param("id", null);

        Challenge.findOne(id, function (err, challenge) {
            if (challenge === undefined) return res.notFound();

            res.view({challenge: challenge});
        });
    },

    create: function (req, res) {
        if (req.method == "POST" && req.param("Challenge", null) != null) {
            Challenge.create(req.param("Challenge"), function (err, model) {

                if (err) {
                    res.send("Error something went wrong");
                } else {
                    res.redirect("/challenge/index");
                }
            });
        } else {
            res.view();
        }
    },

    update: function (req, res) {
        var id = req.param('id', null);

        Challenge.findOne(id, function (err, challenge) {
            if (challenge === undefined) return res.notFound();

            if (req.method = "POST" && req.param('Challenge', null) != null) {
                var p = req.param('Challenge', null);

                challenge.name = p.name;
                challenge.type = p.type;
                challenge.points = p.points;

                challenge.save(function (err) {
                    if (err) {
                        res.send("Error");
                    } else {
                        res.redirect("/challenge/view/" + challenge.id);
                    }
                });
            } else {
                res.view({challenge: challenge});
            }
        });
    },

    delete: function (req, res) {
        var id = req.param('id', null);

        Challenge.findOne(id, function (err, challenge) {
            if (challenge === undefined) return res.notFound();

            challenge.destroy(function (error) {
                res.redirect('/challenge/index');
            });
        });
    }
};

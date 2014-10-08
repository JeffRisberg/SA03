module.exports = {
    index: function (req, res) {
        Challenge.find({}).populate('activity').exec(function (err, challenges) {
            if (err) {
                console.log(err);
                sails.log.error("-----------err", err);
                res.send(400);
                return;
            }

            res.view({challenges: challenges});
        });
    },

    view: function (req, res) {
        var id = req.param("id", null);

        Challenge.findOne(id).populate('activity').exec(function (err, challenge) {
            if (challenge === undefined) return res.notFound();

            res.view({challenge: challenge});
        });
    },

    create: function (req, res) {
        if (req.method == "POST" && req.param("Challenge", null) != null) {
            if (req.param("Challenge")["active"] != undefined) {
                req.param("Challenge")["active"] = true;
            }
            else {
                req.param("Challenge")["active"] = false;
            }

            req.param("Challenge")["activity"] = 1;

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
                if (req.param("Challenge")["active"] != undefined) {
                    req.param("Challenge")["active"] = true;
                }
                else {
                    req.param("Challenge")["active"] = false;
                }

                var p = req.param('Challenge', null);

                challenge.name = p.name;
                challenge.description = p.description;
                challenge.startDate = p.startDate;
                challenge.endDate = p.endDate;
                challenge.active = p.active;

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

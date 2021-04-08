const router = require('express').Router();
const { Job, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const userData = await Job.findAll({
            where: {
                user_id: req.session.user_id
            }
        });
        
        const jobs = userData.map((job) => job.get({ plain: true }));
        console.log(jobs);

        res.render('dashboard', {
            jobs,
            logged_in: req.session.logged_in
          });
    
    } catch (err) {
        res.status(400).json(err);
    }
});
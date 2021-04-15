const router = require('express').Router();
const { Job, User, Status } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const jobData = await Job.findAll({
            where:{
                user_id: req.session.user_id
            }
        });

        const jobs = jobData.map((job) => job.get({ plain: true }));

        res.render('dashboard', {
            jobs,
            logged_in: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/newJob', withAuth, async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }

    res.render('newJob', 
    {
        logged_in: true,
    });

});

router.get('/jobs/:id', withAuth, async (req, res) => {
    try {
        const jobData = await Job.findByPk(req.params.id, {
            include: [{
                model: User
            },
            {
                model: Status
            }],
        });

        const job = jobData.get({ plain: true });
        console.log(job);

        res.render('specificJob', {
            ...job,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;


const router = require('express').Router();
const { Job, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

router.get('/job/:id', async (req, res) => {
    try {
        const jobData = await Job.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const job = jobData.get({ plain: true });

        res.render('project', {
            ...job,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

router.get('/dashboard', async (req, res) => {
    try {
        const jobData = await Job.findAll({});

        const jobs = jobData.map((job) => job.get({ plain: true }));

        res.render('dashboard', {
            jobs,
            // logged_in: req.session.logged_in
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/newJob', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }

    res.render('newJob');

});

module.exports = router;


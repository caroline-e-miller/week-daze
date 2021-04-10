const router = require('express').Router();
const { Job, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const jobData = await Job.findAll({
            // include: [
            //     {
            //         model: Job,
            //         attributes: ['job_title'],
            //     },
            // ],
        });

        const jobs = jobData.map((job) => job.get({ plain: true }));

        res.render('homepage', {
            jobs,
            logged_in: req.session.logged_in
        });
    } catch (error) {
        res.status(500).json(error);
    }
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
        res.redirect('/job');
        return;
    }

    res.render('login');
});

module.exports = router;


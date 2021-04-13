const router = require('express').Router();
const { Job } = require('../../models');

// post a new job
router.post('/', async (req, res) => {
    try {
        const jobData = await Job.create({
            job_title: req.body.title,
            company: req.body.company,
            status: req.body.status,
            user_id: req.session.user_id,
        });

        res.status(200).json(jobData);

    } catch (err) {
        res.status(400).json(err);
    }
});

// update job
router.put('/:id', async (req, res) => {
    try {
        const jobData = await Job.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(jobData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete a job
router.delete('/:id', async (req, res) => {
    try {
        const jobData = await Job.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(jobData);

        if (!jobData) {
            res.status(404).json({ message: 'No job here!' });
            return;
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

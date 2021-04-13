const router = require('express').Router();
const { Status } = require('../../models');

// post a new status
router.post('/', async (req, res) => {
    try {
        const statusData = await Status.create({
            status_option: req.body.status,
            date_updated: req.body.date,
            notes: req.body.notes,
            user_id: req.session.user_id,
            // job_id: 
        });

        res.status(200).json(statusData);

    } catch (err) {
        res.status(400).json(err);
    }
});

// update status
router.put('/:id', async (req, res) => {
    try {
        const statusData = await Status.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(statusData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete a status
router.delete('/:id', async (req, res) => {
    try {
        const statusData = await Status.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(statusData);

        if (!jobData) {
            res.status(404).json({ message: 'No status here!' });
            return;
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

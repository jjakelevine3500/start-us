const router = require('express').Router();
const {
    Developer,
    Member,
    Response,
    Service
} = require('../../models');

// get all developers
router.get('/', (req, res) => {
    Developer.findAll({
            attributes: {
                exclude: ['password']
            }
        })
        .then(dbDeveloperData => res.json(dbDeveloperData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get one developer
router.get('/:id', (req, res) => {
    Developer.findOne({
            attribures: {
                exclude: ['password']
            },
            where: {
                id: req.params.id
            },
            include: [{
                // enter models mafe by developers here like post, comments
            }]
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

// create developer
router.post('/', (req, res) => {
    Developer.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then (dbDeveloperData => {
        req.session.save(() => {
            req.session.user_id = dbDeveloperData.id;
            req.session.username = dbDeveloperData.username;
            req.session.loggedIn = true;

            res.json(dbDeveloperData);
        });
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Developer.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbDeveloperData => {
        if (!dbDeveloperData) {
            res.json(404).json({ message: 'No user found with this ID' });
            return;
        }
        res.json(dbDeveloperData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// delete a developer
router.delete('/:id', (req, res) => {
    Developer.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbDeveloperData => {
        if (!dbDeveloperData) {
            res.status(404).json 
        }
    })
});

module.exports = router;
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
        .then(dbUserData => res.json(dbUserData))
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
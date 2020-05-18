// Burger Controller
// Eddie Saunders saunders.eddie@outlook.com 13th May 2020

const express = require("express");
const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

// Route to add burgers that have not been devoured yet
router.post('/api/burgers', (req, res) => {
    console.log("burger post!", req.body);
    burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], (result) => {
        res.json({ id: result.insertId });
    });
});

// Route to update a burger to be devoured when the user click the button
router.put('/api/burgers/:id', (req, res) => {
    let condition = 'id = ' + req.params.id;
    console.log("Our Condition", condition);
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});
// Export routes for server.js to use.
module.exports = router;
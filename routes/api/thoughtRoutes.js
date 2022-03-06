const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtID').get(getSingleThought); // .delete(deleteThought) --add when have delete function


module.exports = router;
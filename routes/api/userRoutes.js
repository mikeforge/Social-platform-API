const router = require('express').Router();
const {
    getUsers,
    getSingleUser
} = require('../../controllers/userController');

router.route('/').get(getUsers);             // .post(createUser);   --string together for same route diff method

router.route('/:userID').get(getSingleUser); // .delete(deleteStudent)



module.exports = router;
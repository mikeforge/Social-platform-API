const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userID').get(getSingleUser); // .delete(deleteStudent) --add when have delete function



module.exports = router;
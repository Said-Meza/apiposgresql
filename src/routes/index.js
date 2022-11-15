const {Router} = require('express');
const router = Router();
const { getUsers,postUsers,getUsersId,eliminarUsersId,UpdateUsers } = require ('../controllers/users.controller.js')


router.get('/users', getUsers);

router.get('/users/:id', getUsersId);

router.delete('/users/:id', eliminarUsersId);

router.put('/users/:id', UpdateUsers);

router.post('/users', postUsers);


module.exports = router;




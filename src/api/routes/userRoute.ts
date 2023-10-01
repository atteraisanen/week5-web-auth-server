import express from 'express';
import {
  checkAlive,
  checkToken,
  userDelete,
  userGet,
  userListGet,
  userPost,
  userPut,
  userDeleteAsAdmin,
  userPutAsAdmin,
} from '../controllers/userController';
import {authenticate} from '../../middlewares';

const router = express.Router();

router
  .route('/')
  .get(userListGet)
  .post(userPost)
  .put(authenticate, userPut)
  .delete(authenticate, userDelete);

router.get('/token', authenticate, checkToken);

router.route('/check').get(checkAlive);

router
  .route('/:id')
  .get(userGet)
  .delete(authenticate, userDeleteAsAdmin)
  .put(authenticate, userPutAsAdmin);

export default router;

const express = require('express');
const router = express.Router();

const {
  getAll,
  read,
  remove,
  update,
  create,
  categoryById,
} = require('../controllers/category');

// Middleware
const { userById } = require('../controllers/user');
const { requireSignin, isAdmin, isAuth } = require('../controllers//auth');

// CRUD Methods

router.get('/categories', getAll);
router.get('/category/:categoryId', read);
router.put(
  '/category/:categoryId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  update
);
router.delete(
  '/category/:categoryId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  remove
);

router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);

router.param('userId', userById);
router.param('categoryById', categoryById);

module.exports = router;

const express = require('express');
const router = express.Router();

const { requireSignin, isAdmin, isAuth } = require('../controllers/auth');

const { userById, read, update } = require('../controllers/user');

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});

// CRUD Routes
router.get('/user/:userId', requireSignin, isAuth, read);
router.put('/uesr/:userId', requireSignin, isAuth, update);

// Run the middleware finduserById when there is a param of :userId
router.param('userId', userById);

module.exports = router;

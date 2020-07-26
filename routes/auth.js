const express = require('express');
const router = express.Router();

const {
  signup,
  signin,
  signout,
  requireSignIn,
} = require('../controllers/auth');

const { userSignupValidator } = require('../validator');

router.post('/register', userSignupValidator, signup);
router.post('/login', signin);
router.post('/logout', signout);

module.exports = router;

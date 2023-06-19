const { Router } = require('express');
const {
  getAllUsers,
  getUserById,
  createUser,
  UpdateUserById,
  deleteUserById,
} = require('../controllers/users.controller');

const router = Router();

/**
 * Get all users
 */
router.get('/', getAllUsers);

/**
 * Get user by id
 */
router.get('/:id', getUserById);

/**
 * Create new user
 */
router.post('/', createUser);

/**
 * Update user by id
 */
router.put('/:id', UpdateUserById);

/**
 * Delete user by id
 */
router.delete('/:id', deleteUserById);

module.exports = router;

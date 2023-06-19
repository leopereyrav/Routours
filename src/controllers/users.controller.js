const fs = require('fs');
const { handleHttpError } = require('../utils/handleError');

/**
 * Get all users
 * @param {*} req
 * @param {*} res
 */
const getAllUsers = async (req, res) => {
  try {
    const users = JSON.parse(
      fs.readFileSync(`${process.cwd()}/src/dev-data/data/users.json`)
    );

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500, 'getAllUsers', error);
  }
};

/**
 * Get user by id
 * @param {*} req
 * @param {*} res
 */
const getUserById = async (req, res) => {
  try {
    res.send('getUserById');
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500, 'getUserById', error);
  }
};

/**
 * Create new user
 * @param {*} req
 * @param {*} res
 */
const createUser = async (req, res) => {
  try {
    res.send('createUser');
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500, 'createUser', error);
  }
};

/**
 * Update user by id
 * @param {*} req
 * @param {*} res
 */
const UpdateUserById = async (req, res) => {
  try {
    res.send('UpdateUserById');
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500, 'UpdateUserById', error);
  }
};

/**
 * Delete user by id
 * @param {*} req
 * @param {*} res
 */
const deleteUserById = async (req, res) => {
  try {
    res.send('deleteUserById');
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500, 'deleteUserById', error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  UpdateUserById,
  deleteUserById,
};

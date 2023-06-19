const { Router } = require('express');
const {
  getAllTours,
  getTourById,
  createTour,
  updateTourById,
  deleteTourById,
} = require('../controllers/tours.controller');

const router = Router();

/**
 * Get all tours
 */
router.get('/', getAllTours);

/**
 * Get tour by id
 */
router.get('/:id', getTourById);

/**
 * Create new tour
 */
router.post('/', createTour);

/**
 * Update tour by id
 */
router.put('/:id', updateTourById);

/**
 * Delete tour by id
 */
router.delete('/:id', deleteTourById);

module.exports = router;

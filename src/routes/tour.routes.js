const {Router} = require('express');
const {getAllTours, getTourById, createTour, updateTour, deleteTour} = require('../controllers/tours.controller');

const router = Router();

/**
 * Get all tours
 */
router.get('/', getAllTours);

/**
 * Get a tour by id
 */
router.get('/:id', getTourById);

/**
 * Create new tour
 */
router.post('/', createTour);

/**
 * Update tour by id
 */
router.put('/:id', updateTour);

/**
 * Delete tour by id
 */
router.delete('/:id', deleteTour);


module.exports = router
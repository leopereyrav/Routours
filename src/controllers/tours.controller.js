const fs = require('fs');
const { handleHttpError } = require('../utils/handleError');

/**
 * Get all tours
 * @param {*} req
 * @param {*} res
 */
const getAllTours = async (req, res) => {
  try {
    const tours = JSON.parse(
      fs.readFileSync(`${process.cwd()}/src/dev-data/data/tours-simple.json`)
    );

    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500, 'getAllTours', error);
  }
};

/**
 * Get tour by id
 * @param {*} req
 * @param {*} res
 */
const getTourById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const tours = JSON.parse(
      fs.readFileSync(`${process.cwd()}/src/dev-data/data/tours-simple.json`)
    );
    const tour = tours[id];

    if (id > tours.length - 1) {
      handleHttpError(res, 'ID Out of Range', 404, 'getTourById');
      return;
    }

    res.status(200).json({
      success: true,
      data: {
        tour,
      },
    });
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500, 'getTourById', error);
  }
};

/**
 * Create new tour
 * @param {*} req
 * @param {*} res
 */
const createTour = async (req, res) => {
  try {
    const tours = JSON.parse(
      fs.readFileSync(`${process.cwd()}/src/dev-data/data/tours-simple.json`)
    );
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);

    tours.push(newTour);
    fs.writeFileSync(
      `${process.cwd()}/src/dev-data/data/tours-simple.json`,
      JSON.stringify(tours)
    );

    res.status(201).json({
      success: true,
      message: 'Tour created',
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500, 'createTour', error);
  }
};

/**
 * Update tour by id
 * @param {*} req
 * @param {*} res
 */
const updateTourById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const tours = JSON.parse(
      fs.readFileSync(`${process.cwd()}/src/dev-data/data/tours-simple.json`)
    );
    const tourKeys = Object.keys(tours[id]);

    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
      handleHttpError(res, 'Bad Request', 400, 'updateTourById', 'Empty body');
      return;
    }

    const containsAll = Object.keys(req.body).every((element) =>
      tourKeys.includes(element)
    );

    if (!containsAll) {
      handleHttpError(
        res,
        'Bad Request',
        400,
        'updateTourById',
        'Some keys dont exist in object'
      );
      return;
    }

    Object.keys(req.body).every((element) => {
      tours[id][element] = req.body[element];
    });

    fs.writeFileSync(
      `${process.cwd()}/src/dev-data/data/tours-simple.json`,
      JSON.stringify(tours)
    );

    res.status(200).json({
      succes: true,
      message: 'Tour updated',
      data: tours[id],
    });
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500, 'updateTourById', error);
  }
};

/**
 * Delete tour by id
 * @param {*} req
 * @param {*} res
 */
const deleteTourById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const tours = JSON.parse(
      fs.readFileSync(`${process.cwd()}/src/dev-data/data/tours-simple.json`)
    );

    if (id > tours.length - 1) {
      handleHttpError(res, 'ID Out of Range', 404, 'deleteTourById');
      return;
    }

    const tourDeleted = tours.splice(id, 1);
    for (let index = id; index < tours.length; index++) {
      tours[index].id = index;
    }

    fs.writeFileSync(
      `${process.cwd()}/src/dev-data/data/tours-simple.json`,
      JSON.stringify(tours)
    );

    res.status(200).json({
      success: true,
      message: 'Tour deleted',
      data: {
        tour: tourDeleted,
      },
    });
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500, 'deleteTourById', error);
  }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTourById,
  deleteTourById,
};

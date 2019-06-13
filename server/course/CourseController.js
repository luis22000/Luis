var express = require('express');
var router = express.Router();

const courses = [
    {
        Nombre: "Buscando a Memo",
        Director: "Lius",
        Duracion: "55"
    }
    
];

const replaceAll = (str, find, replace) => {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
    return replaceAll(course.Nombre, ' ', '-').toLowerCase();
};

// CREATES A NEW USER
router.post('/', function (req, res) {
    const course = {
      Nombre : req.body.Nombre,
      Director : req.body.Director,
      Duracion : req.body.Duracion,
      
    };
  
    if (course.Nombre.length < minCourseNombreLength) {
      res.status(500).send(`Nombre must be at least ${minCourseNombreLength} characters.`);
    } else {
      course.id = generateId(course);
      courses.push(course);
      res.status(200).send(course);
    }
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    res.status(200).send(courses);
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
  const existingCourseIndex = courses.findIndex(course => course.id === req.params.id);
  if(existingCourseIndex == -1) {
    res.status(500).send("There was a problem finding the course.");
  } else {
    const courseFound = Object.assign({}, courses[existingCourseIndex]);
    res.status(200).send(courseFound);
  }
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
  const indexOfCourseToDelete = courses.findIndex(course => course.id === req.params.id);
  if(indexOfCourseToDelete == -1) {
    res.status(500).send("There was a problem finding the course.");
  } else {
    console.log(indexOfCourseToDelete);
    courses.splice(indexOfCourseToDelete, 1);
    res.status(200).send("Course was deleted.");
  }
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
  const existingCourseIndex = courses.findIndex(course => course.id === req.params.id);
  if(existingCourseIndex == -1) {
    res.status(500).send("There was a problem finding the course.");
  } else {
    const courseFound = Object.assign({}, courses[existingCourseIndex]);
    const course = {
      id: courseFound.id,
      Nombre : req.body.Nombre,
      Director : req.body.Director,
      Duracion : req.body.Duracion,
  
    };
    courses.splice(existingCourseIndex, 1, course);
    res.status(200).send(course);
  }
});


module.exports = router;
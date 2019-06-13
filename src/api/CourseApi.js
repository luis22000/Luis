import SERVER from './serverUrl';

const SERVER_URL = `${SERVER}/pelicula`;

class CourseApi {
    static getAllCourses() {
      return fetch(SERVER_URL).then(response => response.json());
    }

    static saveCourse(pelicula) {
      if (pelicula.id) {
        return fetch(`${SERVER_URL}/${pelicula.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pelicula)
        }).then(response => response.json());
      } else {
        return fetch(SERVER_URL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pelicula)
        }).then(response => response.json());
      }
    }

    static deleteCourse(peliculaID) {
        return fetch(`${SERVER_URL}/${peliculaID}`, {method:'delete'});
    }


    static getCourse(peliculaID) {
        return fetch(`${SERVER_URL}/${peliculaID}`).then(response => response.json());
    }

}

export default CourseApi;

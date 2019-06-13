import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../common/FieldInput';
import SelectInput from '../common/SelectInput';


export const CourseForm = ({ handleSubmit, pristine, reset, submitting, heading, Nombre, handleSave, handleCancel }) => {
    return (
        <form onSubmit={handleSubmit(handleSave)}>
            <h1>Crear o Editar</h1>
			
		
			

            <Field
                type="text"
                name="Nombre"
                label="Nombre"
                placeholder="Nombre de la Pelicula"
                component={FieldInput}
            />

            

            <Field
                type="text"
                name="Director"
                label="Director"
                placeholder="Director de la Pelicula"
                component={FieldInput}
            />

            <Field
                type="text"
                name="Duracion"
                label="Duracion"
                placeholder="Duracion Pelicula"
                component={FieldInput}
            />

            <div>
                <button type="submit" disabled={submitting} className="btn btn-primary"><i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit</button>

                {heading === 'Add' && <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default btn-space">Clear Values</button>}

                <button type="button" className="btn btn-default btn-space" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};





const validate = values => {
    const errors = {};

    if (!values.Nombre) {
        errors.title = 'Requerido';
    }

    if (!values.Director) {
        errors.category = 'Requerido';
    }

    if (!values.Duracion) {
        errors.length = 'Requerido';
    }

    

    return errors;
};



export default reduxForm({
    form: 'CourseForm',
    validate
})(CourseForm);

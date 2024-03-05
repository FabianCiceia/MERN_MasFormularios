import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Form.css'
const MyForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(2,'First Name must be at least 2 characters'),
        lastName: Yup.string()
        .min(2,'last Name must be at least 2 characters'),
        email: Yup.string()
            .email('Correo no valido'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .oneOf([Yup.ref('confirmPassword'), null], 'Las contraseñas deben coincidir'),
    });

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
            <Form>
                <div className='form'>
                    <label className='form-label' htmlFor="firstName">First Name:</label>
                    <Field type="text" id="firstName" name="firstName" />
                </div>
                <div className="error-message">
                    <ErrorMessage name="firstName" component="div" />
                </div>

                <div className='form'>
                    <label className='form-label' htmlFor="lastName">Last Name:</label>
                    <Field type="text" id="lastName" name="lastName" />
                </div>
                <div className="error-message">
                    <ErrorMessage name="lastName" component="div" />
                </div>

                <div className='form'>
                    <label className='form-label' htmlFor="email">Email:</label>
                    <Field type="text" id="email" name="email" />
                </div>
                <div className="error-message">
                    <ErrorMessage name="email" component="div" />
                </div>

                <div className='form'>
                    <label className='form-label' htmlFor="confirmPassword">Confirm password:</label>
                    <Field type="password" id="confirmPassword" name="confirmPassword" />
                </div>
                <div className="error-message">
                    <ErrorMessage name="password" component="div" />
                </div>

                <div className='form'>
                    <label className='form-label' htmlFor="password">Password:</label>
                    <Field type="password" id="password" name="password" />
                </div>

                <div>
                    <button className='form-button' type="submit">Enviar</button>
                </div>
            </Form>
        </Formik>
    );
};

export default MyForm;

import { Field, Form, Formik, ErrorMessage } from 'formik'
import n from './Login.module.css'
import { Navigate } from 'react-router-dom';

const Login = (props) => {

    return (
        <div className={n.formDiv}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'required'
                    } else if (values.email.length < 10) {
                        errors.password = 'symbols minimum - 10'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    props.login(values)
                    setSubmitting(false)
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field name={'email'} type={'input'} placeholder={'Email'} className={n.input} />
                        <ErrorMessage name={'email'} component={'div'} className={n.emailError} />
                        <Field name={'password'} type={'input'} placeholder={'Password'} className={n.input} />
                        <ErrorMessage name={'password'} component={'div'} className={n.passwordError} />
                        <Field name={'rememberMe'} type={'checkbox'} className={n.rememberMe} /><span className={n.rememberMeSpan}>Remember me</span>
                        <button type={'submit'} disabled={isSubmitting} className={n.loginButton} >login</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login
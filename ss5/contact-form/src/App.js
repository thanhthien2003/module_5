import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import './App.css'

function App() {
  return (
    <>
      <h1>Contact Form</h1>
      <Formik initialValues={{ name: '', email: '', phone: '', message: '' }}
        validationSchema={yup.object({
          name: yup.string().required('Required'),
          email: yup.string().required('Required').email(),
          phone: yup.string().required('Required').max(10, "khong duoc qua 10 so"),
          message: yup.string().required('Required'),
        })}
      >

        <Form>
            <div>
             <label htmlFor='name'>Name:  </label>
              <Field id='name' type='text' name='name' />
            </div>
            <ErrorMessage name='name' component='div' className='text-color' />
            <div>
              <label htmlFor='email'>Email:  </label>
              <Field id='email' type='email' name='email' />
            </div>
            <ErrorMessage name='email' component='div' className='text-color' />
            <div>
              <label htmlFor='phone'>Phone:  </label>
              <Field id='phone' type='text' name='phone' />
            </div>
            <ErrorMessage name='phone' component='div' className='text-color' />
            <div>
              <label htmlFor='message'>Message:  </label>
              <Field id='message' name='message'></Field>
            </div>
            <ErrorMessage name='message' component='div' className='text-color' />
            <div>
              <button type='submit'>Submit</button>
            </div>
        </Form>
      </Formik>
    </>
  );
}

export default App;

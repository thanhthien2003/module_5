import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import './App.css'

function App() {
  return (
    <>
      <h1>Contact Form</h1>
      <Formik initialValues={{ name: '', email: '', phone: '', message: '' }}
        validationSchema={yup.object({
          name: yup.string().required('Không được để trống tên'),
          email: yup.string().required('Không được để trống địa chỉ email').email(),
          phone: yup.string().required('Không được để trống số điện thoại').max(10, "Số điện thoại không quá 10 số"),
          message: yup.string().required('Không được để trống mô tả'),
        })}
      >

        <Form>
            <div>
             <label htmlFor='name'>Tên:  </label>
              <Field id='name' type='text' name='name' />
            </div>
            <ErrorMessage name='name' component='div' className='text-color' />
            <div>
              <label htmlFor='email'>Email:  </label>
              <Field id='email' type='email' name='email' />
            </div>
            <ErrorMessage name='email' component='div' className='text-color' />
            <div>
              <label htmlFor='phone'>Số điện thoại:  </label>
              <Field id='phone' type='text' name='phone' />
            </div>
            <ErrorMessage name='phone' component='div' className='text-color' />
            <div>
              <label htmlFor='message'>Mô tả:  </label>
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

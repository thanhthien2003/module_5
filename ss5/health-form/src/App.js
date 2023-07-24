import './App.css';
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
function App() {
  return (

    <div >
      <h1>Tờ khai y tế</h1>
      <Formik initialValues={{
        fullName: "",
        idCard: "",
        dateOfBirth: "",
        gender: "",
        country: "",
        company: "",
        department: "",
        healthInsuranceCard: "",
        province: "",
        wards: "",
        numberOfHouses: "",
        phone: "",
        email: ""
      }}
        validationSchema={yup.object({
          fullName: yup.string().required('Tên không được để trống'),
          idCard: yup.string().required('Idcard không được để trống'),
          dateOfBirth: yup.number().required('Ngày sinh không được để trống').min(1900),
          country: yup.string().required('Quốc gia không được để trống'),
          company: yup.string().required('Công ty không được để trống'),
          department: yup.string().required('Bộ phận làm việc không được để trống'),
          healthInsuranceCard: yup.string().required('Bảo hiểm y tế không được để trống'),
          province: yup.string().required('Tỉnh thành không được để trống'),
          wards: yup.string().required('Quận huyện không được để trống'),
          numberOfHouses: yup.string().required('Số nhà không được để trống'),
          phone: yup.string().required('Số điện thoại không được để trống'),
          email: yup.string().required('Email không được để trống').matches("^[A-Z0-9._%+-]+@[A-Z0-9.-]+[A-Z]{2,}$",'Địa chỉ email không hợp lệ')
        })}

      >
        <Form>
          <div>
            <label htmlFor='fullName'> Họ và tên :</label>
            <Field type='text' id='fullName' name='fullName' />
            <ErrorMessage component="div" name='fullName' className='text-red' />
          </div>
          <div>
            <label htmlFor='idCard'> Số CMND/CCCD:</label>
            <Field type='string' id='idCard' name='idCard' />
            <ErrorMessage component="div" name='idCard' className='text-red' />
          </div>
          <div>
            <label htmlFor='dateOfBirth'> Năm sinh :</label>
            <Field type='number' id='dateOfBirth' name='dateOfBirth' />
            <ErrorMessage component="div" name='dateOfBirth' className='text-red' />
          </div>
          <div>
            <label className='gender' htmlFor='male'>Nam</label>
            <Field type='radio' id='male' name='gender' value="male" />
            <label className='gender' htmlFor='female'>Nữ</label>
            <Field type='radio' id='female' name='gender' value="female" />
          </div>
          <div>
            <label htmlFor='country'> Quốc tịch :</label>
            <Field type='text' id='country' name='country' />
            <ErrorMessage component="div" name='country' className='text-red' />
          </div>
          <div>
            <label htmlFor='company'> Công ty làm việc :</label>
            <Field type='text' id='company' name='company' />
          </div>
          <div>
            <label htmlFor='department'> Bộ phận làm việc :</label>
            <Field type='text' id='department' name='department' />
          </div>
          <div>
            <label className='manifestation' htmlFor='healthInsuranceCard'> Có thẻ bảo hiểm y tế :</label>
            <Field type='checkbox' id='healthInsuranceCard' name='healthInsuranceCard' />
          </div>
          <div>
            <h2>Địa chỉ liên lạc tại Việt Nam</h2>
          </div>
          <div>
            <label htmlFor='province'> Tỉnh thành :</label>
            <Field type='text' id='province' name='province' />
            <ErrorMessage component="div" name='province' className='text-red' />
          </div>
          <div>
            <label htmlFor='district'>Quận /Huyện :</label>
            <Field type='text' id='district' name='district' />
            <ErrorMessage component="div" name='district' className='text-red' />
          </div>
          <div>
            <label htmlFor='wards'>Phường/Xã :</label>
            <Field type='text' id='wards' name='wards' />
            <ErrorMessage component="div" name='wards' className='text-red' />
          </div>
          <div>
            <label htmlFor='numberOfHouses'>Số nhà,phố,tổ dân số/thôn/đội :</label>
            <Field type='text' id='numberOfHouses' name='numberOfHouses' />
            <ErrorMessage component="div" name='numberOfHouses' className='text-red' />
          </div>
          <div>
            <label htmlFor='phone'>Điện thoại :</label>
            <Field type='text' id='phone' name='phone' />
            <ErrorMessage component="div" name='phone' className='text-red' />
          </div>
          <div>
            <label htmlFor='email'>Email :</label>
            <Field type='text' id='email' name='email' />
            <ErrorMessage component="div" name='email' className='text-red' />
          </div>
          <div>
            <label htmlFor='tag1'>Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/ vùng lãnh thổ nào(Có thể đi qua nhiều quốc gia)? :</label>
            <Field as='textarea' id='tag1' name='tag1' />
          </div>
          <div>
            <p >Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện  dấu hiệu nào sau đây không ? :</p>
            <div>
              <Field type="checkbox" id="fever" name="fever" value="fever" />
              <label className="manifestation" htmlFor='fever'>Sốt</label>
            </div>
            <div>
              <Field type="checkbox" id="cough" name="cough" value="cough" />
              <label className="manifestation" htmlFor='cough'>Ho</label>
            </div>
            <div>
              <Field type="checkbox" id="sultry" name="sultry" value="sultry" />
              <label className="manifestation" htmlFor='sultry'>Khó thở</label>
            </div>
            <div>
              <Field type="checkbox" id="pneumonia" name="pneumonia" value="pneumonia" />
              <label className="manifestation" htmlFor='pneumonia'>Viêm phổi</label>
            </div>
            <div>
              <Field type="checkbox" id="soreThroat" name="soreThroat" value="soreThroat" />
              <label className="manifestation" htmlFor='soreThroat'>Đau họng</label>
            </div>
            <div>
              <Field type="checkbox" id="tired" name="tired" value="tired" />
              <label className="manifestation" htmlFor='tired'>Mệt mỏi</label>
            </div>
          </div>
          <div>
            <p>
              Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với
            </p>
            <div>
              <Field type="checkbox" id="task1" name="task1" value="task1" />
              <label className="manifestation" htmlFor='task1'>Người bệnh nghi ngờ, mắc bệnh COVID-19</label>
            </div>
            <div>
              <Field type="checkbox" id="task2" name="task2" value="task2" />
              <label className="manifestation" htmlFor='task2'>Người từ nước có COVID-19</label>
            </div>
            <div>
              <Field type="checkbox" id="task3" name="task3" value="task3" />
              <label className="manifestation" htmlFor='task3'>Người có biểu hiện(Sốt, Ho, Khó thở, Viêm phổi)</label>
            </div>
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </Form>
      </Formik>
    </div>

  );
}

export default App;

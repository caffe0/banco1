
import './App.css';
import { Formik, Form, Field, ErrorMessage} from  "formik"
import * as yup from "yup"
import Axios from "axios"

function App() {

  const handleClickLogin = (values) => console.log(values)
  const validationLogin = yup.object().shape({
    email: yup
      .string()
      .email("Escreva um email válido")
      .required(),
    password: yup
    .string()
    .min(4,"Sua senha deve ter no mínimo 4 dígitos")
    .max(6,"Sua senha deve pssuir no máximo 6 dígitos")
    .required()
  })
  const handleClickRegister = (values) => {
    Axios.post("http://localhost:3306", {
      email: values.email,
      password: values.password
    }).then((response) => {
      console.log(response);
    });
  };
  const valodationRegister = yup.object().shape({
    email: yup
      .string()
      .email("Escreva um email válido")
      .required(),
    password: yup
    .string()
    .min(4,"Sua senha deve ter no mínimo 4 dígitos")
    .max(6,"Sua senha deve pssuir no máximo 6 dígitos")
    .required(),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"),null],"As senhas devem ser iguais")
  })

  return (
  



    
    <div className="container">
      <h1>Login</h1>
      <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
        <Form className='login-form'>
          <div className='login-form-group'>
            <Field name="email" className="form-field" placeHolder="Email"/>
            <ErrorMessage component="span"
            name='email'
            className='form-error'
            />
          </div>
          <div className='login-form-group'>
            <Field name="password" className="form-field" placeHolder="Senha"/>
            <ErrorMessage component="span"
            name='password'
            className='form-error'
            />
          </div>
          <button className='button' type='submit'>Login</button>
        </Form>
      </Formik>
      <h1>Register</h1>
      <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={valodationRegister}>
        <Form className='login-form'>
          <div className='login-form-group'>
            <Field name="email" className="form-field" placeHolder="Email"/>
            <ErrorMessage component="span"
            name='email'
            className='form-error'
            />
          </div>
    
          <div className='login-form-group'>
            <Field name="password" className="form-field" placeHolder="Senha"/>
            <ErrorMessage component="span"
            name='password'
            className='form-error'
            />
          </div>
          <div className='login-form-group'>
            <Field name="confirmPassword" className="form-field" placeHolder="Confirme a Senha"/>
            <ErrorMessage component="span"
            name='confirmPassword'
            className='form-error'
            />
          </div>
          <button className='button' type='submit'>Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;


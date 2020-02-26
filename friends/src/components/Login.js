import React from "react";
import {withFormik, Form, Field} from "formik";
import axios from "axios";
import styled from "styled-components";

const StyledForm = styled(Form)`
  width: 30%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function LoginForm() {
  return (
    <StyledForm>
      <Field type="text" name="username" />
      <Field type="password" name="password" />
      <input type="submit" value="Log in" />
    </StyledForm>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues: () => ({username: 'Lambda School', password: 'i<3Lambd4'}),
  handleSubmit(credentials, {props: {history}}) {
    axios.post('http://localhost:5000/api/login', credentials)
      .then(({data: {payload}}) => {
        localStorage.setItem('token', payload);
        history.push('/');
      })
  }
})(LoginForm);

export default FormikLoginForm;

import React from "react";
import {Form, Field, withFormik} from "formik";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";

const StyledForm = styled(Form)`
  width: 30%;
  height: 200px;
  margin: 5px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: #444;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

function FriendForm({toggleEdit, isSubmitting}) {
  return (
    <StyledForm>
      Name<Field type="text" name="name" placeholder="Input name" />
      Age<Field type="text" name="age" placeholder="Input age" />
      Email<Field type="text" name="email" placeholder="Input email" />
      <input disabled={isSubmitting} type="submit" value={toggleEdit ? "Update!" : "Add!"} />
    </StyledForm>
  );
}

const FormikFriendForm = withFormik({
  mapPropsToValues: ({name = '', age = '', email = ''}) => ({name, age, email}),
  handleSubmit(values, {setSubmitting, props: {setFriends, id, toggleEdit}}) {
    if (toggleEdit) {
      axiosWithAuth().put(`http://localhost:5000/api/friends/${id}`, values)
        .then(({data}) => {
          setFriends(data);
          toggleEdit();
          setSubmitting(false);
        })
        .catch(() => setSubmitting(false));
    } else {
      axiosWithAuth().post("http://localhost:5000/api/friends", values)
        .then(({data}) => {
          setFriends(data);
          setSubmitting(false);
        })
        .catch(() => setSubmitting(false));
    }
  }
})(FriendForm);

export default FormikFriendForm;

import React, {useState} from "react";
import styled from "styled-components";
import FormikFriendForm from "./Form";
import axiosWithAuth from "../utils/axiosWithAuth";

const StyledFriend = styled.div`
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

const Name = styled.h3`
  margin: 0;
  padding: 0;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
`;

function Friend({id, name, age, email, setFriends}) {
  const [editing, setEditing] = useState(false);

  function deleteFriend() {
    axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`)
      .then(({data}) => setFriends(data))
  }

  function toggleEdit() {
    setEditing(edit => !edit);
  }

  if (editing) return <FormikFriendForm  {...{id, name, age, email, setFriends, toggleEdit}} />;

  return (
    <StyledFriend>
      <Name>{name}</Name>
      <Text>Age: {age}</Text>
      <Text>Email: {email}</Text>
      <div>
        <button onClick={deleteFriend}>Delete</button>
        <button onClick={toggleEdit}>Edit</button>
      </div>
    </StyledFriend>
  );
}

export default Friend;

import React, {useState, useEffect} from "react";
import styled from "styled-components";
import FormikFriendForm from "./Form";
import Friend from "./Friend";
import axiosWithAuth from "../utils/axiosWithAuth";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth().get("http://localhost:5000/api/friends")
      .then(({data}) => setFriends(data));
  }, []);

  return (
    <Container>
      {friends.map(smurf => <Friend key={smurf.id} {...smurf} setFriends={setFriends}/>)}
      <FormikFriendForm setFriends={setFriends} />
    </Container>
  );
}

export default Friends;

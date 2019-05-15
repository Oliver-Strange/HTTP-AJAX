import React from "react";
import styled from "styled-components";

function FriendForm() {
    
  return (
    <StyledForm>
        <input type='text' placeholder='name'></input>
        <input type='text' placeholder='age'></input>
        <input type='text' placeholder='email'></input>
        <button>Add Friend</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  border: 1px solid black;
`

export default FriendForm;

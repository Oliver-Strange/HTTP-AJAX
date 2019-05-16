import React from "react";
import styled from "styled-components";

class FriendForm extends React.Component {
    state = {
      friends: this.props.activeFriend || {
        name: '',
        age: '', 
        email: '',
      }
    };

    changeHandler = event => {
      event.persist();
      this.setState(prevState => ({
        ...prevState,
        friends: {
          ...prevState.friends,
          [event.target.name]: event.target.value
        }
      }));
    };

    submitHandler = e => {
      e.preventDefault();
      if (this.props.activeFriend) {
        this.props.updateFriendForm(this.state.friends);
      } else {
        this.props.addFriend(this.state.friends);
      }
    };

    render(){
      return (
        
    <StyledForm onSubmit={this.submitHandler}>
        <h2>{this.props.activeFriend ? "Update Friend" : "Add a Friend"}</h2>
        <input name="name" type='text' placeholder='name' value={this.state.friends.name} onChange={this.changeHandler}></input>
        <input name="age" type='text' placeholder='age' value={this.state.friends.age} onChange={this.changeHandler}></input>
        <input name="email" type='text' placeholder='email' value={this.state.friends.email} onChange={this.changeHandler}></input>
        <button>{this.props.activeFriend ? "Update Friend" : "Add New Friend"}</button>
    </StyledForm>
    );
  }
  
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  border: 1px solid black;
`

export default FriendForm;

import React from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

import Home from "./Components/Home";
import FriendsList from "./Components/FriendsList";
import Friend from "./Components/Friend";
import FriendForm from "./Components/FriendForm";

import styled from "styled-components";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeFriend: null,
      friends: [],
      friend: {
        name: "",
        age: "",
        email: ""
      },
      message: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res.data);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ message: "Data fetching failed!" });
      });
  }

  addNewFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push("/friends-list");
      })
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push("/friends-list");
      })
      .then(err => console.log(err));
  };

  populateFriendForm = friend => {
    this.setState({
      activeFriend: friend
    });
    this.props.history.push("/friend-form");
  };

  updateFriendForm = friend => {
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({
          activeFriend: null,
          friends: res.data
        });
        this.props.history.push("/friends-list");
      })
      .then(err => console.log(err));
  };

  render() {
    console.log(this.state.message);
    return (
      <div className="App">
        <StyledContainer>
          <StyledNav>
            <h1>Friends!</h1>
            <div>
              <StyledNavLink exact to="/">Home</StyledNavLink>
              <StyledNavLink to="/friends-list">Friend list</StyledNavLink>
              <StyledNavLink to="/friend-form">Add friend</StyledNavLink>
            </div>
          </StyledNav>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/friends-list"
            render={props => (
              <FriendsList {...props} friends={this.state.friends} />
            )}
          />
          <Route
            path="/friends-list/:id"
            render={props => (
              <Friend
                {...props}
                friends={this.state.friends}
                deleteFriend={this.deleteFriend}
                populateFriendForm={this.populateFriendForm}
              />
            )}
          />
          <Route
            path="/friend-form"
            render={props => (
              <FriendForm
                {...props}
                addFriend={this.addNewFriend}
                activeFriend={this.state.activeFriend}
                updateFriendForm={this.updateFriendForm}
              />
            )}
          />
        </StyledContainer>
      </div>
    );
  }
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledNav = styled.nav`
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;

`;

const StyledNavLink = styled(NavLink)`
  margin: 20px;
  text-decoration: none;
  color: black;
`;

export default App;

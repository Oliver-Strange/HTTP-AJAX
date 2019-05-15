import React from "react";
import axios from "axios";
import FriendsList from './Components/FriendsList';
import FriendForm from './Components/FriendForm';


import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      message: ''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(res => {
      console.log(res.data); 
      this.setState({ friends: res.data})
    })
    .catch(err => {
      console.log(err);
      this.setState({
        message: "Data fetching failed!"
      });
    });
  }

  render() {
    console.log(this.state.message)
    return (
      <div className="App">
        <FriendForm />
        <FriendsList friends={this.state.friends} />
        
      </div>
    );
  }
}



export default App;

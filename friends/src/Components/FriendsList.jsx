import React from 'react';
import styled from "styled-components";


function FriendsList(props) {
    function routeToFriend(event, friend) {
        event.preventDefault();
        props.history.push(`/friends-list/${friend.id}`);
    }
    return (
        <StyledFriendWrapper>
            {props.friends.map(friend => (
                <StyledFriend key={friend.id} onClick={event => routeToFriend(event, friend)}>
                    <h1>Name: {friend.name}</h1>
                    <h2>Age: {friend.age}</h2>
                    <p>Email: {friend.email}</p>
                </StyledFriend>
            ))}
        </StyledFriendWrapper>
    )
}

const StyledFriendWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    
`;

const StyledFriend = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    height: 150px;
    width: 250px;
    border: 1px solid grey;
    box-shadow: 0 0 7px 1px black; 

    h1 {
        margin: 5px auto;
    }

    h2 {
        margin 5px auto;
    }
`

export default FriendsList;
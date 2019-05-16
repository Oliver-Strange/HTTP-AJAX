import React from 'react';
import styled from "styled-components";


function FriendsList(props) {
    return (
        <StyledFriendWrapper>
            {props.friends.map(friend => (
                <StyledFriend key={friend.id}>
                    <h1>Name: {friend.name}</h1>
                    <h2>Age: {friend.age}</h2>
                    <p>Email: {friend.email}</p>
                    <button>Update Info</button>
                    <button>Remove Friend</button>
                </StyledFriend>
            ))}
        </StyledFriendWrapper>
    )
}

const StyledFriendWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    
`;

const StyledFriend = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;

    h1 {
        margin: 5px auto;
    }

    h2 {
        margin 5px auto;
    }
`

export default FriendsList;
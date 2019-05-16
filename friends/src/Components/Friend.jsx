import React from 'react';
// import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Friend(props) {
    const friend = props.friends.find(
        friend => `${friend.id}` === props.match.params.id
    );
    if (!props.friends.length || !friend) {
        return <h2>Finding Friends...</h2>;
    }

    const deleteHandler = event => {
        event.preventDefault();
        props.deleteFriend(props.match.params.id)
    }

    const populateFriendForm = event => {
        event.preventDefault();
        props.populateFriendForm(friend)
    }

    return(
        <StyledFriend>
            <h1>{friend.name}</h1>
            <h2>{friend.age}</h2>
            <h2>{friend.email}</h2>
            <button onClick={populateFriendForm}>Update Info</button>
            <button onClick={deleteHandler}>Remove Friend</button>
        </StyledFriend>
    )
}

const StyledFriend = styled.div`
    display: flex;
    
`

export default Friend;
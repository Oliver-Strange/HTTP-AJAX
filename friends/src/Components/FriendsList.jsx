import React from 'react';

function FriendsList(props) {
    return (
        <div className='fLWrapper' >
            {props.friends.map(friend => (
                <div className='friend' key={friend.id}>
                    <h1>{friend.name}</h1>
                    <h2>{friend.age}</h2>
                    <p>{friend.email}</p>
                </div>
            ))}
        </div>
    )
}

export default FriendsList;
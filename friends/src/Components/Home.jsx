import React from 'react';

function Home(props) {
    const routeToFriendsList = event => {
        event.preventDefault();
        props.history.push('/friends-list');
    };

    return (
        <div>
            <div>
                <h1>友達</h1>
            <h4>friends</h4>
            </div>
            <button onClick={routeToFriendsList}>Go to friends list!</button>
        </div>
    );
}

export default Home;
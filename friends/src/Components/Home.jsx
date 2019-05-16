import React from 'react';
import styled from 'styled-components';

function Home(props) {
    const routeToFriendsList = event => {
        event.preventDefault();
        props.history.push('/friends-list');
    };

    return (
        <StyledHomeContainer>
            <StyledLogo>
                <h1>友達</h1>
                <h4>friends</h4>
            </StyledLogo>
            <button onClick={routeToFriendsList}>Go to friends list!</button>
        </StyledHomeContainer>
    );
}

const StyledHomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20% auto;

    button {
        border-radius: 10px;
        border-style: none;
        padding: 5px;
    }
`;

const StyledLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 5rem;
        margin: 5px;
        line-height: .8;
    }

    h4 {
        font-size: 2rem;
        margin: 5px;
    }
`

export default Home;
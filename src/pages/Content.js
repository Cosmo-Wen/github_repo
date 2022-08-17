import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link';
import styled from '@emotion/styled';

const Container = styled.div `
    background-color: #ededed;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Roboto
`;

const Content = (props) => {
    const {username, repo} = props;

    return (
        <Container>
            <Paper variant = "outlined" sx = {{width: 600, height: 600}}>
                <Link href="https://github.com/" underline="hover">
                    <h1>{username} - {repo}</h1>
                </Link>
                <body1> Description </body1>
            </Paper>
        </Container>
    );
};

export default Content;
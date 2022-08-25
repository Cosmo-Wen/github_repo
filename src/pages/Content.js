import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
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
    const [username, repo] = [useParams().username, useParams().repo];

    const [content, setContent] = useState({
        name: "",
        count: "",
        des: "",
        url: "",
    });

    useEffect(() => {
        const fetchContent = () => {
            return fetch ("https://api.github.com/repos/" + username + "/" + repo)
            .then((response) => response.json())
            .then((data) => {
                setContent({
                    name: data.full_name,
                    count: data.stargazers_count,
                    des: data.description,
                    url: data.html_url,
                });
            });
        }
        fetchContent();
    }, []);

    return (
        <Container>
            <Paper variant = "outlined" sx = {{width: 600, height: 300}}>
                <Link href = {"https://github.com/" + username + "/" + repo} underline = "hover">
                    <h1>{content.name} - {content.count}</h1>
                </Link>
                <body1> {content.des} </body1>
            </Paper>
        </Container>
    );
};

export default Content;
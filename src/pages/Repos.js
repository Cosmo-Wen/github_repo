import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

const Container = styled.div `
    background-color: #ededed;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
`;

const Profile = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const List = styled.div `
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 48px;
    overflow: hidden;
    overflow-y: scroll;
`

const Repos = (props) => {
    const {username, repo, setrepo} = props;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/" + username + "/" + repo)
    };
    
    return (
        <Container>
            <Profile>
                    <Avatar src = "https://avatars.githubusercontent.com/u/2?v=4" alt = "avatar" sx={{ width: 200, height: 200, margin: 3,}}/>
                    <body1 style = {{fontSize: "30px"}}>{username}</body1>
                    <Box sx = {{width: 270, height: 270,}} />
            </Profile>
            <Box>
                <List><Paper variant = "outlined" sx = {{minWidth: 600, height: 500}}>
                    <Box sx = {{margin: 5}}>
                        <Link href="#" underline="hover" onClick = {handleClick} style = {{fontSize: "20px"}}>
                            Repo Name
                        </Link>
                    </Box>
                </Paper></List>
            </Box>
        </Container>
    )
};

export default Repos;
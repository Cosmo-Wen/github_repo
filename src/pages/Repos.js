import React from 'react';
import { useState, useEffect } from 'react'
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

    const [userInfo, setUserInfo] = useState(new Array);

    const [avatar, setAvatar] = useState("");

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/" + username + "/" + repo)
    };

    const fetchAvatar = () => {
        return fetch ("https://api.github.com/users/" + username)
        .then((response) => response.json())
        .then((data) => {
            setAvatar(data.avatar_url);
        });
    };

    const fetchInfo = () => {
        return fetch ("https://api.github.com/users/" + username + "/repos")
        .then((response) => response.json())
        .then((result) => {
            const list = result.map((item) => {
                return ({
                    name: item.name,
                    count: item.stargazers_count,
                });
            }
            );
            setUserInfo(list);
        });
    };

    const fetchData = () => {
        fetchAvatar();
        fetchInfo();
    };
    
    useEffect(() => {
        fetchData();
    }, []); 

    return (
        <Container>
            <Profile>
                <Avatar src = {avatar} alt = "avatar" sx={{ width: 200, height: 200, margin: 3,}}/>
                <body1 style = {{fontSize: "30px"}}>{username}</body1>
                <Box sx = {{width: 270, height: 270,}} />
            </Profile>
            <Box>
                <List><Paper variant = "outlined" sx = {{minWidth: 600, height: 500}}>
                    <Box sx = {{display: "flex", flexDirection: "column"}}>
                    {userInfo.map((item) => (
                        <Box sx = {{backgroundColor: "#ededed", padding: 1, margin: 1, height: 40, display: "flex", alignItems: "center"}}>
                            <Link href="#" underline="hover" onClick = {handleClick} style = {{fontSize: "20px"}}>
                                {item.name}
                            </Link>
                        </Box>
                    ))}      
                    </Box>
                </Paper></List>
            </Box>
        </Container>
    )
};

export default Repos;
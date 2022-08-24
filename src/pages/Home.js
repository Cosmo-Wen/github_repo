import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

const Container = styled.div `
    background-color: #ededed;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Roboto
`;

const Home = (props) => {
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/" + username)
    };
    
    const handleTextChange = (event) => {
        setUsername(event.target.value);
    };

    return (
        <Container>
            <Box padding = {2}>
                <GitHubIcon sx = {{fontSize: 50}} />
            </Box>
            <Paper variant = "outlinedcd">
                <Box padding = {2}>
                    <body1 style={{fontSize: "30px"}}>Github Repository Login</body1>
                </Box>
                <Box padding = {1}>
                    <TextField
                        id = "outlined-required"
                        label = "Username"
                        helperText = "Please enter your username to search for Repos"
                        sx = {{display: "flex", justifyContent: "center", marginBottom: "10px", marginX: "20px"}}
                        value = {username}
                        onChange = {handleTextChange}
                        onKeyPress = {(e) => {
                            if (e.key === "Enter") {
                                handleClick();
                            }
                        }}
                    />
                </Box>
                <Box sx = {{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
                    <Button variant="contained" color = "success" onClick = {handleClick}>Search</Button>
                </Box>
            </Paper>
        </Container>
    )
};

export default Home;
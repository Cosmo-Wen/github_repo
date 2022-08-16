import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

const Container = styled.div `
    font: "Roboto";
    background-color: #ededed;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Home = () => {
    return (
        <Container>
            <GitHubIcon />
            <Paper elevation = {0} variant = "outlined">
                <Box padding = {2}>
                    <body style={{fontFamily: "Roboto", fontSize: "36px"}}>Github Repository Login</body>
                </Box>
                <Box padding = {1} sx = {{allignItmes: "center"}}>
                    <TextField
                        id="outlined-required"
                        label="Username"
                    />
                    <Button variant="contained" color = "success">Sign In</Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default Home;
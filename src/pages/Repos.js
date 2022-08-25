import React from 'react';
import { useState, useEffect, useCallback, useRef } from 'react'
import { Link as RouterLink, useParams, useNavigate } from 'react-router-dom';
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
    const {setError} = props;

    const username = useParams().username;

    const [userInfo, setUserInfo] = useState([]);

    const [avatar, setAvatar] = useState("");

    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);

    const [more, setMore] = useState(false);

    const observer = useRef();
    
    const navigate = useNavigate();

    const lastRepo = useCallback((r) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(e => {
            if (e[0].isIntersecting && more) {
                setPage(prev => prev + 1)
            }
        });
        if (r) observer.current.observe(r);
    }, [loading, more])

    const fetchAvatar = () => {
        return fetch ("https://api.github.com/users/" + username)
        .then((response) => {
            if (response.ok) {
                setError(false);
                return response.json();
            }
            else {
                navigate("/")
                setError(true);
            }
        })
        .then((data) => {
            setAvatar(data.avatar_url);
        });
    };

    const fetchInfo = () => {
        return fetch ("https://api.github.com/users/" + username + "/repos?per_page=10&page=" + page)
        .then((response) => {
            if (response.ok) {
                setError(false);
                return response.json();
            }
            else {
                setError(true);
                navigate("/")
            }
        })
        .then((result) => {
            const list = result.map((item) => {
                return ({
                    name: item.name,
                    count: item.stargazers_count,
                });
            }
            );
            setUserInfo(prev => {return [...prev, ...list]});
            setMore(result.length > 0);
            setLoading(false);
        });
    };

    const fetchData = () => {
        fetchAvatar();
        fetchInfo();
    };
    
    useEffect(() => {
        fetchAvatar();
    }, []); 

    useEffect(() => {
        setLoading(true);
        fetchInfo();
    }, [page]);

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
                    {userInfo.map((item, idx) => {
                        if (userInfo.length === idx + 1) {
                            return (
                                <Box ref = {lastRepo} key = {idx} sx = {{backgroundColor: "#ededed", padding: 1, margin: 1, height: 40, display: "flex", alignItems: "center"}}>
                                    <Link component={RouterLink} to={"./" + item.name} underline="hover" style = {{fontSize: "20px"}}>
                                    {idx + 1}. {item.name} - {item.count}
                                    </Link>
                                </Box>
                            )
                        }
                        else {
                            return (
                                <Box key = {idx} sx = {{backgroundColor: "#ededed", padding: 1, margin: 1, height: 40, display: "flex", alignItems: "center"}}>
                                    <Link component={RouterLink} to={"./" + item.name} underline="hover" style = {{fontSize: "20px"}}>
                                        {idx + 1}. {item.name} - {item.count}
                                    </Link>
                                </Box>
                            )
                        }
                    })}
                    {loading &&
                        <Box sx = {{backgroundColor: "#ededed", padding: 1, margin: 1, height: 40, display: "flex", alignItems: "center"}}>
                            <body1 style = {{fontSize: "20px"}}>Loading... </body1>
                        </Box>
                    }      
                    </Box>
                </Paper></List>
            </Box>
        </Container>
    )
};

export default Repos;
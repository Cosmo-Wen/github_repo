import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./pages/Content.js";
import Home from "./pages/Home.js"
import Repos from "./pages/Repos.js"


const App = (props) => {
    const [username, setUsername] = useState("");
    const [repo, setRepo] = useState("ab");

    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home username = {username} setUsername = {setUsername}/>} />
            <Route path = "/:username" element = {<Repos username = {username} repo = {repo} setRepo = {setRepo} />} />
            <Route path = "/:username/:repo" element = {<Content username = {username} repo = {repo} />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;

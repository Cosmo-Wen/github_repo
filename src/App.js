import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./pages/Content.js";
import Home from "./pages/Home.js"
import Repos from "./pages/Repos.js"


const App = () => {
    const [error, setError] = useState(false);

    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home error = {error} />} />
            <Route path = "/:username" element = {<Repos setError = {setError} />} />
            <Route path = "/:username/:repo" element = {<Content />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;

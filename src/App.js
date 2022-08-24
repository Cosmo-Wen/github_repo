import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./pages/Content.js";
import Home from "./pages/Home.js"
import Repos from "./pages/Repos.js"


const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/:username" element = {<Repos />} />
            <Route path = "/:username/:repo" element = {<Content />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./pages/Content.js";
import Home from "./pages/Home.js"
import Repos from "./pages/Repos.js"


function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;

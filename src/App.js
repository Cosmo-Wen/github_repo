import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js"
import Repos from "./pages/Repos.js"

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Repos />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;

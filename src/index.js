//import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
/*
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import Enter from "./pages/Enter";
import Disclaimer from "./pages/Disclaimer";
import ForDev from "./pages/ForDev";
import CSfaq from "./pages/CSfaq";
//import Headr from './pages/Header.js';
*/

/*
export default function App()   {
    return  (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="enter" element={<Enter />} />
                    <Route path="Disclaimer" element={<Disclaimer />} />
                    <Route path="ForDev" element={<ForDev />} />
                    <Route path="CSfaq" element={<CSfaq />} />
                    <Route path="*" element={<Nopage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App className = "code" />);
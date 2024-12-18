import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App';
//import Fipond from "./pages/Fipond";
//import Nopage from "./pages/Nopage";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    );
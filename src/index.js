import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './Components/Home';
//import Fipond from "./pages/Fipond";
import Nopage from "./pages/Nopage";

export default function App()   {
    return  (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    {/* <Route path="Fipond" element={<Fipond />} /> */}
                        <Route path="*" element={<Nopage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App className="code"/>);
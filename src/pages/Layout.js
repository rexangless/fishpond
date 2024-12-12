import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return  (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/enter">Enter</Link>
                    </li>
                    <li>
                        <Link to="/Disclaimer">Disclaimer</Link>
                    </li>
                    <li>
                        <Link to="/ForDev">Developers</Link>
                    </li>
                    <li>
                        <Link to="/CSfaq">Customer Service</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
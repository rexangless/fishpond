import './Header.css'
import { Link } from 'react-router-dom';
function Header()    {
    return (
        <>
            <div className='header'>
                <div className="text"><Link to = "/"> fi$pond </Link></div>
            </div>
        </>
    );
}

export default Header;
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contuct">Contuct</Link>
                 <Link to="/user">user</Link>
            </nav>
        </div>
    );
};

export default Header;
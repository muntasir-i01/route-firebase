import './Header.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user, handleLogOut} = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/register">Register</Link>
                <span>{user?.displayName && user.displayName} </span>
                {
                    user?.uid 
                    ?
                    <button onClick={handleLogOut}>Log out</button>
                    :
                    <Link to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;
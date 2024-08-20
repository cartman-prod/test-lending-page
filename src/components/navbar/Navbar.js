
import { NavLink } from 'react-router-dom';
import './style.css';
import BtnDark from '../BtnDark/BtnDark';

const Navbar = () => {

    const activeLink = ({isActive}) => isActive? 'nav-list__link--active' : 'nav-list__link';
    return (       
    <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to="/" className="logo"><strong>Freelancer</strong> portfolio</NavLink>
                <BtnDark/>
                <ul className="nav-list">
                    <NavLink to="/" className={activeLink}>Home</NavLink>
                    <NavLink to="/projects" className={activeLink}>Projects</NavLink>
                    <NavLink to="/contacts" className={activeLink}>Contacts</NavLink>
                </ul>
            </div>
        </div>
      </nav> );
}
 
export default Navbar;
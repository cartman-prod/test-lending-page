import vk from './../../images/icons/vk.svg';
import instagram from './../../images/icons/instagram.svg';
import twitter from './../../images/icons/twitter.svg';
import github from './../../images/icons/gitHub.svg';
import linkedin from './../../images/icons/linkedIn.svg';

import './style.css';
const Footer = () => {
    return (       <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={instagram} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={github} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={linkedin} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
      </footer> );
}
 
export default Footer;
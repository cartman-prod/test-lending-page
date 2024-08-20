import sun from './../../images/icons/sun.svg';
import moon from './../../images/icons/moon.svg';
import { useState, useEffect, useRef } from 'react';
import './style.css';

const BtnDark = () => {
    
    const [isDark, setIsDark] = useState(false);
    const btnRef = useRef(null);

    useEffect(() => {
        if (isDark)  {
            document.body.classList.add('dark')
            btnRef.current.classList.add('dark-mode-btn--active')
        } else   {
            document.body.classList.remove('dark')
            btnRef.current.classList.remove('dark-mode-btn--active')
        }
        
    }, [isDark]);

    const toggleDark  =  () => {
        setIsDark((currentValue) => {
            return !currentValue;
        });
    }

    return (
    <button ref={btnRef} className="dark-mode-btn" onClick={toggleDark}>
        <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
    </button> 
    );
}
 
export default BtnDark;
import "./style.css";
import github from "./../../images/icons/gitHub-black.svg"

const btn = ({link}) => {
    return ( <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={github} salt="GitHub Link"/>
        GitHub repo
    </a> );
}
 
export default btn;
import artLogo from "../../assets/logos/art-logo.png"
import liLogo from "../../assets/logos/li-logo.png"
import gitHubLogo from "../../assets/logos/github-logo.png"
import "./Footer.scss"

const Footer = () => {
    return (  
    <footer className="footer">
        <h5 className="footer__title">Designed and coded by Alina Pikula</h5>
        <ul className="footer__sm">
            <li className="footer__single-sm">
                <a className="footer__sm-link" href="https://www.linkedin.com/in/alina-pikula/" >
                <p className="footer__sm-text">Hire me</p>
                <img className="footer__sm-logo" src={liLogo}/>
                </a>
            </li>
            <li className="footer__single-sm">
                <a className="footer__sm-link" href="https://www.artstation.com/endless_nothing/profile" >
                <p className="footer__sm-text">See my designs</p>
                <img className=" footer__sm-logo-art" src={artLogo}/>
                </a>
            </li>
            <li className="footer__single-sm">
                <a className="footer__sm-link" href="https://github.com/alinapikula" >
                <p className="footer__sm-text">See my code</p>
                <img className="footer__sm-logo" src={gitHubLogo}/>
                </a>
            </li>
        </ul>
    </footer>);
}
 
export default Footer;
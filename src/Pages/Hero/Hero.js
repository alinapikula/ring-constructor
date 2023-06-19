import { Link } from "react-router-dom";
import * as THREE from 'three';

const Hero = () => {
    return ( 
        <section>
            <h1>Build YOUR unique style to match your personality</h1>
            <Link to={"/main"}>
            <button> Get started</button>
            </Link>
        </section>
    );
}

export default Hero;
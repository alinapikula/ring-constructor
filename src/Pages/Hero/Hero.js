import { Link } from "react-router-dom";
import * as THREE from 'three';
import {OrbitControls, Environment, ContactShadows} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model1 } from "../../models/Ring1"
import "./Hero.scss"

const Hero = () => {
    return ( 
        <section className="hero">
            
            <div className="hero__container">
            <h1 className="hero__title">Build a {<span className="hero__title--spn">UNIQUE</span>} ring style to match your amazing personality</h1>
            <Link to={"/main"}>
            <button className="hero__btn"> Get started</button>
            </Link>
            </div>
            <div className="hero__canvas">
            <Canvas className="hero__canvas" shadows camera={{position: [12,12,5]}}>
            <Environment preset="forest"/>
            <Model1/>
            <ContactShadows position={[0, 0.8, 0]} color="#ffffff"/>
            <OrbitControls autoRotate/>
            </Canvas>
            </div>
        </section>
    );
}

export default Hero;
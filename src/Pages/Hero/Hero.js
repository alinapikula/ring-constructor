import { Link } from "react-router-dom";
import * as THREE from 'three';
import {OrbitControls, Environment, ContactShadows} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model } from "../../Model"
import "./Hero.scss"

const Hero = () => {
    return ( 
        <section className="hero">
            <h1 className="hero__title">Build YOUR unique style to match your personality</h1>
            <Link to={"/main"}>
            <button> Get started</button>
            </Link>
            <div className="hero__canvas">
            <Canvas className="hero__canvas" shadows camera={{position: [0,0,1.66]}}>
            <Environment preset="forest"/>
            <Model/>
            <ContactShadows position={[0, 0.8, 0]} color="#ffffff"/>
            <OrbitControls autoRotate/>
            </Canvas>
            </div>
        </section>
    );
}

export default Hero;
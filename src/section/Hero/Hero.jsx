import Navbar from "../../components/Navbar/Navbar";
import Landing from "../../components/Landing/Landing";
import styles from './Hero.module.css'

function Hero() {
    return (
        <main style={styles}>
            <Navbar />  
            <Landing/>
        </main>
    );
}
export default Hero;

import './home.css';
import Nav from '../../Nav/nav.js';
import Contenedor from '../../Contenedor/contenedor';
import Informacion from '../../Informacion/informacion';
import Ubicacion from '../../Ubicacion/ubicacion';
import Card from '../../Card/cards';
import Footer from '../../Footer/footer';


function Home() {
    return ( 
        <div >
            <Nav/>
            <Contenedor/>
            <Informacion/>
            <Ubicacion/>
            <Card/>
            <Footer/>
        </div>
    );
}
export default Home;
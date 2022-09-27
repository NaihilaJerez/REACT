import './home.css';
import Nav from '../Nav/nav.js';
import Contenedor from '../Contenedor/contenedor';
import Informacion from '../Informacion/informacion';
import Cards from '../Card/cards';
function Home() {
    return ( 
        <div >
            <Nav/>
            <Contenedor/>
            <Informacion/>
            <Ubicacion/>
            <Cards/>
            <Footer/>
        </div>
    );
}
export default Home;
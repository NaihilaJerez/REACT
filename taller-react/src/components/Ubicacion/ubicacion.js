import './ubicacion.css';
import Iframe from 'react-iframe'


function Ubicacion() {
    return (
        <body>
        <section id="features">
            <h2 class="features-title">Razones por las que disfrutarás quedarte con nosotros</h2>
            <div class="features-description">
                <div class="feature feature-blue">
                    <i class="fa-solid fa-bell-concierge"></i>
                    <p>Lorem ipsum dolor</p>
                </div>
                <div class="feature feature-black">
                    <i class="fa-solid fa-bed"></i>
                    <p>Lorem ipsum dolor</p>
                </div>
                <div class="feature feature-blue">
                    <i class="fa-solid fa-wifi"></i>
                    <p>Lorem ipsum</p>
                </div>
                <div class="feature feature-black">
                    <i class="fa-solid fa-dumbbell"></i>
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </section>
        <section id="ubicacion">
            <h2 class="ubicacionTi">Ubícanos</h2>
            <div class="ubicacionM">
                <Iframe class="M"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2603.668779715141!2d-74.07073232748797!3d4.605737218435465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1658870245530!5m2!1ses!2sco"
                    width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"/>
            </div>
        </section>
        </body>
    );
}

export default Ubicacion;

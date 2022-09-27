import './nav.css';


function Nav() {
  return (
    <nav>
        <div class="logos">
            
            <i class="fa-solid fa-bars"></i>
        </div>
        
        <div class="menu">
            <a href="index.html" class="item">Inicio</a>
            <a href="#ubicacion" class="item">Ubícanos</a>
            <a href="#opinion" class="item">Opiniones</a>
            <a href="login.html" class="item">
            <button class="navbar-button">
                <i class="fa-solid fa-user"></i> Iniciar Sesión
            </button>
            </a>
        </div>
</nav>
  );
}

export default Nav;

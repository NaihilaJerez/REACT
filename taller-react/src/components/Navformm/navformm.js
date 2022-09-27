import './navformm.css';


function NavFormm() {
  return (
    <nav class="formnav">
        <div class="fondoform">
            <div class="logoform">
                {/* <img src="img/Hotelia horizontal blanco.svg" alt=""> */}
            </div>
                <div class="j">
                    <h2>Eres más que bienvenido</h2>
                </div>
        </div>
            <a href="login.html" class="item"><button class="salir"><i class="fa-solid fa-arrow-right-from-bracket"></i> Salir</button></a>
        </nav>
  );
}

export default NavFormm;

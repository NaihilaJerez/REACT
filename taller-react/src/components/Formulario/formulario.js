import './formulario.css';


function Formulario() {
    return (
        <div class="login-box">
            {/* <img class="imagen" src="img/Hotelia horizontal negro.svg" alt="Logo de FAzt"> */}
            <div class="login-form">
                <div>
                    <label for="">Username</label>
                    {/* <input class="user" type="text" placeholder="Enter Username"> */}
                </div>

                <div>
                    <label for="password">Password</label>
                    {/* <input class="password" type="password" placeholder="Enter Password"> */}
                </div>

                <div>
                    <a class="iniciar" href="dashboard.html">Ingresar</a>
                </div>

                <div>
                    <p>¿No tienes una cuenta?<a href="formulario.html">Registrate aqui</a></p>
                </div>
            </div>
        </div>
    );
}

export default Formulario;

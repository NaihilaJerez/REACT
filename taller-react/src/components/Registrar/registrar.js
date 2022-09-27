import './registrar.css';


function Registrar() {
    return (

        <body class="bodyregistrar">
            <div class="priseccion">
                {/* <img src="../img/Hotelia horizontal blanco.svg" alt="" class="logo"> */}
                <h2>Eres más que bienvenido</h2>
            </div>

            <div class="formulario">
                <center><h1>Regístrate</h1></center>
                <div class="f">
                    <div class="s1">
                        <label for="">Tipo de documento</label>
                        <select name="" id="">
                            <option value="o0" selected>Escoja una opción </option>
                            <option value="o1">Tarjeta de identidad</option>
                            <option value="o2">Cedula de ciudadania</option>
                            <option value="o3">Cedula de extranjeria</option>
                            <option value="o4">Registro civil</option>
                        </select>
                        <label for="">Nombres</label>
                        {/* <input type="text"> */}
                        <label for="">Fecha nacimiento</label>
                        {/* <input type="date" > */}
                        <label for="">Email</label>
                        {/* <input type="text"> */}
                        <label for="">País de origen</label>
                        <select name="" id="">
                            <option value="o0" selected></option>
                            <option value="o1">Colombia</option>
                            <option value="o2">Mexico</option>
                            <option value="o3">Chile</option>
                            <option value="o4">Argentina</option>
                            <option value="o5">Venezuela</option>
                            <option value="o6">Brasil</option>
                            <option value="o7">Estados Unidos</option>
                            <option value="o8">Ecuador</option>
                        </select>
                        <label for="">Contraseña</label>
                        {/* <input type="password"> */}

                    </div>

                    <div class="s2">
                        <label for="">Numero de documento</label>
                        {/* <input type="number" name="" id=""> */}
                        <label for="">Apellidos</label>
                        {/* <input type="text"> */}
                        <label for="">Genero</label>
                        <div class="genero">
                            {/* <input type="radio">Mujer */}
                            {/* <input type="radio">Hombre */}
                            {/* <input type="radio">Otro  */}
                            <label for="">Teléfono de contacto</label>
                            {/* <input type="number" name="" id=""> */}
                            <label for="">Foto</label>
                            {/* <input type="file" name="" id="" class="archivo"> */}
                            <label for="">Confirmar contraseña</label>
                            {/* <input type="password" name="" id=""> */}

                        </div>
                        <div class="abajo">
                            {/* <input type="checkbox" name="" id=""><a href="">Acepto Terminos y Condiciones</a> */}
                            {/* <input type="submit" value="Ingresar" > */}
                        </div>
                    </div>
                </div>
            </div>
        </body>


    );
}

export default Registrar;

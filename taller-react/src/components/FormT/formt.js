import './formt.css';


function Formt() {
  return (
<section className="inf">
        <div className="inf-image">
            <img src="img/señora.jpg" alt=""/>
        </div>
        <div className="inf-title">
            <h2>Bienvenida, Angie Vargas</h2>
        </div>
        <div className="inf-text">
            <div className="tipoid">
                <label>Tipo de documento</label>
                <br/>
                <input placeholder="Cédula de ciudadanía" type="text"/>
                <div className="id">
                    <label for="">Numero de documento</label>
                    <br/>
                    <input placeholder="1025417456" type="text"/>
                </div>
                <div className="name">
                    <label for="">Nombres</label>
                    <br/>
                    <input placeholder="Angie Camila" type="text"/>
                </div>
                <div className="last">
                    <label for="">Apellidos</label>
                    <br/>
                    <input placeholder="Vargas Pinzón" type="text"/>
                </div>
                <div className="date">
                    <label for="">Fecha nacimiento</label>
                    <br />
                    <input type="date"/>
                </div>
                <div className="country">
                    <label for="">País de origen</label>
                    <br/>
                    <input placeholder="Colombia" type="text"/>
                </div>
                <div className="form-check">
                    <label for="">Genero</label>
                    <div className="genero">
                        <div className="men">
                            <input type="radio" className="hombre"/>
                            <label for="hombre">Hombre</label>
                        </div>
                        <div className="woman">
                            <input type="radio" className="mujer" checked />
                            <label for="mujer">Mujer</label>
                        </div>
                        <input type="radio" className="otro"/>
                        <label for="otro">Otro</label>
                    </div>
                </div>
                <div className="cel">
                    <label for="">Telefono de contacto</label>
                    <br />
                    <input placeholder="3125207460" type="text"/>
                </div>
                <div className="mail">
                    <label for="">Email</label>
                    <br/>
                    <input placeholder="angievargas2@gmail.com" type="text"/>
                </div>
                <div>
                    <button className="cambiar">Actualizar</button>
                </div>
            </div>
            <div>
                <div className="pass">
                    <label for="">Contraseña</label>
                    <br/>
                    <input type="password"/>
                </div>
                <div className="confpass">
                    <label for="">Confirmar contraseña</label>
                    <br/>
                    <input type="password"/>
                </div>
                <div className="camb">
                    <button className="cambiar">Cambiar</button>
                </div>
                <div className="cambpass">
                    <button className="cambiarpass">Cambiar Contraseña</button>
                </div>
            </div>
            </div>
            
    </section>
);
}
export default Formt;

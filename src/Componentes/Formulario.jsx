import React, {useState} from 'react'

const Formulario = () => {

    const[busqueda, guardarBusqueda]= useState({
        artista:'',
        cancion:''
    });  

    const [error, guardarError] = useState(false);

    const {artista, cancion} = busqueda; 



    // Funcion a cada input para leer su contenido
    const actualizarState = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    // Consultar las Api
    const buscarInformacion = e => {
        e.preventDefault();

        // Validacion
        if(artista.trim() === "" || cancion.trim() === ""){
            guardarError(true);
            return
        }else{
            guardarError(false)
        }

        // Si esta todo bien pasar al componente principal

    }
    


    return ( 
        <div className="bg-info">
                {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}

        <div className="container"> 
            <div className="row">
                <form 
                    onSubmit={buscarInformacion}
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                >
                    <fieldset>
                        <legend className="text-center">Buscador Letras Canciones</legend>
                    </fieldset>


                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="artista"
                                        placeholder="Nombre Artista"
                                        onChange={actualizarState}
                                        value={artista}
                                    />
                                </div>
                                
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cancion"
                                        placeholder="Nombre Canción"
                                        onChange={actualizarState}
                                        value={cancion}
                                    />
                                </div>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary float-right"
                        >Buscar</button>

                </form>
            </div>
        </div>
    </div>
    );    

}
 
export default Formulario;
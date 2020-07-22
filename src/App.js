import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './Componentes/Formulario'
import Cancion from './Componentes/Cancion';
import Info from './Componentes/Info';

import axios from 'axios'
  


function App() {

  // Definir el state

  const [ busquedaLetra, guardarbusquedaLetra] = useState({})
  const [ letra, guardarLetra] = useState("")
  const [ info, guardarInfo] = useState({})

  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0) return;

    const consultarApiLetra =  async () =>{

      const{artista, cancion} = busquedaLetra
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const [ letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ]);

      guardarLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artists[0]);

    }

    consultarApiLetra()     
  }, [busquedaLetra, info])

  return (
    <Fragment>
      <Formulario 
        guardarbusquedaLetra={guardarbusquedaLetra}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
           <Info 
              info={info}
           />
          </div>

          <div className="col-md-6">
           <Cancion
              letra={letra}
           />
           </div>

        </div>
      </div>

    </Fragment>
  );
}

export default App;

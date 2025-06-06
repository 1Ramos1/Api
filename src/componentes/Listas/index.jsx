import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../contexto/contexto';
import Filtro from '../Filtro';
import { useNavigate } from "react-router-dom";


import './style.css'

function Listas() {
  const { data, setData, tipoSeleccionado, setTipoSeleccionado } = useContext(AppContext);
  
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const obtenerDatos = async () => {
      if (tipoSeleccionado === 'All') {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
        const json = await res.json();
        setData(json.results);
      } else {
        const res = await fetch(`https://pokeapi.co/api/v2/type/${tipoSeleccionado}`);
        const json = await res.json();
        const listaFiltrada = json.pokemon.map(p => p.pokemon);
        setData(listaFiltrada);
      }
    };

    obtenerDatos();
  }, [tipoSeleccionado]);

  const handleTipoChange = (tipo) => {
    setTipoSeleccionado(tipo);
  };
  let resultados = data;


  if (busqueda.length >= 3 && isNaN(busqueda)) {
    resultados = data.filter(pokemon =>
      pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  }
  if (!isNaN(busqueda)) {
    resultados = data.filter(pokemon =>
      pokemon.url.includes('/' + busqueda)
    );
  }


  return (
    <>
    <input
        type="text"
        placeholder="Buscar Pokémon"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="c-buscador"
      />
    <Filtro onTipoChange={handleTipoChange} />
    <section className='c-lista'>
      {resultados.map((pokemon, index) => (
        <div className='c-lista-pokemon'
        onClick={() => navigate(`/Pokemon/${pokemon.name}`)}
       key={index}>
          <p>{pokemon.url.split("/")[6]}</p>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split("/")[6]}.png`} 
                alt={`Pokémon ${pokemon.name}`} width='auto' height='60' loading='lazy'
              />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </section>
    </>
  );
}

export default Listas

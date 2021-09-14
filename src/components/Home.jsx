import React, {useState, useEffect} from 'react'
import Card from './Card'


export default function Home(props) {
    const [pokemon, setPokemon]  = useState(null)

    function randomNumber() {

        return Math.floor(Math.random() * 151) + 1 
      }

    useEffect( () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`)
        .then(res => res.json())
        .then(result => setPokemon(result))
        // .then(pokemon => console.log(pokemon))
        
    },[])

   
    console.log(randomNumber())
    console.log(pokemon)

    return (
        <div id="home">
            {pokemon &&
            <>
           
            
            <h1>HOME</h1>
          <Card name={pokemon.name}
                height={pokemon.height}
                weight={pokemon.height}
                types={pokemon.types[0].type.name}
                image={pokemon.sprites.front_default}/>
                
            
          </>
        }
        {/* <button onClick={()=> localStorage.clear()}>Clear Storage</button> */}
        </div>
    )
}

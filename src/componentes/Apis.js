import React, { useState } from 'react'
import { Characters } from './Characters'


function Apis(props) {
    const initialurl = "https://rickandmortyapi.com/api";
    const [characters, setCharacters] = useState(initialurl)
    const fetchCharacters = (url) =>{
        fetch(url)
        .then(response => response.json())
        .then(data => setCharacters(data.results))
        .catch(error => console.log(error))
    };
    useState(()=> {
    fetchCharacters(initialurl); 
    },[])

    return (
        <div class="container">
            <Characters characters={characters} />
        </div>
    )
}

export {Apis}



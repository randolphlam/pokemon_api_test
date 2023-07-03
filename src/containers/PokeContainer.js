"use strict";

import React, {useState, useEffect} from 'react';
import PokeCarousel from '../components/PokeCarousel.js'

const PokeContainer = () => {

	const [pokemonList, setPokemonList] = useState([]);
	const [selectedPokemon, setSelectedPokemon] = useState(null);

	useEffect( () => {
		getPokemon();
	}, []);

	const getPokemon = () => {
		fetch('https://pokeapi.co/api/v2/pokemon/')
		.then(res => res.json())
        .then(results => setPokemonList(results.results))
	};

	return (
		<>
		<h1>Pokemon Container </h1>
		{pokemonList? <PokeCarousel pokemonList={pokemonList}/> : null}
		
		</>
	);






};

export default PokeContainer;
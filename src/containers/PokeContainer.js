"use strict";

import React, {useState, useEffect} from 'react';
import PokeCarousel from '../components/PokeCarousel.js'

const PokeContainer = () => {

	const [list_url, set_list_url] = useState('https://pokeapi.co/api/v2/pokemon/');
	const [pokemonList, setPokemonList] = useState([]);
	const [selectedPokemon, setSelectedPokemon] = useState(null);

	const loadPokemon = (url) => {
		fetch(url)
		.then(res => res.json())
		.then(results => setPokemonList(results))
	};
	
	useEffect(() => {
    	loadPokemon(list_url);
    	console.log("list_url updated")
	}, [list_url]);
  
	useEffect(() => {
		console.log("pokemon state updated")
	}, [pokemonList]);


	if (!pokemonList.results)
		return null;
	return (
		<>
			<p>hello world</p>
			<h1>Pokemon Container </h1>
			{pokemonList? <PokeCarousel pokemonList={pokemonList} set_list_url={set_list_url}/> : null}
		</>
	);






};

export default PokeContainer;
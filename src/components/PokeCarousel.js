import React from 'react';
import PokeCard from './PokeCard.js'
import './PokeCarousel.css';


const PokeCarousel = ({pokemonList, set_list_url}) => {

	if (!pokemonList.results)
		return null;

	const handlePrevClick = () => { set_list_url(pokemonList.previous) };
  	const handleNextClick = () => { set_list_url(pokemonList.next) };

	const pokeCards = pokemonList.results.map( (p, index) =>
		<PokeCard key={index} url={p.url}/>
	);
	

	return (
		<>
			<button 
	    		onClick={pokemonList.previous? handlePrevClick : null}
	    		disabled={pokemonList.previous? false: true }
	    		>Previous</button>
	    	<button
	    		onClick={pokemonList.next? handleNextClick : null}
	    		disabled={pokemonList.next? false: true }
	    		>Next</button>
			<div className="PokeCarousel">
				{pokeCards}
			</div>
		</>
	);


};

export default PokeCarousel;
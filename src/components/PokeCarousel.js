import React from 'react';
import PokeCard from './PokeCard.js'
import './PokeCarousel.css';


const PokeCarousel = ({pokemonList}) => {

	const pokeCards = pokemonList.map( (p, index) => {
		return (
			<PokeCard key={index} url={p.url}/>
		)
	});
		

	return (
		<div className="PokeCarousel">
			{pokeCards}
		</div>
	);


};

export default PokeCarousel;
import React, {useState, useEffect} from 'react';
import './PokeCard.css';


const PokeCard = ({url}) => {

	const [pokemon, setPokemon] = useState('');

	useEffect( () => {
		getPokemon();
	}, [url]);
	
	const getPokemon = () => {
		fetch(url)
		.then(res => res.json())
		.then(result => setPokemon(result))
	};
	
	return (
		<div className="PokeCard">
			<h3>{pokemon.name}</h3>
			
			{/* it seems the the key "sprites" doesn't exist when the page first loads
			so we need this check to avoid accessing it prematurely, 
			but why doesn't the above pokemon.name throw an error?
			i would have thought either they both exist or none exist? */}
			
			{pokemon.sprites? 
				<img src={pokemon.sprites.front_default} alt="" /> :
				null
			}
		</div>
	);


};

export default PokeCard;
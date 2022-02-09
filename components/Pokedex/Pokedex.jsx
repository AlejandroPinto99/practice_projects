import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import PokedexStyle from './Pokedex.module.css'

const Pokedex = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        GetPokemonList();
    }, [])


    if(process.browser){
        const cards = document.querySelectorAll('.Pokedex_pokeCard__8_HG0');
        window.addEventListener('scroll', checkCards);

        checkCards();

        function checkCards(){
            const triggerBottom = window.innerHeight / 5 * 4;

            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;

                if(cardTop < triggerBottom) {
                    card.classList.add('Pokedex_show__AiHTb');
                } else {
                    card.classList.remove('Pokedex_show__AiHTb')
                }
            })
        }
    } 


    async function GetPokemonList() {
        const json = [];
        for(let i = 1; i <= 151; i++ ){
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${i}`
            );
            
            json.push(await res.json());
            
        }
        setList(json);
    }

    return(
        <div>
             {
                list.length >= 0  && (
                    <div className={PokedexStyle.pokedex_container}>
                      {
                          list.map((pokemon, index) => {
                              return(
                                <div className={`${PokedexStyle.pokeCard}`}  key={index}>
                                    <h1>{pokemon.name}</h1>
                                    <div>
                                        <Image src={pokemon.sprites.front_default} height={150} width={150} alt={pokemon.name}/>
                                    </div>
                                    <p># {pokemon.id}</p>
                                </div>
                              );
                          })
                      }
                    </div>
                )
            }

           
        </div>
    )
    
}

export default Pokedex;
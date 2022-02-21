import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import ExpandingCardsImg from '../images/expandingCards.png';
import ProgressBar from '../images/progressBar.png';
import RotateMenu from '../images/RotateMenu.png';
import Hidden from '../images/HiddenSearch.png';
import Evolution from '../images/Evolution.png';
import Pokedex from '../images/pokedexCards.png';
import SplitScreen from '../images/SplitScreen.png';
import Login from '../images/loginAnimation.png';
import PokeSounds from '../images/PokeSounds.png';
import OaksJokes from '../images/Jokes.png';

import HomeStyle from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div> 
      <div className={HomeStyle.home_title_container}>
          <h1>Interesting example components for websites!</h1>
          <p>With Pokemon Thematic!! </p>
      </div>
  
      <div className={HomeStyle.components_container}>
          <Link href="/expanding_cards" >
            <div className={HomeStyle.card}>
              <p>Expanding Cards</p>
              <Image src={ExpandingCardsImg} height={125} width={200} />
            </div>
          </Link>

          <Link href="/progress_bar" >
            <div className={HomeStyle.card}>
              <p>Progress Bar</p>
              <Image src={ProgressBar} height={125} width={200} />
            </div>
          </Link>

          
          <Link href="/rotate_&_slide" >
            <div className={HomeStyle.card}>
              <p>Rotate Menu</p>
              <Image src={RotateMenu} height={125} width={200} />
            </div>
          </Link>

          <Link href="/hidden_search" >
            <div className={HomeStyle.card}>
              <p>Hidden Search</p>
              <Image src={Hidden} height={125} width={200} />
            </div>
          </Link>

          <Link href="/evolution" >
            <div className={HomeStyle.card}>
              <p>Evolution Progress</p>
              <Image src={Evolution} height={125} width={200} />
            </div>
          </Link>
          <Link href="/pokedex_cards" >
            <div className={HomeStyle.card}>
              <p>Pokedex</p>
              <Image src={Pokedex} height={125} width={200} />
            </div>
          </Link>
          <Link href="/split_screen" >
            <div className={HomeStyle.card}>
              <p>Split Landpage</p>
              <Image src={SplitScreen} height={125} width={200} />
            </div>
          </Link>
          <Link href="/login" >
            <div className={HomeStyle.card}>
              <p>Login Animation</p>
              <Image src={Login} height={125} width={200} />
            </div>
          </Link>
          <Link href="/PokeSounds" >
            <div className={HomeStyle.card}>
              <p>PokeSounds</p>
              <Image src={PokeSounds} height={125} width={200} />
            </div>
          </Link>
          <Link href="/profesorJokes" >
            <div className={HomeStyle.card}>
              <p>Oak's jokes</p>
              <Image src={OaksJokes} height={125} width={200} />
            </div>
          </Link>
      </div>
       
      </div>
  )
}

export default Home

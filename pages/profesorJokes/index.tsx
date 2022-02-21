import type { NextPage } from 'next'

import Image from 'next/image'

import Joke from '../../components/ProfesorJokes/Joke'
import StyleJokes from '../../components/ProfesorJokes/Joke.module.css'

import Oak from '../../components/ProfesorJokes/oak.png'


const ProfJokes : NextPage  = () => {

  return (
    <div className={StyleJokes.joke_body}>
      <div className={StyleJokes.joke_container}>
        <h1 className={StyleJokes.title}>You Laugh, You Lose</h1>
        <Joke />
        <div className={StyleJokes.oak}>
          <Image src={Oak} height={400} width={300} />
        </div>
      </div>   
    </div>
  )
}

export default ProfJokes;

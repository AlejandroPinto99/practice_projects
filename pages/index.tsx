import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import ExpandingCardsImg from '../images/expandingCards.png';
import ProgressBar from '../images/progressBar.png';
import RotateMenu from '../images/RotateMenu.png';
import Hidden from '../images/HiddenSearch.png';

const Home: NextPage = () => {
  return (
    <div> 
      <div className="text-center">
          <h1 className="text-5xl mb-4">Interesting example components for websites!</h1>
          <p>With Pokemon Thematic!! </p>
      </div>
      <div>

      </div>
      <div className="grid grid-cols-4">
          <Link href="/expanding_cards" >
            <div className="mt-8 mx-4 flex flex-col items-center cursor-pointer border-2 shadow-lg pb-2">
              <p>Expanding Cards</p>
              <Image src={ExpandingCardsImg} height={125} width={200} />
            </div>
          </Link>

          <Link href="/progress_bar" >
            <div className="mt-8 mx-4 flex flex-col items-center cursor-pointer border-2 shadow-lg pb-2">
              <p>Progress Bar</p>
              <Image src={ProgressBar} height={125} width={200} />
            </div>
          </Link>

          
          <Link href="/rotate_&_slide" >
            <div className="mt-8 mx-4 flex flex-col items-center cursor-pointer border-2 shadow-lg pb-2">
              <p>Rotate Menu</p>
              <Image src={RotateMenu} height={125} width={200} />
            </div>
          </Link>

          <Link href="/hidden_search" >
            <div className="mt-8 mx-4 flex flex-col items-center cursor-pointer border-2 shadow-lg pb-2">
              <p>Hidden Search</p>
              <Image src={Hidden} height={125} width={200} />
            </div>
          </Link>
      </div>
       
      </div>
  )
}

export default Home

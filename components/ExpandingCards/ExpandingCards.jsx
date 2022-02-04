import React , {useState} from 'react'

//Components
import Card from './Card';

const ExpandingCards = () => {
    const [selected, setSelected] = useState();

    return(
        <div>
            <div className="text-center mt-2 mb-4">
                <h1 className="font-bold text-2xl">Pokemon Regions</h1>
                <p className="text-sm">The best places to take your vacations!</p>
            </div>
            <div className="flex flex-col items-center space-y-4 mx-2
                            md:flex-row md:justify-center md:space-y-0 md:space-x-2 md:h-full">
                <Card   name="Kanto" 
                        imgUrl="https://i.pinimg.com/564x/36/89/8c/36898c0cc6b30840bb4dea99d84e9e2c.jpg" 
                        onClick={() => setSelected("Kanto")}
                        selected={selected}/>
                <Card   name="Johto" 
                        imgUrl="https://i.pinimg.com/564x/f7/00/cd/f700cd273c0a47c6aacb5baa1a20bbca.jpg"
                        onClick={() => setSelected("Johto")}
                        selected={selected}/>
                <Card   name="Hoenn" 
                        imgUrl="https://i.pinimg.com/564x/65/ab/5f/65ab5fcc90715da5eefd294acc895528.jpg" 
                        onClick={() => setSelected("Hoenn")}
                        selected={selected}/>
                <Card   name="Sinnoh" 
                        imgUrl="https://i.pinimg.com/564x/cc/59/88/cc5988f7d7ed8ac030a930643e73b25e.jpg" 
                        onClick={() => setSelected("Sinnoh")}
                        selected={selected}/>
                <Card   name="Unova" 
                        imgUrl="https://i.pinimg.com/originals/38/64/c5/3864c54b705bf730949a531f5262fa97.png"
                        onClick={() => setSelected("Unova")}
                        selected={selected}/>
                <Card   name="Kalos" 
                        imgUrl="https://i.pinimg.com/564x/cc/42/81/cc428107df1b94c6055ad7e2dae29481.jpg"
                        onClick={() => setSelected("Kalos")}
                        selected={selected}/>
                <Card   
                        name="Alola" 
                        imgUrl="https://i.pinimg.com/564x/82/04/b2/8204b2db4086a5eada5d70b74d369bc0.jpg"
                        onClick={() => setSelected("Alola")}
                        selected={selected}/>
                <Card   name="Galar" 
                        imgUrl="https://i.pinimg.com/564x/36/30/c7/3630c78a9c9f82d8f75458009f618176.jpg"
                        onClick={() => setSelected("Galar")}
                        selected={selected}/>
            </div>
        </div>
    );
}

export default ExpandingCards;
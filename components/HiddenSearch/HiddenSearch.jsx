import React, {useState} from 'react'

const HiddenSearch = () => {
    const [open, setOpen] = useState(false);

    return(
        <div className=" items-center justify-center flex h-screen bg-red-700">
            <input type="text" placeholder='Type here to search...'
                    className={`outline-0 transition-all ease-in-out ${ open ? 'p-2 w-48' : 'p-0 w-0'}`} />
            <div className="bg-white px-2 cursor-pointer" onClick={() => setOpen(!open)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
           
        </div>
    );
}

export default HiddenSearch
import React, { useState } from 'react'
import Sresult from './Sresult';

const Search = () => {
    //we need to change state so use usestate hook

    const [img, setImg] = useState("");

    const inputEvent = (Event) => {
        const data = Event.target.value;
        console.log(data);
        setImg(data);
    }
    return (
        <div>
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="Search Anything"
                    Value={img}
                    onChange={inputEvent}
                />
                    {/*   if                 else */}
                {img==="" ? null : <Sresult name={img} />} 
            </div>

        </div>
    )
}

export default Search

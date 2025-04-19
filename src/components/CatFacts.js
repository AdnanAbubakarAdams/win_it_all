import React, {useState} from "react";
import axios from "axios";

const API = "https://catfact.ninja/fact";

const CatFacts = () => {
    const [catFact, setCatFact] = useState([]);

    const getRandomCatFacts = async () => {
        const response = await axios.get(API);
        setTimeout(() => {
          console.log(API);
          setCatFact(response.data.fact);
        }, 1000);
      };


  return (
    <div className='catFacts'>
        <div className='catFacts__heading'>
            Click button to get a cat fact
        </div>
        <button className='catFacts__button'
        onClick={getRandomCatFacts}
        >
            GET CAT FACT
        </button>
        <div className='catFacts__facts'>
            { catFact }
        </div>
        {/* <div>
            <Loading loading={loading} />
        </div> */}
    </div>
  )
    
}

export default CatFacts;
import React, { useState } from 'react'

const Accordion = ({question,answer}) => {
    const [text,setText]=useState(false);
    const display=()=>{
        setText(!text);
    }
      
  return (
    <div>
 <div className='question'>
 <h2>{question}</h2>
 <p onClick={display}>{text? <i class="fa-solid fa-sort-up"></i>:
 <i class="fa-solid fa-sort-down"></i>}</p>
 </div>

 <div className='answers'>

{text&& <p>{answer}</p>}
{/* IF TRUE , then display answer */}

 </div>



    </div>
  )
}

export default Accordion
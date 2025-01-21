import Nav from 'react-bootstrap/Nav'
import { useState } from 'react'

function Ritual() {
  
  const [toggle, setToggle] = useState(1)

  console.log(toggle)

    function updateToggle(id) {
      setToggle(id)
    }

  return (
    <div>      
        <button onClick={() => updateToggle(1)}>1</button>
        <button onClick={() => updateToggle(2)}>2</button>
        <button onClick={() => updateToggle(3)}>3</button>
    </div>
    <div className={toggle === 2 ? "show-content" : "content"}>Content 2</div>
    <div className={toggle === 3 ? "show-content" : "content"}>Content 3</div> 
  )
    

  ;
}

export default Ritual;
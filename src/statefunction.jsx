
import React,{useState} from 'react';

const Statefunction = () => {
    const [count, handleUpdate] = useState({number:0})
    return (
      <div>
        <h1>Counter: {count.number}</h1>
        <hr/>
        <button onClick={() =>handleUpdate({number: count.number + 1})}>Increase</button>
        <button onClick={() => handleUpdate({number: count.number -1})}>Decrease</button>
  
      </div>
    );
}

export default Statefunction;



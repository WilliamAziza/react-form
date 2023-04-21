import React, {useState} from 'react';
import Classform from './components/classform';

const App = () => {
  const [count, handleUpdate] = useState({number:0})
  return (
    <div>
      <Classform/>    
    </div>
  );
}

export default App;

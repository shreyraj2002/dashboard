import React, { useState } from 'react';

import Input from './components/input';
import './App.css';

function App() {
  const [layer,setLayer] = useState(1);

  const handleLayer = () => {
    let LayerArray = [];
    for (let i = 0; i < layer; i++ ){
      LayerArray.push(
        <div key={i}>
          <Input />
        </div>
      )
    }
    return LayerArray;
  }

  return (
    <div className="App">
      <header className="App-header">
      {handleLayer()}
      <div className='layer-control-btn'>
        <button onClick={()=>setLayer(layer+1)}>
          add layer
        </button>
        <button onClick={()=>setLayer(layer > 1 ? layer-1: layer )}>
          remove layer
        </button>
      </div>
      </header>
    </div>
  );
}

export default App;

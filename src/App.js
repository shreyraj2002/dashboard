import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [category, setCategory] = React.useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label >
            Name:
          </label><br />
          <input type="text" value={name} required onChange={(e) => { handleChange(e) }} /><br />
          <label >
            Type:
          </label><br />
          <input type="text" value={age} required onChange={(e) => { handleAgeChange(e) }} /><br />
          <label>
            Quantity:
          </label><br />
          <select name="category" value={category} onChange={(e) => { handleCategoryChange(e) }}>
            <option id="0" >String</option>
            <option id="1" >Numbers</option>
            <option id="2" >Arrays</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import './input.css'

const STRING =   'string';
const NUMBER =  'Numbers';
const ARRAY = 'Array';
const OBJECT = 'object';


const  TYPE_VALUES_ARRAY = [STRING,NUMBER,ARRAY,OBJECT];

const Input = () => {

  const [displayName,setDisplayName] = useState('');
  const [quantity,setQuantity] = useState('');
  const [type,setType] = useState('');
  const [inner,setInner] = useState();

  const handleSubmit = () => {
    let data = {
      type,
      displayName,
    }
    if ([ARRAY,OBJECT].includes(type) ){
      data = {...data,inner};
    }
    if (ARRAY === type) {
      data = {...data, quantity};
    }
    console.log(data,"apple");
  }

  return (
    <div className="input-container">
      <input type="text" value={displayName} required onChange={event => setDisplayName(event.target.value)} placeholder={'DisplayName'}/><br />
      {
        type === ARRAY ? <input type="text" value={quantity} required onChange={e => setQuantity(e.target.value)} placeholder={'quantity'} /> : null

      }
      
      <select name="category" value={type} onChange={e => setType(e.target.value)} placeholder={'Type'}>
       {
        TYPE_VALUES_ARRAY.map((value,idx) => <option id={idx} value={value}>{value}</option>)
       }
      </select>
      <input type="submit" value="add" onClick={handleSubmit}/>
    </div>
  );
};

export default Input;
import React, { useState } from 'react';
import image from './image2.png';

const App = () => {
  const [remove , setRemove]  = useState('Check List');
  const [input , setInput] = useState('');
  const [items , setItems] = useState([])
  const mouse = ()=>{
    setRemove('Remove All')
  }
  const click = ()=>{
    if(!input){

    }
    else{

      setItems([...items , input])
      setInput('')
    }

  }
  const deletee = (id)=>{
    const updateditem = items.filter((ele,ind)=>{
      return ind !== id;
      
    })
    setItems(updateditem)

  }
  const empty = ()=>{
    setItems([]);
  }
  return (
    <>
      <div className='center'>
      <img src={image} alt="" />
      <h4 className='heading'>Add Your List Here</h4>
      <div className="span">

      <input value={input} type="text" placeholder='Add Items...' onChange={(e)=>{setInput(e.target.value)}}/> 
      <i onClick={click} class="fa-solid fa-plus fa-3xs btnn" title='Add item'></i>
      </div>
      <div className="list">
      {items.map((pre , indx)=>{
        return(


      <div className="span" key={indx}>


        <h4>{pre}</h4>
        <i class="fa-sharp fa-solid fa-trash fa-3xs btnnn" onClick={()=>deletee(indx)} title='Delete Item' style={{"color": "#0f0f0f"}}></i>

      </div>
        )
      })}
      </div>
      <button onClick={empty} className='check' onMouseEnter={mouse}>{remove} </button>

      </div>
    </>
  )
}

export default App

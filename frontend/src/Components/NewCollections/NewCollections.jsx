import React, { useEffect } from 'react'
import './NewCollections.css';
import Item from '../Items/Items'

const NewCollections = () => {

  const [new_collection, setNewCollection] = React.useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNewCollection(data));
  },[])

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {new_collection.map((item,i)=>{
            return <Item key={i} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} id={item.id}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections

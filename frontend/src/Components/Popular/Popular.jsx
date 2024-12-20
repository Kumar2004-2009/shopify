import React, { useEffect,useState } from 'react'
import './Popular.css'
import Items from '../Items/Items'

const Popular = () => {

  const [popularProducts,setPopularProducts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen')
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data))
  },[])

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />

      <div className="popular-item">
        {popularProducts.map((item,i)=>{
            return <Items key={i} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} id={item.id}/>
        })}
      </div>
    </div>
  )
}

export default Popular

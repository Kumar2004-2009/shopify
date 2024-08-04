import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assests/data'
import Items from '../Items/Items'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item,i)=>{
            return <Items key={i} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} id={item.id}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts

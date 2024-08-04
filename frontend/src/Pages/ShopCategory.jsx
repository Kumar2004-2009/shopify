import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import drop_down_icon from '../Components/Assests/dropdown_icon.png'
import Items from '../Components/Items/Items'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-2</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={drop_down_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category === item.category){
            return <Items key={i} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} id={item.id}/>
          }
          else{
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory

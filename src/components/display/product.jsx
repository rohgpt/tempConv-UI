import React from 'react';
import './display.css'

const ProductList = (props) => {
  if (props.items.length > 0) {
    return props.items.map((item) => {
      return (
        <div className="card">
          <img className="img" src={item.itemImage} alt={item.name}></img>
          <p className="text">{item.name}</p>
        </div>
      )
    });
  }
  else {
    return <div>Nothing To Display</div>
  }

}

export default ProductList;

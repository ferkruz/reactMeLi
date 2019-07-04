import React from 'react';
import ProductItem from './ProductItem';

const ProductList = (props) => {
  return(
    <ul>
      {props.items.map((i,index)=>
        <ProductItem key={`pi-${index}`} name={i.title} />
      )}
    </ul>
  )
}

export default ProductList;

import React, {Component, Fragment} from 'react';
import CartItem from './CartItem'

class CartList extends Component{
    /*constructor(){
        super()
    }*/
    render() {
        let {list} = this.props;
        list = list ? list : [];
        return (
            <Fragment>
                <ul>
                    {
                        list.map( (item, index) => <CartItem key={index} item={item}/>)
                    }
                </ul>
            </Fragment>
        )
    }
}

export default CartList

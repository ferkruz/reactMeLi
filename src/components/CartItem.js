import React, {Component, Fragment} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';


class CartItem extends Component{
    render() {
        let {item} = this.props
        return (
            <Fragment>
            <CardHeader

        title={item.title || "Product Name"}
        subheader= {`$ ${item.price}` || "MasterCard"} 
      />
            <Card>
                
                <img style={{ margin: 20 }} src={item.thumbnail} alt='thumbnail'/>
                <Button variant="outlined" color="secondary">
                    <a href={item.permalink} alt="image"> Ver más</a>
                </Button>
            </Card>
            
            </Fragment>
        )
    }
}

export default CartItem

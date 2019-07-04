import React, { Component } from 'react';
import SeachBarWithState from './containers/SearchBarWithState';
import CartList from './components/CartList';
import mlData from './modules/mlData';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { connect } from 'react-redux';
import { getResultsItems } from './state/actions';

class App extends Component {
  constructor(){
    super()
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(data){
    this.props.getItemsMeli(this.props.q);
  }

  render() {
    let {items} = this.props;
    return (
          <div>
              <MenuItem ><h1>MercadoLibre Test</h1> </MenuItem>
              <SeachBarWithState onSearch={this.onSearch}/>
              <CartList list={items}/>
          </div>
      )
  }
}

const mapStateToProps = state => ({
  items: state.items,
  q: state.q
});

const mapDispatchToProps = dispatch => ({
  getItemsMeli: (items)=>dispatch(getResultsItems(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

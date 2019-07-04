import React from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

//Componente Funcional, solo implementa el metodo "render"
class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      q:''
    }
  }

  handleChange(e){
    this.setState({
      q: e.target.value
    })
    this.props.change(e.target.value);
  }

  handleClick(){
    this.props.click(this.state.q);
  }

  render(){
    return(
      <>
       <TextField
        id="outlined-full-width"
        label="Ingrese Busqueda"
        style={{ margin: 8 }}
        placeholder="Buscar Productos"        
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e)=>this.handleChange(e)}
          value={this.state.q}
          type="text"
      />
              
        <Button onClick={()=>this.handleClick()} variant="outlined" color="secondary" style={{ margin: 20 }}>
          Buscar
        </Button>
      </>
    )
  }
}

export default SearchBar;

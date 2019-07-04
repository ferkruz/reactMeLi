import React, { Component, Fragment} from 'react';

class SearchBox extends Component{
    constructor(){
        super()
        this.state={text:''}
        this.textUpdate = this.textUpdate.bind(this)
    }
    textUpdate(e){
        this.setState({text:e.target.value})
    }
    render() {
        let {onSearch} = this.props
        return (
            <Fragment>
                <input type="text" placeholder="Ingrese su busqueda" 
                    onChange={this.textUpdate} value={this.state.text} />
                <button onClick={()=>( onSearch(this.state.text) )}> Buscar </button>
            </Fragment>
        )        
    }
}

export default SearchBox
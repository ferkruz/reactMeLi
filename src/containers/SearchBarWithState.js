import React from 'react';
import SearchBar from '../components/SearchBar';
import { connect } from 'react-redux';
import { setQuery } from '../state/actions';

const SeachBarWithState = (props) => {
  return(
    <SearchBar change={props.handleClick} click={props.onSearch}/>
  )
}

const mapDispatchToProps = dispatch => ({
  handleClick : (q) => dispatch(setQuery(q))
});

export default connect(undefined, mapDispatchToProps)(SeachBarWithState);

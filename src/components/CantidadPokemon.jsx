/*
import React, { Component } from "react";
import { connect } from 'react-redux';

class CantidadPokemon extends Component {
  render(){
    return(
      <React.Fragment>
        Unidades: {this.props.game_shop.pokemon}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    game_shop: state.game_shop
  }
}
// esto le esta mandando por props el estado del game shop, ese estado es la cantidad de pokemons que hay en la store
export default connect(mapStateToProps)(CantidadPokemon)
*/
// esto devuelve un componente con los props ya integrados, el componente CantidadPokemon 

// este componente de clase tambien puede ser usado como funcion y usar hooks
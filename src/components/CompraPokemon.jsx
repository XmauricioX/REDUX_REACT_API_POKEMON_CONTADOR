/*
import React, { Component } from "react";
import { connect } from 'react-redux'
import {buy_pokemon_action, return_pokemon_action} from '../redux/actions/gameShopAction'

class ComprarPokemon extends Component {
  render(){
    return (
      <div>
        <button className="btn btn-dark btn-sm mb-2" onClick={() => {
          this.props.buy_pokemon_action(1)
        }} >Comprar Pokemon</button>
        <button className="btn btn-dark btn-sm" onClick={() => {
          this.props.return_pokemon_action(1)
        }} >Regresar Pokemon</button>
      </div>
    )
  }
}
// de esta maera se le da un dispatch a cada boton para realizar los actions que se estan importando aca abajo
const mapDispatchToProps = {
  buy_pokemon_action, 
  return_pokemon_action
}
// de esta manera se estan mapeando los dos action para usarlos con los dispatch
export default connect(null, mapDispatchToProps)(ComprarPokemon);
*/
// este componente de clase tambien puede ser usado como funcion y usar hooks
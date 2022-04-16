import React from "react";
import { useSelector } from "react-redux";

const CantidadPokemonHook = () => {

  const game_shop = useSelector((state) => state.game_shop) 

  return (
    <>
      Unidades: {game_shop.pokemon}
    </>
  )
}
// para trabajar con estas funciones redux nos da un useSelector para tener estados y use Dispatch para enviar acciones
export default CantidadPokemonHook;
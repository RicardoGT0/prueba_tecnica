import { useSelector } from "react-redux";
import Card from "./Card"

const ContainerCards = () => {
  const { pokeShow } = useSelector((state) => state);

  const cards = pokeShow.map((pokemon, index) => {
    return (
      <Card key={index}
      id={pokemon.id}
      name={pokemon.name}
      image={pokemon.image}
      type={pokemon.type}
      abilities={pokemon.abilities}
      evolutions={pokemon.evolutions}
      />
    )
  })


  return (
    <div>
      {cards}
    </div>
  )
}

export default ContainerCards
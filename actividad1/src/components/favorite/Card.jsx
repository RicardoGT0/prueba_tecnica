import { useDispatch } from 'react-redux'
import colors from '../utils/colors'
import './Card.css'
import { setFavorite } from '../../redux/actions'
import MiniCard from '../principal/MiniCard'

const Card = ({ id = 0, name = '', image = null, type = [], abilities = [], evolutions = [] }) => {
  const dispatch = useDispatch()

  let color1
  let color2

  if (type.length === 2) {
    color1 = colors[type[0]]
    color2 = colors[type[1]]
  } else {
    color1 = colors[type[0]]
    color2 = color1
  }

  return (
    <div className='favoriteCard miniCard' style={{ backgroundImage: `linear-gradient(to right, ${color1} , ${color2} )` }}>
      <button className='buttonCard'
        onClick={() => { dispatch(setFavorite({ id, name, image, type, abilities, evolutions })) }}
      >💜</button>
      <img className='miniPokeImage' src={image} alt={name} />
      <div className='divDescription'>
        <div className='divCardID'># {id}</div>
        <div className='divCardName'>{name}</div>
        <div className='divAbilities'>{abilities.join('/')}</div>
      </div>
        <div className='divCardEvolutions'>
          {
            evolutions.map((evolution, index) => <MiniCard
            key={index}
            id={evolution.id}
            name={evolution.name}
            image={evolution.image}
            type={evolution.type}
            abilities={evolution.abilities}
            evolutions={evolution.evolutions}
            />)
          }
        </div>
    </div>
  )
}

export default Card
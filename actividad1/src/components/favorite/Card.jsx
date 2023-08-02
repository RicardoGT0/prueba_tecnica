import { useDispatch } from 'react-redux'
import colors from '../utils/colors'
import './Card.css'
import { setFavorite } from '../../redux/actions'

const Card = ({ id, name, image, type, abilities, evolutions }) => {
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
    <div className='favoriteCard' style={{ backgroundImage: `linear-gradient(to right, ${color1} , ${color2} )` }}>
      <img className='miniPokeImage' src={image} alt={name} />
      <div>
        <div className='divCardID'># {id}</div>
        <div className='divCardName'>{name}</div>
      </div>
      <button className='buttonCard'
        onClick={() => { dispatch(setFavorite({ id, name, image, type, abilities, evolutions })) }}
      >💜</button>

    </div>
  )
}

export default Card
import { useDispatch, useSelector } from 'react-redux'
import colors from '../utils/colors'
import './Card.css'
import MiniCard from './MiniCard'
import { setFavorite } from '../../redux/actions'

const Card = ({ id = 0, name = '', image = null, type = [], abilities = [], evolutions = [] }) => {
  const dispatch = useDispatch()
  const { allFavorites } = useSelector((state) => state);

  const favorite = allFavorites.find(favorite => favorite.id === id)

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
    <div className='card' style={{ backgroundImage: `linear-gradient(to right, ${color1} , ${color2} )` }}>
      <button className='buttonCard'
        onClick={()=>{dispatch(setFavorite({ id, name, image, type, abilities, evolutions}))}}
      >{favorite ? '💜' : '🖤'}</button>
      <div>
        <img className='pokeImage' src={image} alt={name} />
        <div className='divCardID'># {id}</div>
        <div className='divCardName'>{name}</div>
        <div className='divCardTypes'>{type.join('/')}</div>
        <div className='divAbilities'>{abilities.join('/')}</div>
        <div className='divCardEvolutions'>
          {
            evolutions.map((evolution, index) => <MiniCard
              key={index}
              id={evolution.id}
              name={evolution.name}
              image={evolution.image}
              type={evolution.type}
            />)
          }
        </div>
      </div>
    </div>
  )
}

export default Card
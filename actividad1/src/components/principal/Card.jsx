import colors from '../utils/colors'
import './Card.css'
import MiniCard from './MiniCard'

const Card = ({ id = 0, name = '', image = null, type = [], abilities = [], evolutions = [], favorite=false }) => {
  //TODO: function Favorite

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
        onClick={()=>{}}
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
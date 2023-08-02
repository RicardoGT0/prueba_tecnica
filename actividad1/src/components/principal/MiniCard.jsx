import colors from '../utils/colors'
import './Card.css'
import './MiniCard.css'

const MiniCard = ({ id = 0, name = '', image = null, type = [], abilities = [], evolutions = [] }) => {
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
        <div className='card miniCard' style={{ backgroundImage: `linear-gradient(to right, ${color1} , ${color2} )` }}>
            <img className='miniPokeImage' src={image} alt={name} />
            <div>
                <div className='divCardID'># {id}</div>
                <div className='divCardName'>{name}</div>
                <div className='divAbilities'>{abilities.join('/')}</div>
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

        </div>
    )
}

export default MiniCard
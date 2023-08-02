import ContainerCards from './ContainerCards'
import './Favorite.css'
import Sorter from './Sorter'

const Favorite = () => {
  return (
    <div className='container-favorite'>
      <h1>Favoritos 💜</h1>
      <h2>Ordenar por:</h2>
      <Sorter/>
      <ContainerCards/>
      </div>
  )
}

export default Favorite
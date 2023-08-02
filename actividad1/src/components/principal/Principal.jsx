import ContainerCards from './ContainerCards'
import SearchField from './SearchField'
import './Principal.css'

const Principal = () => {
  return (
    <div className='container-principal'>
      <SearchField/>
      <ContainerCards/>
    </div>
  )
}

export default Principal
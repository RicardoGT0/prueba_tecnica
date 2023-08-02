import SortModel from './SortModel'

const Sorter = () => {

    const listSortName = [{ ID: 0, Nombre: 'Desactivado' }, { ID: 1, Nombre: 'A-Z' }, { ID: 2, Nombre: 'Z-A' }]
    const listSortNumber = [{ ID: 0, Nombre: 'Desactivado' }, { ID: 1, Nombre: 'Ascendente' }, { ID: 2, Nombre: 'Descendente' }]
    const listSortTypes = [{ ID: 0, Nombre: 'Desactivado' }, { ID: 1, Nombre: 'A-Z' }, { ID: 2, Nombre: 'Z-A' }]
    const listSortEvolutions = [{ ID: 0, Nombre: 'Desactivado' }, { ID: 1, Nombre: 'Ascendente' }, { ID: 2, Nombre: 'Descendente' }]

    return (
        <div className='divFilters'>
            <SortModel name={'Orden Alfabetico'} listOfSorters={listSortName} text={'Desactivado'} />
            <SortModel name={'Orden por Numero'} listOfSorters={listSortNumber} text={'Desactivado'} />
            <SortModel name={'Orden por Tipo'} listOfSorters={listSortTypes} text={'Desactivado'} />
            <SortModel name={'Orden por Numero de Evoluciones'} listOfSorters={listSortEvolutions} text={'Desactivado'} />
        </div>
    )
}

export default Sorter
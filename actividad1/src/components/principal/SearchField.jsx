import { useDispatch } from 'react-redux';
import { getPokemon } from '../../redux/actions';
import './SearchField.css'
import { useState } from 'react';

export default function SearchField() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch()

    const handleInputChange = ({ target }) => {
        setInput(target.value.toLowerCase());
    }

    const onSearch = async (event) => {
        event.preventDefault()
        if (input.length>0)
            dispatch(getPokemon(input))        
    }

    return (
        <form className='divSearch' onSubmit={onSearch}>
            <input className='inputSearch'
                type='search'
                placeholder='Nombre del Pokemon'
                onChange={handleInputChange}
                value={input}
            />
            <button className='filterButton' type="submit">Buscar</button>
        </form>
    )
}

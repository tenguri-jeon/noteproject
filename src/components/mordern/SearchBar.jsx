import React, { useEffect, useState } from 'react';
import { SearchBarComponents } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { onSearch, onsort } from '../../store/modules/makeSlice';
import { darkTheme, lightTheme } from '../../theme/theme';

const SearchBar = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const [searchInput, setSearchInput] = useState({input : ''});
    const dispatch = useDispatch() 

    const onchange = (e) =>{
        const value = e.target.value
        setSearchInput(value)
        dispatch(onSearch(value))
    }
    
    const sortMenu = (e) => {
        dispatch(onsort(e.target.value))
    }

    useEffect(()=>{
        dispatch(onSearch(''))
    }, [])

    return (
        <SearchBarComponents theme={isDarkMode ? darkTheme : lightTheme} >
            <input type="text" name = 'input' 
                placeholder='검색' 
                value={searchInput.input} 
                onChange={onchange}
            />
            <select name="" id="" onChange={sortMenu}>
                <option value="">선택하세요</option>
                <option value="date">첫번째</option>
                <option value="title">이름순</option>
            </select>
        </SearchBarComponents>
    );
};

export default SearchBar;
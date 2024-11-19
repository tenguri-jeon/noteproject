import React from 'react';
import SearchBar from '../mordern/SearchBar';
import MordernItemList from '../mordern/MordernItemList';
import { useNavigate } from 'react-router-dom';

const Firstpage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <SearchBar  />
            <MordernItemList/>
            <button className='blueBtn' onClick={()=>{navigate('/newnote')}}>새노트</button>
        </div>
    );
};

export default Firstpage;
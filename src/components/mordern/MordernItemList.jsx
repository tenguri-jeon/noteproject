import React from 'react';
import MordernItem from '../firstpage/MordernItem';
import { useSelector } from 'react-redux';

const MordernItemList = () => {
    const {filteredData} = useSelector(state => state.makenote)

    return (
        <ul className='notelist'>
            {
                filteredData.map((item) => <MordernItem key={item.id} {...item} /> )
            }
        </ul>
    );
};

export default MordernItemList;
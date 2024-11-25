import React, { useEffect } from 'react';
import MordernItem from '../firstpage/MordernItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../../store/modules/makeSlice';

const MordernItemList = () => {
    const dispatch = useDispatch();
    const {notes ,noteData ,error} = useSelector((state) => state.makenote)
    const {filteredData} = useSelector(state => state.makenote)

    useEffect(()=>{
        dispatch(fetchNotes());
    },[dispatch]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <ul className='notelist'>
            {
                notes.map((item) => <MordernItem key={item.id} {...item} /> )
            }
        </ul>
    );
};

export default MordernItemList;
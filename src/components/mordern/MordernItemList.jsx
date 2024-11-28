import React, { useEffect } from 'react';
import MordernItem from '../firstpage/MordernItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../../store/modules/makeSlice';

const MordernItemList = () => {
    const dispatch = useDispatch();
    const { notes, filteredData, error, loading } = useSelector((state) => state.makenote);
    const searchTerm = useSelector((state) => state.makenote.searchTerm); 

    const notesToDisplay = filteredData.length > 0 || searchTerm === '' ? filteredData : notes;

    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <ul className="notelist">
            {notesToDisplay.map((item) => (
                <MordernItem key={item.id} {...item} />
            ))}
        </ul>
    );
};

export default MordernItemList;

import React, { useEffect } from 'react';
import MordernItem from '../firstpage/MordernItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../../store/modules/makeSlice';

const MordernItemList = () => {
    const dispatch = useDispatch();
    const { notes, filteredData, error } = useSelector((state) => state.makenote);  // redux에서 필터링된 데이터 가져오기
    const searchTerm = useSelector((state) => state.makenote.searchTerm);  // searchTerm을 상태에서 가져오기

    const notesToDisplay = filteredData.length > 0 || searchTerm === '' ? filteredData : notes;

    useEffect(() => {
        dispatch(fetchNotes());  
    }, [dispatch]);

    if (error) {
        return <div>Error: {error}</div>;  
    }

    return (
        <ul className="notelist">
            {
                notesToDisplay.map((item) => (
                    <MordernItem key={item.id} {...item} />
                ))
            }
        </ul>
    );
};

export default MordernItemList;

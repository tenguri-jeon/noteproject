import React from 'react';
import { MordernItemComponents } from '../mordern/style';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onCurrent } from '../../store/modules/makeSlice';
import { darkTheme, lightTheme } from '../../theme/theme';

const MordernItem = ({...item}) => {
    const {id, title , content , date } = item
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const clickElment = () => {
        if(id === '' ){
            alert('검색된 결과가 없습니다. 다시 검색 해 주세요')
        }else{
            navigate(`/edit/${id}`)
            dispatch(onCurrent(item))
        }
    }

    return (
        <MordernItemComponents onClick={clickElment}  theme={isDarkMode ? darkTheme : lightTheme}>
            <div className="title-wrap">
                <strong>{id}</strong>
                <h3>{title}</h3>
            </div>
            <p>{date}</p>
        </MordernItemComponents>
    );
};

export default MordernItem;
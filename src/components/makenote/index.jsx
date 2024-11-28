import React, { useState } from 'react';
import { MakeNoteComponents } from './makenote';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAdd } from '../../store/modules/makeSlice';
import { fetchNotes } from '../../store/modules/action';
import { darkTheme, lightTheme } from '../../theme/theme';


const MakeNote = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const [ text , setText ] = useState({
        title : '',
        content : '',
    })

    const {title , content } = text

    const onChange = (e) => {
        const {name , value} = e.target
        setText({
            ...text ,
            [name] : value
        })
    }

    const saveData = () => {
        if(title && content) {
            dispatch(onAdd(text))
            dispatch(fetchNotes());
            navigate('/')
        }else{
            alert('내용을 모두 입력 해 주세요')
        }
    }

    return (
        <MakeNoteComponents theme={isDarkMode ? darkTheme : lightTheme}>
            <button className='prevBtn' onClick={()=>{navigate('/')}}>뒤로가기</button>
            <div className="content-wrap">
                <input type="text" name='title' value={title} placeholder='타이틀을 입력하세요' onChange={onChange}/>
                <textarea  name="content" id="" value={content} placeholder='내용을 입력하세요' onChange={onChange}></textarea>
            </div>
            <div className="button-wrap">
                <button className='saveBtn' onClick={saveData}>확인</button>
            </div>
        </MakeNoteComponents>
    );
};

export default MakeNote;
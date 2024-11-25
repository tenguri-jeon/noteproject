import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { EditCompoenet } from './edit';
import { onDel, onEdit } from '../../store/modules/makeSlice';
import { darkTheme, lightTheme } from '../../theme/theme';

const Edit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const { current = { title: '', content: '' } } = useSelector(state => state.makenote);
    const { id } = useParams();

    const [text, setText] = useState({onEdit: (state, action) => {
    const { id, title, content } = action.payload; 
    const noteId = Number(id); 

    state.noteData = state.noteData.map((item) => 
        item.id === noteId ? { ...item, title, content } : item
    );
},
        title: current.title,
        content: current.content,
    });

    const { title, content } = text;

    const onChange = (e) => {
        const { name, value } = e.target;
        setText({
            ...text,
            [name]: value
        });
    };

    const deleteCon = () => {
        dispatch(onDel(Number(id)));
        navigate('/'); 
    };

    const EditCon = () => {
        const updatedNote = { id: Number(id), title, content };
        dispatch(onEdit(updatedNote));
        navigate('/')
    }

    return (
        <EditCompoenet theme={isDarkMode ? darkTheme : lightTheme}>
            <button className='prevBtn' onClick={() => { navigate('/') }}>뒤로가기</button>
            <h3>{id} 번째 노트</h3>
            <div className="content-wrap">
                <input
                    type="text"
                    name='title'
                    value={title}
                    placeholder='타이틀을 입력하세요'
                    onChange={onChange}
                />
                <textarea
                    name="content"
                    value={content}
                    placeholder='내용을 입력하세요'
                    onChange={onChange}
                ></textarea>
            </div>
            <div className="button-wrap">
                <button className='deleteBtn' onClick={deleteCon}>노트제거</button>
                <button className='saveBtn' onClick={EditCon}>확인</button>
            </div>
        </EditCompoenet>
    );
};

export default Edit;

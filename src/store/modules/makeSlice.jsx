import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    noteData : [
        { id : 1 , title : '라이트모드 다크모드를 사용해보세요!' , content : '오른쪽 1시방향의 모드 변경을 사용 해 보세요! 취향에 맞게 사용 할 수 있습니다' , date : '2024-10-15' },
        { id : 2 , title : '검색 기능을 사용해보세요' , content : '검색 기능을 사용 해 보세요! 검색 한 글자가 변함에 따라 filtre 기능이 사용됩니다' , date : '2024-10-15' },
        { id : 3 , title : '쉬운 노트 삭제와 수정!' , content : '원할때마다 손쉽게 노트를 생성! 삭제!' , date : '2024-10-15' },
        { id : 4 , title : '새노트를 작성해보세요' , content : '새 노트를 작성 해 보세요! 오른쪽 아래에 새 노트를 클릭하면 새 노트가 작성됩니다' , date : '2024-10-15' },
        { id : 5 , title : '생성순 , 이름순으로 정렬 해 보세요!' , content : '처음 만든 노트를 찾기 어렵다면, 이름별로 보고 싶다면 정렬 기능을 사용 해 보세요!' , date : '2024-10-15' },
    ],
    filteredData: [],
    current : [],
};

const today = new Date()
const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}일`;

export const makeListSlice = createSlice({
    name: 'makeList',
    initialState,
    reducers: {
        onAdd: (state, action) => {
            const newNote = {
                id: state.noteData.length + 1, 
                title: action.payload.title,
                content: action.payload.content, 
                date : formattedDate
            };
            state.noteData.push(newNote);
        },
        onDel: (state, action) => {
            state.noteData = state.noteData.filter((item) => item.id !== action.payload);
            alert('삭제 되었습니다!')
        },
        onEdit: (state, action) => {
            const noteId = Number(action.payload.id); 
            alert('수정되었습니다!!')
            const editCon = {
                ...action.payload , 
                date : `${formattedDate} 수정`
            }
            state.noteData = state.noteData.map((item) => 
                item.id === noteId ? editCon : item
        );
        },
        onCurrent : (state, action) => {
            state.current = action.payload
        },
        onSearch: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.filteredData = [...state.noteData].reverse().filter(item =>
                item.title.toLowerCase().includes(searchTerm)
            );
        },
        onsort : (state , action ) => {
            if(action.payload !==''){
                state.filteredData = [...state.filteredData].sort((a,b)=>
                    a[action.payload] > b[action.payload] ? 1 : -1
                )
            }
        },
    },
});

export const { onAdd , onDel , onEdit , onCurrent , onSearch , onsort} = makeListSlice.actions;
export default makeListSlice.reducer;
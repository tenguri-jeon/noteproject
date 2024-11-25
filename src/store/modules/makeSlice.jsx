import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 데이터 가져오기
export const fetchNotes = createAsyncThunk(
  'notes/fetchNotes', 
  async () => {
    const response = await axios.get('http://localhost:3000'); // MySQL 데이터 가져오기
    return response.data; 
  }
);

const initialState = {
  notes: [], 
  error: null, 
  noteData: [ ], 
  filteredData: [],
  current: [],
};

export const makeListSlice = createSlice({
  name: 'makeList',
  initialState,
  reducers: {
    onAdd: (state, action) => {
      const newNote = {
        id: state.noteData.length + 1,
        title: action.payload.title,
        content: action.payload.content,
        date: action.payload.date,
      };
      state.noteData.push(newNote);
    },
    onDel: (state, action) => {
        const noteId = action.payload;
        
        // 서버로 DELETE 요청 보내기
        axios
          .delete(`http://localhost:3000/delete-note/${noteId}`)
          .then((response) => {
            console.log(response.data);  
            // state.noteData = state.noteData.filter((item) => item.id !== noteId);
            alert('삭제 되었습니다!');
          })
          .catch((error) => {
            console.error('삭제 오류:', error);
            alert('서버에서 삭제 오류가 발생했습니다.');
          });
    },
    onEdit: (state, action) => {
      const noteId = action.payload.id;
      state.noteData = state.noteData.map(item => 
        item.id === noteId ? { ...item, ...action.payload, date: `${action.payload.date} 수정` } : item
      );
    },
    onCurrent: (state, action) => {
      state.current = action.payload;
    },
    onSearch: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredData = state.noteData.filter(item =>
        item.title.toLowerCase().includes(searchTerm)
      );
    },
    onsort: (state, action) => {
      if (action.payload !== '') {
        state.filteredData = state.filteredData.sort((a, b) =>
          a[action.payload] > b[action.payload] ? 1 : -1
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.notes = action.payload; 
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.error = action.error.message; 
      });
  },
});

export const { onAdd, onDel, onEdit, onCurrent, onSearch, onsort } = makeListSlice.actions;
export default makeListSlice.reducer;

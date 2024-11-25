import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';

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
        const today = new Date();
        const date = today.toISOString().split('T')[0];
        axios
        .post('http://localhost:3000/add-note', {
          title: action.payload.title,
          content: action.payload.content,
          date: date,
        })
        .then(() => {
          alert('노트가 추가되었습니다!');
        })
        .catch((error) => {
          console.error('노트 추가 실패:', error);
          alert('서버에서 노트를 추가하는 데 오류가 발생했습니다.');
        });

      },
    onDel: (state, action) => {
        const noteId = action.payload;
        
        // 서버로 DELETE 요청 보내기
        axios
          .delete(`http://localhost:3000/delete-note/${noteId}`)
          .then((response) => {
            alert('삭제 되었습니다!');
          })
          .catch((error) => {
            console.error('삭제 오류:', error);
            alert('서버에서 삭제 오류가 발생했습니다.');
          });
    },
    onEdit: (state, action) => {
        const { id, title, content, date } = action.payload;
        axios
            .put(`http://localhost:3000/edit-notes/${id}`, { title, content, date })
            .then(() => {
                alert('노트가 수정되었습니다!');
            })
            .catch((error) => {
                console.error('편집 오류:', error);
                alert('서버에서 노트 편집에 실패했습니다.');
        });
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

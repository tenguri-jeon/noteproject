import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNotes = createAsyncThunk(
  'notes/fetchNotes', 
  async () => {
    const response = await axios.get('https://port-0-testserver-m40ng5qod08f0898.sel4.cloudtype.app/'); 
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
        .post('https://port-0-testserver-m40ng5qod08f0898.sel4.cloudtype.app/add-note', {
          title: action.payload.title,
          content: action.payload.content,
          date: date,
          id : state.notes.length+1,
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
        
        axios
          .delete(`https://port-0-testserver-m40ng5qod08f0898.sel4.cloudtype.app/delete-note/${noteId}`)
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
            .put(`https://port-0-testserver-m40ng5qod08f0898.sel4.cloudtype.app/edit-notes/${id}`, { title, content, date })
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
        if (searchTerm === '') {
            state.filteredData = state.notes;  
        } else{
            state.filteredData = state.notes.filter(item =>
            item.title.toLowerCase().includes(searchTerm)  
            );
            if(state.filteredData.length === 0){
                state.filteredData = [{ id: '', title: "검색 결과가 없습니다.", content: "", date: "" }];
            }
        }
    },
    onsort: (state, action) => {
      if (action.payload !== '') {
        state.filteredData = state.filteredData.sort((a, b) =>
          a[action.payload] > b[action.payload] ? 1 : -1
        );
      }else{
        state.filteredData = state.notes
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.notes = action.payload; 
        state.filteredData = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.error = action.error.message; 
      });
  },
});

export const { onAdd, onDel, onEdit, onCurrent, onSearch, onsort } = makeListSlice.actions;
export default makeListSlice.reducer;

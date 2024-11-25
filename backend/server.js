import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';  

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MySQL 연결
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'note'
});

// MySQL 연결
connection.connect((err) => {
    if (err) {
        console.error('MySQL 연결 오류:', err.stack);
        return;
    }
    console.log('MySQL에 연결되었습니다! ID:', connection.threadId);
});

// 데이터 조회
// app.get('/', (req, res) => {
//     connection.query('SELECT * FROM noteProject', (err, results) => {
//         if (err) {
//             console.error('쿼리 실행 오류:', err); 
//             return res.status(500).json({ error: '쿼리 실행 오류', details: err }); // 오류 세부사항 반환
//         }
//         res.json(results); 
//     });
// });
app.get('/', (req, res) => {
    const query = 'SELECT * FROM noteProject'; // MySQL에서 모든 노트를 가져옴
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).send('Failed to fetch notes');
      }
    res.json(results); 
});
});

//데이터 삭제
app.delete('/delete-note/:id', (req, res) => {
    const noteId = req.params.id;
  
    const query = 'DELETE FROM noteProject WHERE id = ?';
    connection.query(query, [noteId], (err, result) => {
      if (err) {
        console.error('삭제 오류:', err);
        return res.status(500).json({ error: '삭제 실패', details: err });
      }
      res.status(200).json({ message: '노트 삭제 성공', id: noteId });
    });
});

// 노트 추가하는 API
app.post('/add-note', (req, res) => {
    const { title, content, date } = req.body;

    // MySQL에 데이터 삽입
    const query = 'INSERT INTO noteProject (title, content, date) VALUES (?, ?, ?)';
    connection.query(query, [title, content, date], (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).send('Failed to insert data');
    }

    const newNote = {
        id: result.insertId,
        title,
        content,
        date,
    };

    res.status(201).json(newNote);
    });
});


// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버가 ${PORT} 포트에서 실행 중입니다.`);
});

// 서버 종료 시 연결 종료 (서버 종료 전에 연결 종료)
process.on('SIGINT', () => {
    connection.end((err) => {
        if (err) {
            console.error('MySQL 연결 종료 오류:', err.stack);
        } else {
            console.log('MySQL 연결이 종료되었습니다.');
        }
        process.exit();
    });
});

import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default async (req, res) => {
  // GET 요청 처리 (데이터 조회)
  if (req.method === 'GET') {
    const query = 'SELECT * FROM noteProject';
    connection.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(200).json(results);
    });
  }
  
  // POST 요청 처리 (데이터 추가)
  else if (req.method === 'POST') {
    const { title, content, date } = req.body;
    const query = 'INSERT INTO noteProject (title, content, date) VALUES (?, ?, ?)';
    connection.query(query, [title, content, date], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to insert note' });
      }
      res.status(201).json({
        id: result.insertId,
        title,
        content,
        date,
      });
    });
  }
  
  // PUT 요청 처리 (데이터 수정)
  else if (req.method === 'PUT') {
    const { id } = req.query; // URL 파라미터에서 id 추출
    const { title, content, date } = req.body;
    const query = 'UPDATE noteProject SET title = ?, content = ?, date = ? WHERE id = ?';
    connection.query(query, [title, content, date, id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to update note' });
      }
      res.status(200).json({
        id,
        title,
        content,
        date,
      });
    });
  }

  // DELETE 요청 처리 (데이터 삭제)
  else if (req.method === 'DELETE') {
    const { id } = req.query; // URL 파라미터에서 id 추출
    const query = 'DELETE FROM noteProject WHERE id = ?';
    connection.query(query, [id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to delete note' });
      }
      res.status(200).json({ message: 'Note deleted successfully' });
    });
  }
};

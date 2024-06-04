document.addEventListener('DOMContentLoaded', () => {
    // 사용자 등록
    document.getElementById('user-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = e.target.username.value;
      const age = e.target.age.value;
      const married = e.target.married.checked;
      if (!name) {
        return alert('이름을 입력하세요');
      }
      if (!age) {
        return alert('나이를 입력하세요');
      }
      try {
        await axios.post('/users', { name, age, married });
        getUser();
      } catch (err) {
        console.error(err);
      }
      e.target.username.value = '';
      e.target.age.value = '';
      e.target.married.checked = false;
    });
  
    // 댓글 등록 시
    document.getElementById('comment-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = e.target.userid.value;
      const comment = e.target.comment.value;
      if (!id) {
        return alert('아이디를 입력하세요');
      }
      if (!comment) {
        return alert('댓글을 입력하세요');
      }
      try {
        await axios.post('/comments', { id, comment });
        getComment(id);
      } catch (err) {
        console.error(err);
      }
      e.target.userid.value = '';
      e.target.comment.value = '';
    });
  
    // 사용자 목록과 이벤트 리스너 초기화
    async function getUser() {
      try {
        const res = await axios.get('/users');
        const users = res.data;
        const tbody = document.querySelector('#user-list tbody');
        tbody.innerHTML = '';
        users.forEach(user => {
          const row = document.createElement('tr');
          row.addEventListener('click', () => {
            getComment(user.id);
          });
          row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.married ? '기혼' : '미혼'}</td>
          `;
          tbody.appendChild(row);
        });
      } catch (err) {
        console.error(err);
      }
    }
  
    // 댓글 로딩
    async function getComment(id) {
      try {
        const res = await axios.get(`/users/${id}/comments`);
        const comments = res.data;
        const tbody = document.querySelector('#comment-list tbody');
        tbody.innerHTML = '';
        comments.forEach(comment => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${comment.id}</td>
            <td>${comment.User.name}</td>
            <td>${comment.comment}</td>
            <td>
              <button onclick="editComment(${comment.id})">수정</button>
            </td>
            <td>
              <button onclick="deleteComment(${comment.id})">삭제</button>
            </td>
          `;
          tbody.appendChild(row);
        });
      } catch (err) {
        console.error(err);
      }
    }
  
    // 댓글 수정
    window.editComment = async function (id) {
      const newComment = prompt('Enter new comment');
      if (!newComment) return;
      try {
        await axios.patch(`/comments/${id}`, { comment: newComment });
        getComment(id);
      } catch (err) {
        console.error(err);
      }
    };
  
    // 댓글 삭제
    window.deleteComment = async function (id) {
      try {
        await axios.delete(`/comments/${id}`);
        getComment(id);
      } catch (err) {
        console.error(err);
      }
    };
  
    // 초기 사용자 데이터 로드
    getUser();
  });
  
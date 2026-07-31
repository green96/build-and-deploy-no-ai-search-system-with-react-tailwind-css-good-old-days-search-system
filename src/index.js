//Trong React (và cả JavaScript nói chung), index.js thường đóng vai trò là điểm khởi đầu (entry point) của ứng dụng hoặc của một thư viện.
//Đây là file đầu tiên được chạy khi ứng dụng React khởi động.
import React from "react";//import thư viện React
import ReactDOM from "react-dom";//import thư viện react-dom
//ReactDOM chịu trách nhiệm:kết nối React với trình duyệt và thao tác lên DOM thật (tương tác với HTML,CSS... thật)
import App from './App'; // Import component gốc App (Component gốc của toàn bộ ứng dụng)

//import css
import './global.css'
//div#root là nơi React sẽ hiển thị toàn bộ giao diện.
//render component: <App /> ==> React sẽ gọi hàm function App() đã được export default
//document.getElementById("root"): JavaScript tìm phần tử HTML: có id="root" sẽ trả về phần tử HTML có id tương ứng, hoặc null nếu không tìm thấy.
ReactDOM.render(<App />, document.getElementById('root'));//Connect entire application and display in id="root" element


/*
Luồng Cơ Bản: index.html
      │
      ▼
index.js
      │
      ▼
App.js
      │
      ▼
Các component khác
*/

//Dự án này dùng bản React 17 (Vì nó hỗ trợ cả package và cdn)

//Ngoài ra chúng ta cũng có thể Sử dụng thư viện CDN Cho React ở đây:https://legacy.reactjs.org/docs/cdn-links.html
// Và CDN cho tailwind ở đây: https://tailwindcss.com/docs/installation/play-cdn
// chạy project bằng lệnh: npm start
//Học tới khúc 11:24 link: https://www.youtube.com/watch?v=NDbruK1fzG8&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR&index=37

//Ctrl + C ==> stop sever
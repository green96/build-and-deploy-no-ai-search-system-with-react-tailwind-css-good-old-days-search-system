import React, { useState } from 'react';

//import các component khác (các hàm export) từ các file khác

/*
./components vì file Navbar.jsx nằm trong thư mục components, 


. = thư mục hiện tại (src)
./components = đi từ src → vào components
./components/Narbar = tìm file Narbar.jsx
*/
import { Navbar } from './components/Narbar';
import { Footer } from './components/Footer';
import { Routes } from './components/Routes';
const App = () => {

  //Create a state field (biến trạng thái) để lưu trữ dữ liệu và quản lý trạng thái của component. useState là một hook trong React, giúp tạo ra state field và cung cấp một hàm để cập nhật giá trị của nó.
  const [darkTheme, setDarkTheme] = useState(false); //darkTheme là biến trạng thái, setDarkTheme là hàm để cập nhật giá trị của darkTheme, useState(false) khởi tạo giá trị ban đầu của darkTheme là false (chế độ sáng)

  return (
    //nếu darkTheme có useState(true) ==> thì className div này là dark còn không có thì className div này là rỗng ('')
    <div className={darkTheme ? 'dark' : ''}>
        {/* tailwindcss is utility first
        color in tailwindcss go from 50 to 900, 50 is lightest and 900 is darkest
        dark:bg-gray-900 ==> if the parent div has className dark ==> this div will have background color gray-900 (dark mode)
        dark:text-gray-200 ==> if the parent div has className dark ==> this div will have text color gray-200 (dark mode)

        min-h ==> Utilities for setting the minimum height of an element. (min-h-screen ==> min-height: 100vh;)
        */}
        <div className=' bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
            
            {/*Render component with: <ComponentsFileName/> */}
            <Navbar />
            <Routes />
            <Footer />
        </div>
    </div>
  )
}

export default App;
